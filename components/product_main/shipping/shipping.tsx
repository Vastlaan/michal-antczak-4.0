import {Text, TextBold} from '../../../styles'

export default function AboutProductComponent() {
  return (
    <>
      
      <TextBold align='left' wide='100%' margin='0 0 1.4rem 0'>
        Delivery
      </TextBold>
      <Text align='left' wide='100%' >
        Shipping is available to residential addresses within UK. The product is usually delivered withing 1-3 working days. Precise day of delivery will be specified in the confirmation e-mail after purchasing the product.
      </Text>
      <TextBold align='left' wide='100%' margin='1.4rem 0'>
        Payment
      </TextBold>
      <Text align='left' wide='100%'>
        We accept card payments via MasterCard and Visa. You can also select to pay by PayPal or Golden Shoe giftcard. Find out more on our customer service pages.
      </Text>
    </>
  )
}