import {SetStateAction, Dispatch} from 'react'
import {Field, FlexRow, Heading3} from '../../../../styles'

interface AddressProps{
  street: string;
  setStreet: Dispatch<SetStateAction<string>>;
  number: string;
  setNumber: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  postcode: string;
  setPostcode: Dispatch<SetStateAction<string>>;
  error: {field: string, message: string};
}

export default function AddressComponent({street, setStreet, number, setNumber, city, setCity, postcode, setPostcode,error}:AddressProps) {
  return (
    <>
      <Heading3 margin='2.7rem 0 1.4rem 0'>Shipping Address</Heading3>

      <FlexRow justify='flex-start'>
        <Field>
          <label htmlFor="street">Street Address<sup>*</sup></label>
          <input type="text" id='street' name='street' required placeholder='street address' onChange={e=>setStreet(e.target.value)} value={street}/>
          {error.field==='street' && <small>{error.message}</small>}
        </Field>
        <Field>
          <label htmlFor="number">House/Flat Number<sup>*</sup></label>
          <input type="text" id='number' placeholder='number' onChange={e=>setNumber(e.target.value)} value={number}/>
          {error.field==='number' && <small>{error.message}</small>}
        </Field>
      </FlexRow>

      <FlexRow justify='flex-start'>
        <Field>
          <label htmlFor="city">Town/city<sup>*</sup></label>
          <input type="text" id='city' name='city' required placeholder='town or city' onChange={e=>setCity(e.target.value)} value={city}/>
          {error.field==='city' && <small>{error.message}</small>}
        </Field>
        <Field>
          <label htmlFor="postcode">Postcode<sup>*</sup></label>
          <input type="text" id='postcode' placeholder='postcode, e.g. W1F7NU' onChange={e=>setPostcode(e.target.value)} value={postcode}/>
          {error.field==='postcode' && <small>{error.message}</small>}
        </Field>
      </FlexRow>
    </>
  )
}
