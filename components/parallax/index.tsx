import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { Heading1, TextBold, ButtonPrimary } from "../../styles";
import {FlexibleComponentProps} from '../../types'

interface ParallaxProps{
  title?: string;
  body?: string;
  btn: string;
  link: string
}

export default function ParallaxBackground({ title, body, btn, link }: ParallaxProps) {

    const target = useRef()

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(target.current, {autoAlpha: 1, duration: 1, scrollTrigger:{
            trigger: target.current,
            start: 'top 80%',
            toggleActions: 'restart none none reset'
        }})
    },[])

    return (
        <BilboardContainer ref={target}>
            <Heading1>
                {title
                    .split(" ")
                    .map((word, i) =>
                        i === 1 ? <span key={i}>{word} </span> : word + " "
                    )}
            </Heading1>
            <TextBold wide='65rem' align="center" margin='2.7rem 0' color='white'>
                {body}
            </TextBold>
            <a href={link}>
                  <ButtonPrimary>{btn}</ButtonPrimary>
            </a>
        </BilboardContainer>
    );
}

const BilboardContainer = styled.section<FlexibleComponentProps>`
    width: 100%;
    padding: 3.3rem;
    height: 48rem;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
        ),
        url(${(p) => (p.url ? p.url : "./img/header-2.jpg")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
`;