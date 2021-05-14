import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {ContainerAnimated, ContactBox, Icon, TextBold, Text} from '../../../styles'
import {RiMapPinFill} from 'react-icons/ri'

export default function AddressComponent() {

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
    <ContainerAnimated animation='mx' ref={target}>
      <ContactBox>
        <TextBold color='#1b1b1b'>Visit our shop:</TextBold>
        <Icon>
          <RiMapPinFill/>
        </Icon>
        <Text>30123 Dover St</Text>
        <Text>London W1S 4NB, UK</Text>
    </ContactBox>
  </ContainerAnimated>
  )
}