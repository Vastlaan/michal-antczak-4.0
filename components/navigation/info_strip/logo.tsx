import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {FlexRow} from '../../../styles'

export default function LogoComponent() {
  return (
    <FlexRow>
      <Link href='/'>
        <LogoIcon>
          <Image src='/logo-navigation.png' alt='logo' width='64' height='34'/>
        </LogoIcon>
      </Link>
    </FlexRow>
  )
}
const LogoIcon = styled.div`
  cursor: pointer;
  position: relative;
  z-index:99;
`