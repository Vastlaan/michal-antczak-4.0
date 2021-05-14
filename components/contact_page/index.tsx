import Header from '../header'
import Details from './details'
import Form from './form'
import Subscribe from '../subscribe'

export default function ContactPageComponent() {
  return (
    <>
      <Header title={`Get in touch!`} body={`We are for your disposal`} image={`/img/customer-service.jpg`}/>
      <Details />
      <Form/>
      <Subscribe/>
    </>
  )
}
