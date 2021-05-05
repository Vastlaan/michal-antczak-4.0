import {SetStateAction, Dispatch} from 'react'
import {Field, FlexRow, Heading3} from '../../../../styles'

interface InfromationProps{
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  surname: string;
  setSurname: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  error: {field: string, message: string};
}

export default function InformationComponent({name, setName, surname, setSurname, email, setEmail, phone, setPhone, error}: InfromationProps) {
  return (
    <>
      <Heading3 margin='2.7rem 0 1.4rem 0'>My information</Heading3>

      <FlexRow justify='flex-start'>
        <Field>
          <label htmlFor="name">First Name<sup>*</sup></label>
          <input type="text" id='name' name='name' required placeholder='first name' onChange={e=>setName(e.target.value)} value={name}/>
          {error.field==='name' && <small>{error.message}</small>}
        </Field>
        <Field>
          <label htmlFor="surname">Last Name<sup>*</sup></label>
          <input type="text" id='surname' required placeholder='last name' onChange={e=>setSurname(e.target.value)} value={surname}/>
          {error.field==='surname' && <small>{error.message}</small>}
        </Field>
      </FlexRow>
      <FlexRow justify='flex-start'>
        <Field>
          <label htmlFor="email">Email<sup>*</sup></label>
          <input type="email" id='email' name='email' required placeholder='your e-mail' onChange={e=>setEmail(e.target.value)} value={email}/>
          {error.field==='email' && <small>{error.message}</small>}
        </Field>
        <Field>
          <label htmlFor="phone">Phone<sup>*</sup></label>
          <input type="tel" id='phone' name='phone' required placeholder='phone nr. e.g. 0682307051' onChange={e=>setPhone(e.target.value)} value={phone}/>
          {error.field==='phone' && <small>{error.message}</small>}
        </Field>
      </FlexRow>
    </>
  )
}
