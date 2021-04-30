import styled from 'styled-components'
import {Heading1, TextBold} from '../../styles'

interface VideoBackgroundProps{
  heading: string;
  para: string;
}

export default function VideoBackground({heading, para}: VideoBackgroundProps) {
  return (
    <Container>
      <video autoPlay muted loop id="myVideo">
        <source src='/video/video-background-1.mp4' type="video/mp4" />
      </video>
      <Heading1>{heading}</Heading1>
      <Line/>
      <TextBold align='center' color='white'>{para}</TextBold>
    </Container>
  )
}


const Container = styled.div`
  margin: 4.7rem 0;
  width: 100%;
  height: 48rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  video{
    position: absolute;
    top: 50%;
    left:50%;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(-50%) translateY(-50%);
    z-index: -1;
  }
`
const Line = styled.div`
    width: 20rem;
    height: 2px;
    background-color: white;
`;