import styled from 'styled-components'
import {fonts,SectionNarrow, FlexCol, Heading2, TextBold, ButtonPrimary} from '../../styles'
import Heading from '../utils/heading'

export default function Subscribe(props, ref) {

  function submitContactForm(e){
    e.preventDefault();
  }

  return (
    <SectionNarrow margin='4.7rem auto'>
      <FlexCol>
        <Heading text='Discounts & Offers' />
        <TextBold wide='65rem'>Subscribe to our newsletter and stay up to date with our offers.</TextBold>
      </FlexCol>
      <Form onSubmit={submitContactForm}>
        <label>
          Your e-mailadres:
          <input type="text"/>
        </label>
        <ButtonPrimary type='submit'>Subscribe</ButtonPrimary>
      </Form>
    </SectionNarrow>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.4rem auto;
  label{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${fonts.heading};
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
  }
  input{
    border: 1px solid ${p=>p.theme.grey3};
    margin-bottom: 1.4rem;
    width: 35rem;
    padding: .9rem 1.4rem;
  }
`