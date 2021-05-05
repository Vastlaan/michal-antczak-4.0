import styled from 'styled-components'
import { FlexRow, FlexCol, Text, TextItalic, TextBold,} from '../../../styles'
import Back from '../../utils/go_back_button'
import {ProductProps} from '../../../types'

interface InfoProps{
  product: ProductProps
}

export default function InfoComponent({product}:InfoProps) {

  const parentCategory = product.category.split('-')[0]
  const currentCategory = product.category.split("-")[1]
  const overallRating = product.reviews.reduce((acc, review)=> acc += review.rate, 0) / product.reviews.length

  return (
    <Info>
      <FlexRow>
        <Back />
      </FlexRow>
      <TextBold align='left' >Category:</TextBold>
      <Text align='left' margin='1.4rem 0'>{parentCategory} - {currentCategory.split('_').join(" ")}</Text>
      <TextBold align='left'>Specification:</TextBold>
      <Text align='left' margin=' 1.4rem 0 2.7rem 0'>{product.description}</Text>
      <FlexCol align='flex-start'>
        <TextBold align='left'>Rating:</TextBold>
        <FlexRow align='flex-start' margin='1.4rem 0'>
          {overallRating > 0? <Rating>{overallRating.toFixed(1)}</Rating>: <TextItalic align='left' color='#888'>This product has no reviews yet</TextItalic>}
        </FlexRow>
      </FlexCol>
    </Info>
  )
}
const Info = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: info;

`
const Rating = styled.div`
  padding: .9rem;
  font-size: 2.7rem;
`