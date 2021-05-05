import { useContext} from 'react'
import {Context} from '../../store'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { respond, FlexRow, TextBold, Text} from '../../styles'
import {buildUrlForGivenProduct, countFinalPriceOfSingleProduct, storeCartInLocalStorage} from '../../utils'
import {ColorSizeProps} from '../../types'
import {BsTrash} from 'react-icons/bs'


export default function ItemComponent({item}) {

  const url = buildUrlForGivenProduct(item.item)

  const { state, dispatch } = useContext(Context);

  function deleteItem(item){
    dispatch({type: 'removeItemFromCart', payload: item})
    console.log(state.cart)
    storeCartInLocalStorage(state.cart)
  }

  return (
    <Item>
      <Link href={url}>
        <ImageContainer>
          <Image src={item.item.image} alt={item.item.displayName} layout='fill' objectFit='cover'/>
        </ImageContainer>
      </Link>
      <Details>
        <FlexRow>
          <Text margin='0 1.4rem 0 0'>Product Name:</Text>
          <TextBold>{item.item.displayName}</TextBold>
        </FlexRow>
        <FlexRow>
          <Text margin='0 1.4rem 0 0'>Color:</Text>
          <Color color={item.item.color} />
        </FlexRow>
        <FlexRow>
          <Text>Size:{" "}{item.item.size}</Text>
        </FlexRow>
        <FlexRow>
          <Text>Price:{" "}&pound;{countFinalPriceOfSingleProduct(item.item)}</Text>
        </FlexRow>
        <FlexRow>
          <Text>Quantity:</Text>
          <QuantityButtons>
            <button onClick={()=>dispatch({type:'reduceAmountInCart', payload:item.item})}>-</button>
            <Text>{item.quantity}</Text>
            <button onClick={()=>dispatch({type:'increaseAmountInCart', payload:item.item})}>+</button>
          </QuantityButtons>
        </FlexRow>
      </Details>
      <Delete onClick={()=>deleteItem(item.item)}>
        <BsTrash/>
      </Delete>
    </Item>
  )
}

const Item = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35rem;
  grid-gap: 2.7rem;
  padding: 1.4rem;
  border-bottom: 1px solid rgba(0,0,0,.3);
  position: relative;

  ${() =>respond('s','grid-template-columns: 25rem 1fr 5rem;')}
  ${() =>respond('l','grid-template-columns: 35rem 1fr 10rem;')}
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1.4rem 0;
  
`
const ImageContainer = styled.div`
  position: relative;
  width: calc(100vw - 5.4rem);
  height: 25rem;
  cursor: pointer;
  ${() =>respond('s','width: 25rem; height: 20rem;')}
  ${() =>respond('m','width: 25rem; max-height: 20rem;')}
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
  cursor: pointer;
  transition: all .3s;
  background-color: ${p=>p.color};

`
const Delete = styled.div`
  margin: 1.4rem 0 0 auto;
  font-size: 1.9rem;
  color:${p=>p.theme.grey4};
  cursor: pointer;
  border: none;
  background-color: transparent;
  position:absolute;
  right: 1rem;
  top: 29.8rem;

  ${()=>respond('s', 'position: static;')}
`

const QuantityButtons = styled.div`
  display: flex;

  button{
    margin: 0 1.4rem;
    padding: 0 .9rem;
    background-color: transparent;
    border: 1px solid rgba(0,0,0,.3);
    color: ${p=>p.theme.grey4};
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 900;
    line-height: 1;
    transition: all .3s;

    &:hover{
      background-color: ${p=>p.theme.grey4};
      color: ${p=>p.theme.grey1};
    }
  }
`