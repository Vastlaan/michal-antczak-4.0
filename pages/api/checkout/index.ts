import Stripe from 'stripe'
import {NextApiRequest, NextApiResponse} from 'next'
import {countFinalPriceOfSingleProduct} from '../../../utils'
import {getProductById} from '../../../database'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
})

export default async function checkout(req: NextApiRequest, res: NextApiResponse){
  const {cart, client} = req.body

  try{
     
    let controlQuantityError = ''

    const cartForStripe = await Promise.all(cart.map( async item=>{

      const currentProduct = await getProductById(item.item.id)

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
    if(controlQuantityError){
      res.status(400).json({ failure: controlQuantityError })
    }
    

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