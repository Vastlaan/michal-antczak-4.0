import styled from 'styled-components'
import Heading from '../../utils/heading'
import Back from '../../utils/go_back_button'
import Form from './form'
import Details from './details'
import {respond, SectionNarrow} from '../../../styles'
import {CheckoutProps} from '../../../types'


export default function ProcessComponent() {
  return (
    <SectionNarrow>
      <Back/>
      <Heading text='Checkout Form' />

      <Grid>
        <Form />
        <Details/>
      </Grid>
      
    </SectionNarrow>
  )
}

const Grid = styled.div`
  margin: 2.7rem 0;
  display: flex;
  flex-direction: column-reverse;

  ${()=>respond('s','display: grid;grid-template-columns: 1fr 25rem;grid-gap: 2.7rem;')}
`
