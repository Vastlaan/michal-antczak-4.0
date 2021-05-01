
import styled from 'styled-components'
import Contact from './contact'
import Shopping from './shopping'
import Information from './information'
import Copyright from './copyright'
import {respond, ContainerNarrow} from '../../styles'

export default function FooterComponent() {
  return (
    <Footer>
      <ContainerNarrow>
        <Logo><span>Golden</span> Shoe</Logo>
        <Grid>
          
          <Contact/>

          <Shopping />

          <Information />

        </Grid>
      </ContainerNarrow>

      <Copyright/>
      
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 4.7rem 0 0 0;
  background-color: ${p=>p.theme.grey5};
  ${()=>respond('s','grid-template-columns: 45rem 1fr;')}
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4.7rem;
  
  ${()=>respond('s','grid-template-columns: 45rem 1fr;')}
  ${()=>respond('m', 'grid-template-columns: 45rem 1fr 1fr;')}
`

const Logo = styled.h2`
  margin-bottom: 2.7rem;
  font-size: 2.7rem;
  color:${p=>p.theme.grey1};
  span{
    color:${p=>p.theme.secondary};
  }
`

