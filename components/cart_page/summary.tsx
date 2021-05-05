import { useContext} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Context} from '../../store'
import {countFinalPriceOfSingleProduct} from '../../utils'
import { respond, TextBold, Text, ButtonPrimary} from '../../styles'

export default function SummaryComponent() {

  const { state } = useContext(Context);

  const totalPrice = state.cart.reduce((acc, item)=>acc += Number(countFinalPriceOfSingleProduct(item.item)) * item.quantity,0)

  return (
     <Summary>
      <TextBold align='center' margin='1.4rem'>Total Price:</TextBold>
      <Price>
        &pound;{totalPrice.toFixed(2)}
      </Price>
      <Text>*price includes taxes</Text>
      <CustomPrimaryButton>Order</CustomPrimaryButton>
    </Summary>
  )
}
const Summary = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${()=>respond('m', 'display: block; border-left: 1px solid rgba(0,0,0,.3);position: sticky;top: 0;align-self: start;')}
`
const Price = styled.p`
  font-size: 3.3rem;
  color: ${p=>p.theme.grey4};
  margin: 1.4rem;
  text-align: left;

  ${()=>respond('m', 'text-align: center; margin: 2.7rem auto;')}
`
const CustomPrimaryButton = styled(ButtonPrimary)`
  margin: 1.4rem;

  ${()=>respond('m', 'margin: 1.4rem auto;')}
`