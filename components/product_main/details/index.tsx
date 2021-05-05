import { useState, useContext} from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import {Context} from '../../../store'
import Size from './size'
import Color from './color'
import Price from './price'
import { FlexRow,  ButtonSecondary} from '../../../styles'
import {ProductProps} from '../../../types'
import {storeCartInLocalStorage} from '../../../utils'

interface DetailsProps{
  products: ProductProps[]
}
interface Error {
  field?: string;
  message?: string
}

export default function DetailsComponent({products}:DetailsProps) {

  const router = useRouter()

  const { state, dispatch } = useContext(Context);

  const [chosenSize, setChosenSize] = useState()
  const [chosenColor, setChosenColor] = useState()
  const [error, setError] = useState<Error>({})

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

  function addToCart(){
    setError({})
    if(!chosenSize){
      return setError({field:'general', message: "Please select a size"})
    }
    if(!chosenColor){
      return setError({field:'general', message: "Please select a color"})
    }
    const chosenProduct = products.find((prod)=>prod.size===chosenSize && prod.color===chosenColor)

    dispatch({type: 'addProductToCart', payload: chosenProduct})

    storeCartInLocalStorage(state.cart)

    return router.push('/cart')
  }

  return (
    <Details>

      <Size availableSizes={availableSizes} chosenSize={chosenSize} setChosenSize={setChosenSize}/>
      
      <Color availableColors={availableColors} chosenColor={chosenColor} setChosenColor={setChosenColor}/>

      <Price firstProductInStock={firstProductInStock}/>

      {error.field === 'general' && <small>{error.message}</small>}

      <FlexRow margin='1.4rem 0' justify='flex-start'>
        <ButtonSecondary onClick={addToCart} margin='0'>Add to cart</ButtonSecondary>
      </FlexRow>     

    </Details>
  )
}

const Details = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: details;
`