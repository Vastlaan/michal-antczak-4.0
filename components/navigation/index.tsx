import styled from "styled-components";
import { slideDown, FlexRow } from "../../styles";
import Core from "./core";
import Menu from "./menu";

export default function NavigationComponent() {
  return (
    <Navigation>
      <FlexRow justify="flex-start">
        <Core />
        <Menu />
      </FlexRow>
    </Navigation>
  );
}

const Navigation = styled.nav`
  background-color: ${(p) => p.theme.greyPrimary};
  animation: ${slideDown} 0.6s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9;
`;
