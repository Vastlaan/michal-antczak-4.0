import Stripe from 'stripe'
import {NextApiRequest, NextApiResponse} from 'next'
import {countFinalPriceOfSingleProduct} from '../../../utils'
import {getProductById} from '../../../database'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
})

export default async function checkout(req: NextApiRequest, res: NextApiResponse){
  const {cart, client} = req.body // client is unused, but in the future might be

  try{
     
    let controlQuantityError = ''
    let totalAmount = 0

    // create cart to push to the stripe service
    const cartForStripe = await Promise.all(cart.map( async item=>{

      const currentProduct = await getProductById(item.item.id)
      
      totalAmount+= Number(countFinalPriceOfSingleProduct(item.item)) * item.quantity

      if(currentProduct.product[0].stock < item.quantity){
        controlQuantityError=`The orderd quantity exceeds the amount of items in the stock: ${currentProduct.product[0].stock}. Please contact customer service for more information.`
        return  // indicates that error must be returned in the response
      }
      const amount = (Number(countFinalPriceOfSingleProduct(item.item)) * 100).toFixed(0)
      return {
        name: item.item.displayName, 
        description: item.item.id, 
        images: [item.item.image], 
        amount,
        currency: 'gbp',
        quantity: item.quantity,
      }
    }))
    // if more items ordered than in the stock, then return error
    if(controlQuantityError){
      return res.status(400).json({ failure: controlQuantityError })
    }
    
    // add delivery costs if total amount less than 100
    if(totalAmount < 100){
      cartForStripe.push({
        name: "Delivery costs",  
        images: [], 
        amount: 399,
        currency: 'gbp',
        quantity: 1,
      })
    }

    // open stripe session 
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartForStripe,
      success_url: process.env.SUCCES_URL,
      cancel_url: `${req.headers.origin}`,
    });
    return res.status(200).json({ sessionId: session.id })
  }catch(e){
    console.error(e)
    return res.status(400).json({ failure: "Ups, something went wrong" })
  }

  

  
}