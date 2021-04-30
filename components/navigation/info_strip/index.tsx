import styled from 'styled-components'
import Logo from './logo'
import Links from './links'


export default function InfoStripComponent() {
  return (
      <InfoStrip>

        <Logo/>

        <Links/>
        
      </InfoStrip>
  )
}

const InfoStrip = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .9rem 2.7rem;
  background-color: ${p=>p.theme.grey5};
`


