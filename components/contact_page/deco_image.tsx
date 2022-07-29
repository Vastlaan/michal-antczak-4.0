import styled from "styled-components";

export default function Decorations() {
  return <Deco1 src="/img/decoration-4.svg" alt="circle website decoration" />;
}

const Deco1 = styled.img`
  position: absolute;
  top: 10rem;
  left: 0;
  z-index: 1;
`;
