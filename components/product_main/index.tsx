import styled from 'styled-components'
import Image from 'next/image';
import Heading from '../utils/heading'
import Info from './info'
import Details from './details'
import {respond, SectionNarrow} from '../../styles'
import {ProductProps} from '../../types'


interface ProductsProps{
  category: string;
  products: ProductProps[]
  link: string
}

export default function ProductComponent({products, category, link}:ProductsProps) {

  const availableProducts = products.filter(prod=>prod.stock > 0)

  const firstProductInStock = availableProducts[0]

  return (
    <SectionNarrow>
      
      <Heading text={firstProductInStock.displayName}></Heading>
      <Grid>

        <Info product={firstProductInStock} />

        <ImageContainer>
          <Image src={firstProductInStock.image} alt={firstProductInStock.displayName} layout='fill' objectFit='cover' />
        </ImageContainer>

        <Details products={availableProducts}/>
        
      </Grid>
    </SectionNarrow>
  )
}

const Grid = styled.div`
  margin: 2.7rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.7rem;

  ${()=>respond('m','grid-template-columns: 25rem 1fr;')}
  ${()=>respond('l','grid-template-columns: 25rem 1fr 25rem;')}
`

const ImageContainer = styled.div`
  position: relative;
  width: 45rem;
  min-height: 35rem;
  margin: 0;

  ${()=>respond('m','margin: 0 auto;')}

`