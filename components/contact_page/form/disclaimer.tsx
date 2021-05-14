import {Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'
import {respond} from '../../../styles'
import {MdTouchApp} from 'react-icons/md'


interface DisclaimerProps{
  disclaimer: boolean;
  setDisclaimer:  Dispatch<SetStateAction<boolean>>

}
interface DisclaimerStyleProps{
  selected?: boolean
}

export default function DisclaimerComponent({disclaimer, setDisclaimer}:DisclaimerProps) {

  return (
    <DisclaimerField selected={disclaimer}>
        
        <p>
          {
          `I consent to the processing of personal data contained in this form in accordance with the Personal Data Protection Act in connection with sending an inquiry via the contact form.
           Providing data is voluntary, but necessary to process the inquiry.
           I have been informed that I have the right to access my data, the possibility of correcting it, and requesting the cessation of its processing.
           The administrator of personal data is Golden Shoe`
          }
          
        </p>
        <input
            type="checkbox"
            id="disclaimer"
            name="disclaimer"
            checked={disclaimer}
            onChange={(e) => setDisclaimer(prevState=>!prevState)}
        />
        <label htmlFor="disclaimer" aria-label='disclaimer'><MdTouchApp/>Agree</label>
        
    </DisclaimerField>
  )
}

const DisclaimerField = styled.div<DisclaimerStyleProps>`
    width: 100%;
    max-width: 45rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.4rem 0;
    padding: 1.4rem 0;
    position: relative;

    ${()=>respond('m','margin: 1.4rem 0 1.4rem auto;')}
    
    input{
      align-self: flex-start;
      margin: 1.4rem 0;
      opacity: 0;
      visibility: hidden;
      
      
    }
    label{
      position: absolute;
      top: 75%;
      left: 0;
      padding: .4rem 1.4rem;
      border:1px solid ${p=>p.selected?'#43a537':p.theme.secondary};
      color: ${p=>p.selected?'#43a537':p.theme.secondary};
      font-size: 1.4rem;
      cursor:pointer;
      display: flex;
      align-items: center;

      svg{
        margin-right: .4rem;
        font-size:1.9rem;
      }
    }
    p{
      font-size: 1.2rem;
      font-weight:300;
      letter-spacing: .15rem;
      color: ${(p) => p.theme.grey2};
    }
`