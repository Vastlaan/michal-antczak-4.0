import Link from 'next/link'
import styled from 'styled-components'
import Categories from './categories'
import { respond, FlexRow, Logo } from '../../../styles'


export default function LinksComponent() {

  return (
    <Links>

    <FlexRow>
      <Link href='/'>
        <Logo><span>Golden</span> Shoe</Logo>
      </Link>
    </FlexRow>

    <Categories/>
      
    </Links>
  )
}

const Links = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.4rem;
  background-color: ${p=>p.theme.grey1};
  border-bottom: 1px solid rgba(0,0,0,.3);

  ${()=>respond('m','display: flex;')}
`

