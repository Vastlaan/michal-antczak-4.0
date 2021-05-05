import {SetStateAction, Dispatch} from 'react'
import styled from 'styled-components'
import {Field, FlexRow, Heading3} from '../../../../styles'

interface PaymentProps{
  payment: string;
  setPayment: Dispatch<SetStateAction<string>>;
  error: {field: string, message: string};
}

export default function InformationComponent({payment, setPayment, error}:PaymentProps) {
  return (
    <>
      <Heading3 margin='2.7rem 0 1.4rem 0'>Payment method</Heading3>

      <FlexRow>
        <FieldPayment>
          <label htmlFor="payment">Credit Card</label>
          <input type="radio" id='creditcard' name='payment' value='creditcard' onChange={(e)=>setPayment(e.target.value)}/>
          <label htmlFor="payment">Paypal</label>
          <input type="radio" id='paypal' name='payment' value='paypal' onChange={(e)=>setPayment(e.target.value)}/>
        </FieldPayment>
      </FlexRow>
    </>
  )
}
const FieldPayment = styled(Field)`
  flex-direction: row;

  input{
    padding:0;
    min-width: 2.7rem;
    margin-right: 2.7rem;

    &:focus,:active{
      box-shadow: none;
    }
  }
`