import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FlexRow,  ButtonSecondary,  TextBold, LinkExtra} from '../../../styles'
import {countFinalPriceOfSingleProduct} from '../../../utils'
import {ProductProps, FlexibleComponentProps} from '../../../types'

interface DetailsProps{
  products: ProductProps[]
}

interface ColorSizeProps extends FlexibleComponentProps{
  highlight?:boolean
}

export default function DetailsComponent({products}:DetailsProps) {

  const [chosenSize, setChosenSize] = useState()
  const [chosenColor, setChosenColor] = useState()

  const firstProductInStock = products[0]
  
  const availableSizes = []
  const availableColors =[]

  products.forEach(prod=>{
    if(!availableSizes.includes(prod.size)){
     if(chosenColor){
        prod.color === chosenColor && availableSizes.push(prod.size)
      }else{
        availableSizes.push(prod.size)
      } 
    }
  })
  products.forEach(prod=>{
    if(!availableColors.includes(prod.color)){
      if(chosenSize){
        prod.size === chosenSize && availableColors.push(prod.color)
      }else{
        availableColors.push(prod.color)
      }
    }
  })

  availableSizes.sort((a,b)=>a-b)

  return (
    <Details>
      <TextBold align='left'>Select Size:</TextBold>
      <FlexRow justify='flex-start'>
        {availableSizes.map((size,i)=><Size key={`size-${i}`}  onClick={()=>setChosenSize(prevState=> prevState===size?null:size)} highlight={size===chosenSize}>{size}</Size>)}
      </FlexRow>
      <Link href='/contact'>
        <LinkExtra align='left' color='#4d5057' margin="0 0 1.4rem 0">
          What is my shoe size?
        </LinkExtra>        
      </Link> 
      <TextBold align='left'>Select color:</TextBold>
      <FlexRow justify='flex-start'>
        {availableColors.map((color,i)=><Color key={`color-${i}`} onClick={()=>setChosenColor(prevState=> prevState===color?null:color)} color={color} highlight={color===chosenColor}/>)}
      </FlexRow>
      <FlexRow justify='flex-start'>
        <Price>
          &pound;{countFinalPriceOfSingleProduct(firstProductInStock)}
        </Price>
      </FlexRow>
      <FlexRow margin='auto 0 1.4rem 0' justify='flex-start'>
        <ButtonSecondary margin='0'>Add to cart</ButtonSecondary>
      </FlexRow>         
    </Details>
  )
}

const Details = styled.div`
  display: flex;
  flex-direction: column;
`
const Size = styled.div<ColorSizeProps>`
  padding: .9rem;
  margin: 1.4rem .9rem 1.4rem 0;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  color: ${p=>p.highlight?p.theme.grey1:p.theme.grey4};
  border-radius: 50%;
  border: 1px solid ${p=>p.theme.grey4};
  cursor: pointer;
  transition: all .3s;
  box-shadow: ${p=>p.highlight?'0 0 1rem rgba(0,0,0.3)':''};
  background-color: ${p=>p.highlight?p.theme.grey4:'transparent'};

  &:hover{
    background-color: ${p=>p.theme.grey4};
    color: ${p=>p.theme.grey1};
  }

`
const Color = styled.div<ColorSizeProps>`
  padding: .9rem;
  margin: 1.4rem .9rem 1.4rem 0;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  border-radius: 50%;
  border: ${p=>p.highlight?`3px solid ${p.theme.grey4}`:'3px solid transparent'};
  cursor: pointer;
  transition: all .3s;
  background-color: ${p=>p.color};
  box-shadow: ${p=>p.highlight?'0 0 1rem rgba(0,0,0.3)':''};

  &:hover{
    border: 3px solid ${p=>p.theme.grey4};
  }

`
const Price = styled.h6`
  margin: 1.4rem 0;
  font-size: 4.7rem;
  font-weight: 500;
  color: ${p=>p.theme.grey4};
`