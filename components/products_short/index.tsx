import Image from 'next/image'
import styled from 'styled-components';
import {respond, SectionNarrow, Heading2, Text} from '../../styles'
import {products} from '../../models/product'
import {ProductProps} from '../../types'
import image from 'next/image';

interface ProductsShortProps{
  category: string;
  products?: ProductProps  // this will be in use when the data come from CMS
}

export default function ProductsShortComponent({category}:ProductsShortProps) {

  const items = products.filter(prod=>prod.isPromoted) // this will be filtered on parent component
  return (
    <SectionNarrow margin='0 auto 2.7rem auto'>
      <Heading2 margin='2.7rem auto' align='center'>{category}</Heading2>

      <ProductsConatiner>
        {items.map((item, i)=>{
          return(
            <ProductShort key={`${i}-${item.displayName}`}>
              <ImageConatiner>
                <Image src={item.image} alt={item.displayName} layout='fill' objectFit='cover' />
              </ImageConatiner>
              <Text>{item.displayName}</Text>
              <Text>{item.price}</Text>
            </ProductShort>
          )
        })}
      </ProductsConatiner>
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

const ProductShort = styled.div`


`

const ImageConatiner = styled.div`
  position: relative;
  width: 25rem;
  min-height: 35rem;
  overflow:hidden;
`

