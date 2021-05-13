import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import {TextBold,TextItalic, Line, respond} from '../../styles'
import {ProductProps} from '../../types'
import {countFinalPriceOfSingleProduct, buildUrlForGivenProduct} from '../../utils'

interface ItemProps{
  item: ProductProps
}

export default function ProductComponent({item}:ItemProps) {

  const url = buildUrlForGivenProduct(item)

  let isImage = true
  const arrayFromUrl = item.image.split('.')
  if(arrayFromUrl[arrayFromUrl.length -1]==='mp4'){
    isImage=false
  }

  return (
    <Link href={url}>
      <ProductShort>
        
        <ImageConatiner>
          {isImage?<Image src={item.image} alt={item.displayName} layout='fill' objectFit='cover' />:<video autoPlay muted loop id="myVideo">
            <source src={item.image} title={item.displayName} type="video/mp4" />
            Your device does not support video
          </video>}
        </ImageConatiner>
        <TextItalic align='left'>for {item.category.split('-')[0]}</TextItalic>
        <Line wide="10rem" margin='.4rem 0'/>
        <TextBold align='left'>{item.displayName}</TextBold>
        <TextBold align='left' size='1.9rem'>&pound;{countFinalPriceOfSingleProduct(item)}</TextBold>
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

    img{
      display: block;
    }

    ${Line}{
      width: 100%;
    }
  }

`

const ImageConatiner = styled.div`
  position: relative;
  width: 35rem;
  height: 22rem;
  margin: 0 auto;
  overflow:hidden;
  box-shadow: 0 0 1rem rgba(0,0,0,.3);
  background-color: #EFF0EF;

  ${()=>respond('m',`margin: 0; width: 26rem; min-height: 18rem; max-height: 18rem;`)}

  video{
    position: absolute;
    top:50%;
    left: 50%;
    width: 115%;
    min-height: 100%;
    transform: translate(-50%, -50%);
  }
`
