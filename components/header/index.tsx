import Link from 'next/link';
import styled from 'styled-components'
import { Heading1, Heading4, ButtonEmpty} from '../../styles'
import {FlexibleComponentProps} from '../../types'

interface HeaderProps{
  title: string;
  body: string;
  image?: string;
}

export default function HeaderComponent({title, body, image}:HeaderProps) {


  return (
    <Header url={image}>

      <Heading1>{title}</Heading1>

      <Heading4 color="white">
        {body.split(' ').map((word, i)=> i===4?<span key={i}>{word} </span>:`${word} `)}
      </Heading4>
    </Header>
  )
}

const Header = styled.header<FlexibleComponentProps>`
  position: relative;
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url(${p=>p.url?p.url:'/img/header-1.jpg'});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.4rem auto;
`

