import {useEffect, useRef} from 'react'
import {useRouter} from 'next/router'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {ContainerAnimated, Text, ContactBox, Icon, Anchor, TextBold} from '../../../styles'
import {MdEmail} from 'react-icons/md'

export default function PhoneComponent() {

  const target = useRef()

   const router = useRouter()
  const {locale} = router

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
    <ContainerAnimated animation='px' ref={target}>
      <ContactBox> 
        <TextBold color='#1b1b1b'>Send us message:</TextBold>   
        <Icon>   
          <MdEmail/>
        </Icon>

          
        <Anchor href="mailto:info@michalantczak.com">
            <Text>service@goldenshoe.uk</Text>
        </Anchor>

      </ContactBox>
    </ContainerAnimated>
  )
}