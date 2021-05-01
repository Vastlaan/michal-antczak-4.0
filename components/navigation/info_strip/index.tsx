import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {checkViewportWidth} from '../../../utils'
import MenuButton from './menu_button'
import Menu from './menu'
import Logo from './logo'
import Links from './links'


export default function InfoStripComponent() {

  const [isOpen, setIsOpen] = useState(false)
  const [isSmall, setIsSmall]= useState(false)
  

  useEffect(()=>{
    function adjustStyle(){
      return checkViewportWidth(768)?setIsSmall(true):setIsSmall(false)
    }
    adjustStyle()
    window.addEventListener('resize', adjustStyle)

    return ()=>window.removeEventListener('resize', adjustStyle)
  },[])


  return (
      <InfoStrip>

        <Logo/>

        {!isSmall && <Links/>}

        {isSmall && <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>}

        {isSmall && <Menu isOpen={isOpen}/>}     
        
      </InfoStrip>
  )
}

const InfoStrip = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .9rem 2.7rem;
  background-color: ${p=>p.theme.grey5};
  position: relative;
  
`


