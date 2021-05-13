import {SetStateAction, Dispatch, useEffect, useRef} from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import gsap from 'gsap'
import {MdClose} from 'react-icons/md'

interface SizeIndicatorProps{
  closeModal: Dispatch<SetStateAction<boolean>>;
  displayModal: boolean;
}

export default function SizeIndicator({displayModal, closeModal}: SizeIndicatorProps) {

  const modal = useRef()

  useEffect(()=>{
    displayModal?gsap.to(modal.current, {x:0}):gsap.to(modal.current, {x:"100%"})
  }, [displayModal])

  return (
    <Size ref={modal}>
      <MdClose aria-label='close size indicator' onClick={()=>closeModal(false)}/>
      <ImageContainer>
        <Image src='/img/shoe-size-indicator.jpg' alt='shoe size indicator' layout='fill' objectFit='cover' />
      </ImageContainer>
    </Size>
  )
}

const Size = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(100%, -50%);
  min-width: 32rem;
  padding: 2.7rem;
  background-color: ${p=>p.theme.grey1};
  border: 1px solid ${p=>p.theme.grey5};
  box-shadow: 0 0 1rem rgba(0,0,0,.3);

  svg{
    position: absolute;
    top: .9rem;
    right: .9rem;
    font-size: 1.9rem;
    color: ${p=>p.theme.grey5};
    cursor: pointer;
  }
`

const ImageContainer = styled.div`
  width: 26.9rem;
  height: 43.4rem;
  margin: 1.4rem 0;
  position: relative;
`
