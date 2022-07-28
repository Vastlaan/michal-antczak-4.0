import styled from "styled-components";
import { slideFromRight } from "../../../styles";

export default function Decoration() {
  return <Deco1 src="/img/decoration-5.svg" alt="decoration element" />;
}

const Deco1 = styled.img`
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 19rem;
  height: 10rem;
  animation: ${slideFromRight} 0.9s ease-in;
`;
