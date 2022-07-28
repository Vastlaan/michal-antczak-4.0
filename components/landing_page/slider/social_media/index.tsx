import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import SocialMediaWidgets from "./widgets";
import SocialMediaInfo from "./info";
import { respond } from "../../../../styles";

interface IProps {
  isActive: boolean;
}
export default function SocialMedia({ isActive }: IProps) {
  const container = useRef();
  useEffect(() => {
    if (!isActive) {
      const timeline = gsap.timeline();
      timeline.to(container.current, { x: "-100%", duration: 0.3 });
      timeline.to(container.current, { x: "100%", duration: 0, delay: 0.31 });
    } else {
      gsap.to(container.current, { x: 0, duration: 0.3 });
    }
  }, [isActive]);
  return (
    <Container ref={container} isActive={isActive}>
      <Wrapper>
        <SocialMediaInfo />
        <SocialMediaWidgets />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div<IProps>`
  position: absolute;
  inset: 0;
  color: ${(p) => p.theme.white};
  overflow: hidden;
  padding: 2.7rem;
`;
const Wrapper = styled.div`
  max-width: 1255px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;

  ${respond("m", "grid-template-columns: 1fr 1fr; grid-gap: 2.7rem;")}
`;
