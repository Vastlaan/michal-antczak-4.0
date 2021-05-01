import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { GiSonicShoes} from 'react-icons/gi'
import {FlexRow} from '../../../styles'

export default function LogoComponent() {
  return (
    <FlexRow>
      <Link href='/'>
        <LogoIcon>
          <Image src='/logo.png' alt='logo' width='52' height='26'/>
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