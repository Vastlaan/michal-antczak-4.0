import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import {TextBold,TextItalic} from '../../styles'
import {ProductProps} from '../../types'
import {countFinalPriceOfSingleProduct} from '../../utils'

interface ItemProps{
  item: ProductProps
}

export default function ProductComponent({item}:ItemProps) {

  // build url path to specific product (group)
  const slugsArray = item.category.split('-')
  let url = '/'
  slugsArray.forEach(slug=>{
    url += `${slug}/`
  })
  url += item.productGroup


  return (
    <Link href={url}>
      <ProductShort>
        <ImageConatiner>
          <Image src={item.image} alt={item.displayName} layout='fill' objectFit='cover' />
        </ImageConatiner>
        <TextItalic align='left'>for {item.category.split('-')[0]}</TextItalic>
        <TextBold align='left'>{item.displayName}</TextBold>
        <TextBold align='left' size='1.9rem'>{countFinalPriceOfSingleProduct(item)}</TextBold>
      </ProductShort>
    </Link>
  )
}

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
  width: 26rem;
  min-height: 15rem;
  overflow:hidden;
`
