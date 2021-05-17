import {useState} from 'react'
import styled from 'styled-components'
import Name from './name'
import Email from './email'
import Message from './message'
import Disclaimer from './disclaimer'
import {respond, ContainerNarrow, Line, Text, FlexRow, FlexCol,  Heading2, ButtonSecondary} from '../../../styles'
import {validateContactForm} from '../../../validations'
import Error from '../../utils/error_message'

export default function FormComponent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disclaimer, setDisclaimer] = useState(false)

  const [error, setError] = useState({field: '', message:''});

  async function submitForm(e){
    e.preventDefault()
    setError({ field: '', message:''})

    const fieldsValid = validateContactForm({name, email, message})

    if(fieldsValid.field){
      return setError(fieldsValid)
    }

    if(!disclaimer){
      return setError({ field: 'disclaimer', message:'Please agree to conditions. Select Agree button above.'})
    }
    try{
      // ... here goes logic to POST to e-mail api service

      return 

    }catch(e){
      console.error(e)
    }
  }
  return (
    <Section>
      <ContainerNarrow>
        <Form onSubmit={submitForm}>
          <Line wide='15rem'/>
          <Heading2 margin='1.4rem 0 2.7rem 0' color='snow'>Contact Form</Heading2>
          <Text align='left' color='snow'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel animi quod asperiores provident error ad vero minima? Deleniti autem sed adipisci quas officia repudiandae facilis!</Text>

          <FieldsContainer>
            <FlexCol align='stretch'>
              <FlexRow align='flex-start' justify='flex-start'>
                <Name name={name} setName={setName} error={error}/>
                <Email email={email} setEmail={setEmail} error={error}/>
              </FlexRow>
              <Message message={message} setMessage={setMessage} error={error}/>
            </FlexCol>

            <FlexCol align='flex-start' justify='flex-start' margin='2.7rem 0'>
              <Disclaimer disclaimer={disclaimer} setDisclaimer={setDisclaimer}/>
              {error.field && <Error message={error.message}/>}
              <ButtonSecondary margin='auto 0 0 0'>Submit</ButtonSecondary>
            </FlexCol>
          </FieldsContainer>
        </Form>
      </ContainerNarrow>
    </Section>
    
  )
}

const Section = styled.section`
  background-color: ${p=>p.theme.grey5};
  margin: 4.7rem 0;
`

const Form = styled.form`
  margin: 4.7rem auto;
  width: 100%;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${()=>respond('m','padding: 1.4rem 2.7rem;')}
  
`
const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${()=>respond('m','flex-direction: row; flex-wrap: wrap;')}
`