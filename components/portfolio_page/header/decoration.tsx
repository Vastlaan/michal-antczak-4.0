import styled from "styled-components";
import { slideFromRight, respond } from "../../../styles";

export default function Decoration() {
  return <Deco1 src="/img/decoration-6.svg" alt="decoration element" />;
}

const Deco1 = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 29rem;
  height: 23rem;
  animation: ${slideFromRight} 0.9s ease-in;

  ${respond("m", "display: block;")}
`;
