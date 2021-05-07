import {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Context} from '../../../store'
import Search from './search_box'
import {MdPinDrop, MdSearch} from 'react-icons/md'
import {GiShoppingBag} from 'react-icons/gi'
import {FlexRow, LinkSmall} from '../../../styles'

export default function LinksComponent() {

  const { state } = useContext(Context);

  const [cartItems, setCartItems] = useState(state.cart.length)
  
  useEffect(()=>{
    setCartItems(state.cart.length)
  }, [state.cart])

  return (
    <FlexRow margin='0 0 0 auto'>
      <Link href='/cart'>
        <Cart>
          <LinkSmall  margin="0 1.9rem 0 0">
            <GiShoppingBag/>
            Cart
          </LinkSmall>
          {cartItems > 0 && <Amount>{cartItems}</Amount>}
        </Cart>
      </Link>

      <Link href='/contact'>
        <LinkSmall margin="0 1.9rem 0 0">
          <MdPinDrop/>
          Find Store
        </LinkSmall>        
      </Link> 

      <Search />
      
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
const Cart = styled.div`
  position: relative;
`
const Amount = styled.div`
  position: absolute;
  top: -.3rem;
  left: -1.4rem;
  width: 1.4rem;
  height: 1.4rem;
  background-color: ${p=>p.theme.secondary};
  color: ${p=>p.theme.grey5};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`