import styled from 'styled-components';
import {respond,Heading2} from '../../styles'


interface HeadingProps{
  text: string
}

export default function Heading({text}:HeadingProps) {
  return (
    <HeadingContainer>
      <Line/>
      <Heading2 margin='0 1.4rem' align='center'>{text}</Heading2>
      <Line/>
    </HeadingContainer>
  )
}
const HeadingContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2.7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Line = styled.div`
  width: 15rem;
  height: 1px;
  background-color: rgba(0,0,0,.3);

  ${()=>respond('m','width: 35rem;')}
`