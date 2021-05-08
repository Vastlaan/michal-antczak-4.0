import {useEffect, useState} from 'react'
import Link from 'next/link'
import Header from '../header'
import Heading from '../utils/heading'
import Subscribe from '../subscribe'
import { SectionNarrow, TextBold, ButtonPrimary} from '../../styles'

interface PaymentProps{
  session_id: string | number
}

export default function PaymentPage({session_id}: PaymentProps){

  const [error, setError] = useState("")

  useEffect(() => {       
    if(error){
      setError('Failure! Server unavailable. Please try again later.')
    }else if (
      localStorage.getItem("goldenshoesessionid") &&
      session_id ===
      JSON.parse(localStorage.getItem("goldenshoesessionid")).sessionId
    ) {
        localStorage.removeItem("goldenshoecart");
        localStorage.removeItem("goldenshoesessionid");
    }else{
      setError("Failure! Wrong credentials.")
    }
    
  }, []);
  return (
    <>
      <Header title={`Payment feedback`} body={``} image={`/img/header-8.jpg`}/>
      <SectionNarrow padding='6.7rem 2rem'>
        <Heading text='Your payment status'/>
        {error?<TextBold margin='1.4rem auto'>{error}</TextBold>:<TextBold margin='2.7rem auto'>
          Success! Thank you for you purchase! You will recive the confirmation e-mail with shipping details within 24 hours.
        </TextBold>}

        <Link href='/'>
          <ButtonPrimary margin='0 auto'>Homepage</ButtonPrimary>
        </Link>
        
      </SectionNarrow>
      <Subscribe/>
    </>
  )
}
