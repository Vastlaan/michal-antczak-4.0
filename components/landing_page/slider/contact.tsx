import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import {
  Heading1,
  Heading3,
  SpanBlue,
  SpanRed,
  ButtonPrimary,
} from "../../../styles";
import BackgroundImage from "../../../public/img/slide-1.jpg";
import Link from "next/link";

interface IProps {
  isActive: boolean;
}

export default function Contact({ isActive }: IProps) {
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
        <Heading3>
          <SpanRed>Analytical Thinking</SpanRed>
        </Heading3>
        <Heading1 margin="1.9rem 0 auto 0">
          I thoroughly analyse client's <SpanBlue>requirements</SpanBlue> in
          order to build the most suitable product which{" "}
          <SpanRed>satisfies</SpanRed> the highest expectations.
        </Heading1>
        <Link href="/skills">
          <ButtonPrimary wide="20rem" content="My Skills" margin="1.9rem 0">
            <span>My Skills</span>
          </ButtonPrimary>
        </Link>
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
  transition: all 0s;

  background-image: url(${BackgroundImage.src});
  background-color: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Wrapper = styled.div`
  max-width: 1255px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
