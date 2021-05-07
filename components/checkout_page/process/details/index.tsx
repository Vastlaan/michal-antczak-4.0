import {useContext} from 'react'
import styled from 'styled-components'
import {Context} from '../../../../store'
import {countFinalPriceOfSingleProduct} from '../../../../utils'
import {respond, FlexRow, Heading3,Text, TextBold, TextSmall} from '../../../../styles'

export default function DetailsComponent() {

  const {state} = useContext(Context)

  const totalPrice = state.cart.reduce((acc, item)=>acc += Number(countFinalPriceOfSingleProduct(item.item)) * item.quantity,0)

  let delivery = 0
  if(totalPrice < 100){
    delivery = 3.99
  }

  return (
    <Details>
      <Heading3 margin='2.7rem 0 1.4rem 0'>Order Detalis</Heading3>

      <FlexRow wide='100%' margin='1.4rem 0' justify='space-between'>
        <Text>Order value:</Text>
        <Text>&pound;{totalPrice.toFixed(2)}</Text>
      </FlexRow>
      <FlexRow wide='100%' margin='1.4rem 0' justify='space-between'>
        <Text>Delivery:</Text>
        <Text>&pound;{delivery}</Text>
      </FlexRow>
      <FlexRow wide='100%' justify='space-between' margin='1.4rem 0'>
        <TextBold>Total amount:</TextBold>
        <TextBold>&pound;{(totalPrice + delivery).toFixed(2)}</TextBold>
      </FlexRow>
      
      <Text margin='.4rem 0' align='left'>Free shipping</Text>
      <TextSmall margin='.4rem 0' align='left'>We offer free delivery to home for purchases above &pound;100</TextSmall>
      <Text margin='.4rem 0' align='left'>Returns</Text>
      <TextSmall margin='.4rem 0' align='left'>
        We offer free and flexible returns.
        We are happy to refund within 28 days for any unsuitable items, provided they are in resalable condition.
      </TextSmall>
      <Text margin='.4rem 0' align='left'>Need help?</Text>
      <TextSmall margin='.4rem 0' align='left'>
        Contact our Customer Service
      </TextSmall>
    </Details>
  )
}

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${()=>respond('m','border-left: 1px solid rgba(0,0,0,.3);padding: 0 1.4rem;')}
`
