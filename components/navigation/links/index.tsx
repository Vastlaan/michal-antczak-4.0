import styled from 'styled-components'
import Categories from './categories'
import { FlexRow, Logo } from '../../../styles'


export default function LinksComponent() {

  return (
    <Links>

    <FlexRow>
      <Logo><span>Golden</span> Shoe</Logo>
    </FlexRow>

    <Categories/>
      
    </Links>
  )
}

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2.7rem;
  background-color: ${p=>p.theme.grey1};
  border-bottom: 1px solid rgba(0,0,0,.3);
`

