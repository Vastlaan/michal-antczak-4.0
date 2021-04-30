import styled from 'styled-components'
import Link from 'next/link'
import { GiSonicShoes} from 'react-icons/gi'
import {FlexRow} from '../../../styles'

export default function LogoComponent() {
  return (
    <FlexRow>
      <Link href='/cart'>
        <LogoIcon>
          <GiSonicShoes/>
        </LogoIcon>
      </Link>
    </FlexRow>
  )
}
const LogoIcon = styled.div`
  cursor: pointer;
  svg{
    font-size: 2.7rem;
    color: ${p=>p.theme.secondary};
  }
`