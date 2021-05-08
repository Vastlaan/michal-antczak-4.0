import {useState, useContext} from 'react'
import styled from 'styled-components'
import {Context} from '../../../../store'
import Information from './information'
import Address from './address'
import Payment from './payment'
import {FlexCol, ButtonPrimary} from '../../../../styles'
import {validateCheckoutForm} from '../../../../validations'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_ELRnct8g4sptiDFtYSv7KTys')

export default function FormComponent() {

  const {state} = useContext(Context)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [postcode, setPostcode] = useState('')
  const [payment, setPayment] = useState("")

  const [error, setError] = useState({field:"", message:""})

  async function purchase(e){
    e.preventDefault()
    setError({field:"", message:""})

    const isFormValid = validateCheckoutForm({name, surname, email, phone, street, number, city, postcode, payment})
    if(isFormValid.field){
      return setError(isFormValid)
    }

    const data = {
      cart: state.cart,
      client: {name,surname,email,phone,street,number,city,postcode,payment},
    }

    try{
      const response = await fetch('/api/checkout',{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const { sessionId, failure } = await response.json();

      if(!sessionId){      
        return setError({field:"general", message: failure})
      }

      localStorage.setItem(
          "goldenshoesessionid",
          JSON.stringify({ sessionId })
      );
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
          sessionId,
      });
      if(error){setError({field:"general", message: error.message})}
    }
    catch(e){
      console.error(e)
      return setError({field:"general", message: "Ups, something went wrong. Try again later."})
    }
    
  }

  return (
    <Form onSubmit={purchase}>
      <FlexCol align='flex-start'>

        <Information name={name} setName={setName} surname={surname} setSurname={setSurname} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} error={error}/>

        <Address street={street} setStreet={setStreet} number={number} setNumber={setNumber} city={city} setCity={setCity} postcode={postcode} setPostcode={setPostcode} error={error}/>

        <Payment payment={payment} setPayment={setPayment} error={error} />

        {error.field && <small>{error.message}</small>}
        <ButtonPrimary type='submit' margin='2.7rem 0'>Purchase</ButtonPrimary>

      </FlexCol>
    </Form>
  )
}

const Form = styled.form`

`
