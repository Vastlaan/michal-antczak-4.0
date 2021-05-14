import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {ContainerAnimated, Text, ContactBox, Icon, Anchor, TextBold} from '../../../styles'
import {RiCustomerServiceFill} from 'react-icons/ri'

export default function PhoneComponent() {

  const target = useRef()

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.to(target.current, {autoAlpha: 1, y:0, x:0, duration: 1});
    ScrollTrigger.create({
      trigger: target.current, 
      start: "top 90%",
      onEnter: () => anim.restart(true)
    });
  },[])
  
  return (
    <ContainerAnimated ref={target}>
      <ContactBox>  
        <TextBold color='#1b1b1b'>Infoline:</TextBold>
        <Icon >
          <RiCustomerServiceFill/>  
        </Icon>   
        <Telephone href="tel:0031630159193">
             +44 682 30 70 51
        </Telephone>
        
      </ContactBox>
    </ContainerAnimated>
  )
}

const Telephone = styled.a`
  padding: .4rem 1.4rem;
  color: ${p=>p.theme.primary};
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  line-height:1.4;
`