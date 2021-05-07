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

  let isImage = true
  const arrayFromUrl = firstProductInStock.image.split('.')
  if(arrayFromUrl[arrayFromUrl.length -1]==='mp4'){
    isImage=false
  }

  return (
    <SectionNarrow>
      
      <Heading text={firstProductInStock.displayName}></Heading>
      <Grid>

        <Info product={firstProductInStock} />

        <ImageContainer>
          {isImage?<Image src={firstProductInStock.image} alt={firstProductInStock.displayName} layout='fill' objectFit='cover' />:<video autoPlay muted loop id="myVideo">
            <source src={firstProductInStock.image} type="video/mp4" />
          </video>}
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
  grid-template-areas: 
    "image"
    "details"
    "info";
  grid-gap: 2.7rem;

  ${()=>respond('m',`
    grid-template-columns: 25rem 1fr;
    grid-template-areas: 
    "info image"
    "details details";
  `)}
  ${()=>respond('l',`
    grid-template-columns: 25rem 1fr 25rem;
    grid-template-areas: 
    "info image details";
  `)}
`

const ImageContainer = styled.div`
  position: relative;
  width: calc(100vw - 2.8rem);
  min-height: 30rem;
  margin: 0 auto;
  grid-area: image;

  ${()=>respond('m','margin: 0 auto; width: 55rem;min-height: 35rem;')}

`