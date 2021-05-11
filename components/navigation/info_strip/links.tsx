import {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Context} from '../../../store'
import {RiCustomerServiceLine} from 'react-icons/ri'
import {GiShoppingBag} from 'react-icons/gi'
import {FlexRow, LinkSmall, respond} from '../../../styles'

interface LinksProps{
  isSmall: boolean;
}
export default function LinksComponent({isSmall}: LinksProps) {

  const { state } = useContext(Context);

  const [cartItems, setCartItems] = useState(state.cart.length)
  
  useEffect(()=>{
    setCartItems(state.cart.length)
  }, [state.cart])

  return (
    <LinksContainer>
      <Link href='/cart'>
        <Cart>
          <LinkSmall  margin="0 1.9rem 0 0">
            <GiShoppingBag/>
            {isSmall?"":"Cart"}
          </LinkSmall>
          {cartItems > 0 && <Amount>{cartItems}</Amount>}
        </Cart>
      </Link>

      <Link href='/contact'>
        <LinkSmall margin="0 1.9rem 0 0">
          <RiCustomerServiceLine/>
          {isSmall?"":"Customer Service"}
        </LinkSmall>        
      </Link> 
      
    </LinksContainer>
  )
}

const LinksContainer = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${p=>p.theme.grey5};
  padding: 1.4rem;

  ${()=>respond('m','position:static;flex-direction: row; width: auto; margin: 0 0 0 auto;padding: 0; background-color: transparent;justify-content: center;')}
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