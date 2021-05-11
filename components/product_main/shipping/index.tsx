import {useState} from 'react';
import styled, {withTheme} from 'styled-components'
import ShippingDetails from './shipping'
import About from './about'
import Returns from './returns'
import {ButtonEmptySmall} from '../../../styles'

function ShippingComponent({theme}) {

  const [selectedCategory, setSelectedCategory] = useState(1) // options 1,2,3
  return (
    <Shipping>
      <Categories>
        <ButtonEmptySmall highlight={selectedCategory===1} onClick={()=>setSelectedCategory(1)}>Product</ButtonEmptySmall>
        <ButtonEmptySmall highlight={selectedCategory===2} onClick={()=>setSelectedCategory(2)}>Shipping</ButtonEmptySmall>
        <ButtonEmptySmall highlight={selectedCategory===3} onClick={()=>setSelectedCategory(3)}>Returns</ButtonEmptySmall>
      </Categories>
      <Description>
       {
         selectedCategory===1?<About/>:selectedCategory===2?<ShippingDetails/>:<Returns/>
       }
      </Description>
    </Shipping>
  )
}
export default withTheme(ShippingComponent)

const Shipping = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`
const Categories = styled.div`
  display: flex;
  
`
const Description = styled.div`
  padding: 2.7rem 1.4rem;
  border-bottom: 1px solid rgba(0,0,0,.3);
`