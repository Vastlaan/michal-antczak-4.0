import {Dispatch, SetStateAction} from 'react'
import {Field} from '../../../styles'
import {ErrorObject} from '../../../types'
import Error from '../../utils/error_message'

interface EmailProps{
  email: string;
  setEmail:  Dispatch<SetStateAction<string>>
  error: ErrorObject
}


export default function EmailComponent({email, setEmail, error}:EmailProps) {
  return (
    <Field color='snow'>
        <label htmlFor="email">E-mail:</label>
        <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        {error.field === "email" && <Error message={error.message}/>}
    </Field>
  )
}