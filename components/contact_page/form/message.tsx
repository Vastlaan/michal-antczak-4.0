import {Dispatch, SetStateAction} from 'react'
import {Field} from '../../../styles'
import {ErrorObject} from '../../../types'
import Error from '../../utils/error_message'

interface MessageProps{
  message: string;
  setMessage:  Dispatch<SetStateAction<string>>
  error: ErrorObject
}

export default function MessageComponent({message, setMessage, error}:MessageProps) {

  return (
    <Field color='snow'>
      <label htmlFor="message">Message:</label>
      <textarea
          id="message"
          name="message"
          value={message}
          rows={5}
          cols={20}
          onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {error.field === "message" && <Error message={error.message} />}
  </Field>
  )
}