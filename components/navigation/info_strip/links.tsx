import styled from 'styled-components'
import Link from 'next/link'
import {MdPinDrop, MdSearch} from 'react-icons/md'
import {GiShoppingBag} from 'react-icons/gi'
import {FlexRow, LinkSmall} from '../../../styles'

interface InfoStripProps{
  isSmall: boolean;
}

export default function LinksComponent({isSmall}:InfoStripProps) {

  return (
    <FlexRow margin='0 0 0 auto'>
      <Link href='/cart'>
        <LinkSmall  margin="0 1.9rem 0 0">
          <GiShoppingBag/>
          Cart
        </LinkSmall>
      </Link>

      {!isSmall &&
      <>
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
      </>}
     
    </FlexRow>
  )
}

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