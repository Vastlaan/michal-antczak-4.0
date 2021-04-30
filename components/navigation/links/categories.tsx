import {useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { fonts,FlexRow, LinkItem, Heading3 } from '../../../styles'
import {categories} from '../../../models/category'
import {FlexibleComponentProps} from '../../../types'

export default function CategoriesComponent() {

  const [top, setTop] = useState({value: '-1200%', type: ''})

  function displaySubcategories(type: string){
    console.log(type)
    setTop({
      value: '100%',
      type
    })
  }
  function hideSubcategories(){
    setTop({
      value: '-1200%',
      type: ''
    })
  }
  return (
    <Categories>
      {
        categories.map((cat,i)=> cat.parent===null && <Link key={i} href={cat.link}>
          <LinkContainer onMouseOver={()=>displaySubcategories(cat.type)} onMouseLeave={()=>hideSubcategories()}>
            <LinkItem>{cat.displayName}</LinkItem>
            <Subcategories top={top.type===cat.type && top.value}>
              <Heading3>{cat.displayName}</Heading3>
              {categories.map((sub,i)=> sub.parent===cat.type && <Link href={sub.link} key={`${i}-sub`}>
                <Sub>{sub.displayName}</Sub>
              </Link>)}
            </Subcategories>
          </LinkContainer>
          
        </Link>)
      }
    </Categories>
  )
}

const Categories = styled(FlexRow)`

`
const Subcategories = styled.ul<FlexibleComponentProps>`
  position: absolute;
  top: ${p=>p.top?p.top:"-1200%"};
  right:0;
  z-index: -1;
  min-width: 25rem;
  padding: 2.7rem;
  background-color: ${p=>p.theme.grey2};
  border: 1px solid ${p=>p.theme.grey2};
  transition: all .3s;
`


const LinkContainer = styled.div`
  position: relative;

  &:hover{
    background-color: ${p=>p.theme.grey2};

    a{
      color: ${p=>p.theme.grey5};
    }
  }
`

const Sub = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${p=>p.theme.grey5};
  font-size: 1.4rem;
  font-family: ${fonts.heading};
  letter-spacing: .2rem;
  font-weight: 300;
  padding: .3rem 0;
  margin: 1.4rem 0;
  transition: all .3s;
  cursor:pointer;
  border-bottom: 1px solid transparent;
  

  svg{
    font-size: 1.9rem;
    margin-right: .9rem;
    color: ${p=>p.theme.grey1};
    transition: all .3s;
  }

  &:hover{
    color: ${p=>p.theme.primary};
    border-bottom: 1px solid ${p=>p.theme.primary};

    svg{
      color: ${p=>p.theme.primary};
    }
  }
`

