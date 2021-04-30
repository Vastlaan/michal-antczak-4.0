import styled from 'styled-components'
import InfoStrip from './info_strip'
import Links from './links'
import {} from '../../styles'

export default function NavigationComponent() {
  return (
    <Navigation>
      <InfoStrip/>
      <Links/>
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
