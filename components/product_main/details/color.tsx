import styled from 'styled-components'
import { FlexRow,TextBold} from '../../../styles'
import {ColorSizeProps} from '../../../types'

interface ColorProps{
  availableColors: string[]
  chosenColor: undefined | null | string
  setChosenColor: (value: (prevState: undefined | null | string) => undefined | null | string) => void
}
export default function ColorComponent({availableColors, setChosenColor, chosenColor}: ColorProps) {
  return (
    <>

    <TextBold align='left'>Select color:</TextBold>
    <FlexRow justify='flex-start'>
      {availableColors.map((color,i)=><Color key={`color-${i}`} onClick={()=>setChosenColor(prevState=> prevState===color?null:color)} color={color} highlight={color===chosenColor}/>)}
    </FlexRow>
      
    </>
  )
}
const Color = styled.div<ColorSizeProps>`
  padding: .9rem;
  margin: 1.4rem .9rem 1.4rem 0;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  border-radius: 50%;
  border: ${p=>p.highlight?`3px solid ${p.theme.grey4}`:'3px solid transparent'};
  cursor: pointer;
  transition: all .3s;
  background-color: ${p=>p.color};
  box-shadow: ${p=>p.highlight?'0 0 1rem rgba(0,0,0.3)':''};

  &:hover{
    border: 3px solid ${p=>p.theme.grey4};
  }

`