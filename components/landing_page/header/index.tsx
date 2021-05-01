import {useEffect, useState, useRef} from 'react'
import Link from 'next/link';
import gsap from 'gsap'
import Image from 'next/image';
import styled from 'styled-components'
import Categories from './categories'
import { Heading1, Heading4, ButtonEmpty} from '../../../styles'

export default function HeaderComponent() {

  const image1 = useRef()
  const image2 = useRef()

  const [backgroundImage, setBackgroundImage] = useState(1)

  useEffect(()=>{
    const tl1 = gsap.timeline({repeat: -1})
    tl1.to(image1.current, {duration: 5}) //wait
    tl1.to(image1.current, {autoAlpha: 1, x: '-100%', duration: 1})
    tl1.set(image1.current, {x: '100%'})
    tl1.to(image1.current, {duration: 5}) //wait
    tl1.to(image1.current, {autoAlpha: 1, x: 0,duration: 1})


    const tl2 = gsap.timeline({repeat: -1})
    tl2.set(image2.current, {autoAlpha: 1, x: '100%'})
    tl2.to(image2.current, {duration: 5}) // wait
    tl2.to(image2.current,{autoAlpha: 1, x: 0, duration: 1, })
    tl2.to(image2.current, {duration: 5}) // wait
    tl2.to(image2.current, {autoAlpha: 1, x: '-100%', duration: 1})
  },[])

  return (
    <Header>

      <BackgroundImage ref={image2}>
        <Image src='/img/header-2.jpg' alt='shoes' layout='fill' objectFit='cover' />
      </BackgroundImage>

      <BackgroundImage ref={image1}>
        <Image src='/img/header-1.jpg' alt='shoes' layout='fill' objectFit='cover' />
      </BackgroundImage>

      <Heading1 align='center'>Golden Shoe</Heading1>

      <Heading4 align='center' color="white">
        Shoes for <span>every</span> foot
      </Heading4>
      
      <Categories/>
      
    </Header>
  )
}

const Header = styled.header`
  position: relative;
  width: 100vw;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 8.7rem;
`
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  width: 100vw;
  min-height: 60vh;
  background-image: url('/img/header-1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`


