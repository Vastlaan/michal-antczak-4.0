import {useState, useRef} from 'react'
import styled from 'styled-components'
import SizeIndicator from '../../modals/size_indicator'
import { FlexRow, TextBold, LinkExtra} from '../../../styles'
import { ColorSizeProps} from '../../../types'

interface SizeProps{
  availableSizes: string[]
  chosenSize: undefined | null | string
  setChosenSize: (value: (prevState: undefined | null | string) => undefined | null | string) => void
}

export default function SizeComponent({availableSizes,chosenSize,  setChosenSize} : SizeProps) {

  const modal = useRef()

  const [displayModal, setDisplayModal] = useState(false)
  return (
    <>
      <TextBold align='left'>Select Size:</TextBold>
      <FlexRow justify='flex-start'>
        {availableSizes.map((size,i)=><Size key={`size-${i}`}  onClick={()=>setChosenSize(prevState=> prevState===size?null:size)} highlight={size===chosenSize}>{size}</Size>)}
      </FlexRow>
      
      <LinkExtra align='left' color='#4d5057' margin="0 0 1.4rem 0" onClick={()=>setDisplayModal(true)}>
        What is my shoe size?
      </LinkExtra>  

      <SizeIndicator displayModal={displayModal} closeModal={setDisplayModal}/>
      
    </>
  )
}
const Size = styled.div<ColorSizeProps>`
  padding: .9rem;
  margin: 1.4rem .9rem 1.4rem 0;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  color: ${p=>p.highlight?p.theme.grey1:p.theme.grey4};
  border-radius: 50%;
  border: 1px solid ${p=>p.theme.grey4};
  cursor: pointer;
  transition: all .3s;
  box-shadow: ${p=>p.highlight?'0 0 1rem rgba(0,0,0.3)':''};
  background-color: ${p=>p.highlight?p.theme.grey4:'transparent'};

  &:hover{
    background-color: ${p=>p.theme.grey4};
    color: ${p=>p.theme.grey1};
  }

`