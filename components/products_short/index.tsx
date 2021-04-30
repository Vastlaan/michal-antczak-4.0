import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import {respond, SectionNarrow, Heading2, Text, TextBold,TextItalic, ButtonSecondary} from '../../styles'
import {products} from '../../models/product'
import {ProductProps} from '../../types'
import Heading from '../utils/heading'

interface ProductsShortProps{
  category: string;
  products?: ProductProps  // this will be in use when the data come from CMS
}

export default function ProductsShortComponent({category}:ProductsShortProps) {

  // this will be filtered on parent component
  const items =[]
  products.map(prod=>{
    if(prod.isPromoted && items.filter(item=>item.group===prod.group).length === 0){
      items.push(prod)
    }
  }) 
  return (
    <SectionNarrow margin='0 auto 2.7rem auto'>

      <Heading text={category} />

      <ProductsConatiner>
        {items.map((item, i)=>{
          return(
            <ProductShort key={`${i}-${item.displayName}`}>
              <ImageConatiner>
                <Image src={item.image} alt={item.displayName} layout='fill' objectFit='cover' />
              </ImageConatiner>
              <TextItalic align='left'>for {item.category}</TextItalic>
              <TextBold align='left'>{item.displayName}</TextBold>
              <TextBold align='left' size='1.9rem'>{item.price.toFixed(2)}</TextBold>
            </ProductShort>
          )
        })}
      </ProductsConatiner>

      <ButtonContainer>
        <Link href='/products/new'>  
          <ButtonSecondary>More</ButtonSecondary>
        </Link>
      </ButtonContainer>
    </SectionNarrow>
  )
}


const ProductsConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${()=>respond('m', 'flex-direction: row; flex-wrap: wrap;')}
`

const HeadingContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2.7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Line = styled.div`
  width: 15rem;
  height: 1px;
  background-color: rgba(0,0,0,.3);

  ${()=>respond('m','width: 35rem;')}
`

const ProductShort = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.4rem;
  padding: 1.4rem;
  border: 1px solid transparent;
  overflow: hidden;
  cursor: pointer;

  img{
    display: block;
    transition: all 1s;
  }

  &:hover{
    border: 1px solid rgba(0,0,0,.3);

    img{
      display: block;
      transform: scale(1.2);
    }
  }

`

const ImageConatiner = styled.div`
  position: relative;
  width: 25rem;
  min-height: 25rem;
  overflow:hidden;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
