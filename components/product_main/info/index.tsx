import styled from 'styled-components'
import Link from 'next/link'
import { FlexRow, FlexCol, Text, TextItalic, TextBold,} from '../../../styles'
import {MdArrowBack} from 'react-icons/md'
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
        <Link href={`/${parentCategory}/${currentCategory}`}>
          <Back>
            <MdArrowBack/>
            Go Back
          </Back>
        </Link>
      </FlexRow>
      <TextBold align='left' margin='0 0 1.4rem 0'>Category:</TextBold>
      <Text align='left'>{parentCategory} - {currentCategory.split('_').join(" ")}</Text>
      <TextBold align='left' margin='0 0 1.4rem 0'>Description:</TextBold>
      <Text align='left' margin=' 1.4rem 0 2.7rem 0'>{product.description}</Text>
      <FlexCol align='flex-start'>
        <TextBold align='left' margin='0 0 1.4rem 0'>Rating:</TextBold>
        <FlexRow align='flex-start'>
          {overallRating > 0? <Rating>{overallRating.toFixed(1)}</Rating>: <TextItalic align='left' color='#888'>This product has no reviews yet</TextItalic>}
        </FlexRow>
      </FlexCol>
    </Info>
  )
}
const Info = styled.div`
  display: flex;
  flex-direction: column;

`
const Back = styled.div`
  margin: 0 auto 1.4rem 0;
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  color: ${p=>p.theme.primary};
  cursor: pointer;
  transition: all .1s;

  svg{
    font-size: 2.7rem;
    border: 2px solid ${p=>p.theme.primary};
    border-radius: 50%;
    margin-right: 1.4rem;
    transition: all .1s;
  }

  &:hover{
    color: ${p=>p.theme.grey3};
     svg{

      border: 2px solid ${p=>p.theme.grey3};

    }
  }
`
const Rating = styled.div`
  padding: .9rem;
  font-size: 2.7rem;
`