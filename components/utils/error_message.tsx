import styled from 'styled-components'
import {MdErrorOutline} from 'react-icons/md'

interface ErrorProps{
  message: string;
}

export default function ErrorMessageComponent({message}:ErrorProps) {
  return (
    <Error>
      <MdErrorOutline/>
      <small>{message}</small>
    </Error>
  )
}

const Error = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding: .4rem .9rem;
  background-color: ${p=>p.theme.primary};
  color: ${p=>p.theme.grey1};

  svg{
    font-size: 1.9rem;
  }
  small{      
      font-size: 1.4rem;
      font-weight: 300;
      letter-spacing: .15rem;
  }
`