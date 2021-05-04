import { useContext} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Context} from '../../store'
import Heading from '../utils/heading'
import Item from './item'
import Summary from './summary'
import { SectionNarrow, FlexRow, FlexCol, TextBold, ButtonPrimary, respond} from '../../styles'


export default function Cart() {

  const { state } = useContext(Context);

  return (
    <SectionNarrow>
      <Heading text='Shopping Cart' />

      <CartGrid>

        <FlexCol align='flex-start'>
          {state.cart.length>0 ? state.cart.map((item, i)=>{
            return(
              <Item key={i} item={item}/>
            )
          }): <TextBold margin='0 auto'>Your shopping cart is empty</TextBold>}
        </FlexCol> 

        <Summary />

      </CartGrid>
    </SectionNarrow>
  )
}

const CartGrid = styled.div`
  margin: 2.7rem 0;
  display: grid;
  grid-template-columns: 1fr;
  
  &::-webkit-scrollbar{display: block; width: 7px;}
  &::-webkit-scrollbar-track { background: ${p=>p.theme.grey4};}
  &::-webkit-scrollbar-thumb { background: ${p=>p.theme.grey2};}

  ${() =>respond('m','grid-template-columns: minmax(45rem,1fr) 25rem;max-height: 45rem;overflow: auto;')}
`