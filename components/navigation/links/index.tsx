import styled from 'styled-components'
import Categories from './categories'
import { FlexRow } from '../../../styles'


export default function LinksComponent() {

  return (
    <Links>

    <FlexRow>
      <Logo><span>Golden</span> Shoes</Logo>
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
`
const Logo = styled.h1`
  font-size: 2.7rem;
  color:${p=>p.theme.grey4};
  span{
    color:${p=>p.theme.grey5};
  }
`

