import {useState} from 'react'
import styled from 'styled-components'
import Information from './information'
import Address from './address'
import Payment from './payment'
import {FlexCol, ButtonPrimary} from '../../../../styles'
import {validateCheckoutForm} from '../../../../validations'

export default function FormComponent() {

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

  function purchase(e){
    e.preventDefault()
    setError({field:"", message:""})

    console.log(name, surname, email, phone, street, number, city, postcode, payment)

    const isFormValid = validateCheckoutForm({name, surname, email, phone, street, number, city, postcode, payment})
    if(isFormValid.field){
      return setError(isFormValid)
    }

    console.log(name, surname, email, phone, street, number, city, postcode, payment)
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
