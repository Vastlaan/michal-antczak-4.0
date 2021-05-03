import Link from 'next/link';
import styled from 'styled-components';
import Product from '../product_small'
import {SectionNarrow, ProductsConatiner, ButtonSecondary} from '../../styles'
import {ProductProps} from '../../types'
import Heading from '../utils/heading'

interface ProductsShortProps{
  category: string;
  products: ProductProps[]
  link: string
}

export default function ProductsShortComponent({category, products, link}:ProductsShortProps) {

  const items =[]

  // this will filter products based on parent component and amount of items to display (max 6)
  products.map(prod=>{
    if(items.filter(item=>item.productGroup===prod.productGroup).length === 0 && items.length < 6){
      items.push(prod)
    }
  }) 
  return (
    <SectionNarrow margin='0 auto 2.7rem auto'>

      <Heading text={category} />

      <ProductsConatiner>
        {items.map((item, i)=>{
          return(
            <Product key={`${i}-${item.displayName}`} item={item} />
          )
        })}
      </ProductsConatiner>

      <ButtonContainer>
        <Link href={link}>  
          <ButtonSecondary>More</ButtonSecondary>
        </Link>
      </ButtonContainer>
    </SectionNarrow>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
