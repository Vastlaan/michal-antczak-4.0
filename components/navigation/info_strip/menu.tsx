import styled from 'styled-components'
import Link from 'next/link'
import {fonts} from '../../../styles'
import {GiShoppingBag} from 'react-icons/gi'

interface MenuProps{
  isOpen: boolean;
}

export default function MenuComponent({isOpen}:MenuProps) {

  return (
    <Links isOpen={isOpen}>
      <Link href='/'>
        <MenuLink>Home</MenuLink>
      </Link>
      <Link href='/men'>
        <MenuLink>Men's collection</MenuLink>
      </Link>
      <Link href='/women'>
        <MenuLink>Women's collection</MenuLink>
      </Link>
      <Link href='/kids'>
        <MenuLink>Kids's collection</MenuLink>
      </Link>
      <Link href='/contact'>
        <MenuLink>Contact</MenuLink>
      </Link>
      <br/>
      <Link href='/cart'>
        <MenuLink>
          <GiShoppingBag/>
          Cart
        </MenuLink>
      </Link>
    </Links>
  )
}

const Links = styled.ul<MenuProps>`
  list-style: none;
  padding: 2.7rem;
  padding-top: 9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: auto;
  position: absolute;
  right: ${p=>p.isOpen?'0':'-100%'};
  top: 0;
  transition: all .3s;
  background-color: ${p=>p.theme.grey5};
`

const MenuLink = styled.li`
  margin: 1.4rem 0;
  font-size: 1.9rem;
  font-family: ${fonts.heading};
  text-transform: uppercase;
  color: ${(p)=>p.color?p.color:p.theme.grey1};
  cursor: pointer;

  svg{
    margin-right: 1.4rem;
  }
`
