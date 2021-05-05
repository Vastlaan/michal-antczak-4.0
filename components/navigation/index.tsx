import styled from 'styled-components'
import InfoStrip from './info_strip'
import Links from './links'
import {NavigationProps} from '../../types'

export default function NavigationComponent({categories}:NavigationProps) {
  return (
    <Navigation>
      <InfoStrip/>
      <Links categories={categories}/>
    </Navigation>
  )
}

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`
