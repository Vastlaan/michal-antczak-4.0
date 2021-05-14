import {Dispatch, SetStateAction} from 'react'
import {useRouter} from 'next/router'
import {Field} from '../../../styles'
import {ErrorObject} from '../../../types'
import Error from '../../utils/error_message'

interface NameProps{
  name: string;
  setName:  Dispatch<SetStateAction<string>>
  error: ErrorObject
}


export default function NameComponent({name, setName, error}:NameProps) {

  return (
    <Field color='snow'>
      <label htmlFor="name">Full Name:</label>
      <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
      />
      {error.field === "name" && <Error message={error.message}/>}
  </Field>
  )
}