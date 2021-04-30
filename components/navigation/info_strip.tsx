import styled from 'styled-components'
import Link from 'next/link'
import {MdPinDrop, MdSearch} from 'react-icons/md'
import {GiShoppingBag, GiSonicShoes} from 'react-icons/gi'
import {FlexRow, LinkSmall} from '../../styles'

export default function InfoStripComponent() {
  return (
      <InfoStrip>

        <FlexRow>
          <Link href='/cart'>
            <LogoIcon>
              <GiSonicShoes/>
            </LogoIcon>
          </Link>
          
        </FlexRow>

        <FlexRow>
          <Link href='/cart'>
            <LinkSmall  margin="0 1.9rem 0 0">
              <GiShoppingBag/>
              Cart
            </LinkSmall>
          </Link>

          <Link href='/contact'>
            <LinkSmall href='mailto:info@itcontext.nl' margin="0 1.9rem 0 0">
              <MdPinDrop/>
              Find Store
            </LinkSmall>        
          </Link> 

          <SearchBox>
            <MdSearch/>
            <input type="text"/>
          </SearchBox>
        </FlexRow>
        
      </InfoStrip>
  )
}

const InfoStrip = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .9rem 2.7rem;
  background-color: ${p=>p.theme.grey5};
`
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${p=>p.theme.grey1};
  padding: 0 0 0 .9rem;
  transition: all .3s;

  &:hover{
    svg{
      color: ${p=>p.theme.grey4};
    }
    
  }

  svg{
    font-size: 1.9rem;
    color: ${p=>p.theme.grey4};
    margin-right: .9rem;
    transition: all .3s;
    cursor: pointer;
  }

  input{
    padding: .4rem 1.4rem;

    &:active, :focus{
      outline: none;
      box-shadow: 0 0 0 transparent;
    }
  }
`

const LogoIcon = styled.div`
  cursor: pointer;
  svg{
    font-size: 2.7rem;
    color: ${p=>p.theme.secondary};
  }
`
