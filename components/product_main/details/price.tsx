import styled from 'styled-components'
import {countFinalPriceOfSingleProduct} from '../../../utils'
import { ProductProps } from '../../../types'

interface PriceProps{
  firstProductInStock: ProductProps
}

export default function PriceComponent({firstProductInStock}:PriceProps) {
  return (
    <Price>
      &pound;{countFinalPriceOfSingleProduct(firstProductInStock)}
    </Price>
  )
}
const Price = styled.h6`
  display: flex;
  align-items: center;
  margin: 1.4rem 0;
  font-size: 4.7rem;
  font-weight: 500;
  color: ${p=>p.theme.grey4};
`