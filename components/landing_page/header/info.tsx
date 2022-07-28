import React, { useRef, createRef } from "react";
import styled from "styled-components";
import {
  respond,
  Heading3,
  Heading1,
  Text2,
  SpanBlue,
  SpanRed,
  SpanColor,
} from "../../../styles";
import Links from "./links";
import useAnimation from "../../../hooks/useAnimation";

export default function Info() {
  const rightSideRef = useRef([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ]) as React.MutableRefObject<any[]>;

  useAnimation({ type: "bulkSlideFromRight", refObject: rightSideRef });

  return (
    <Container>
      <Heading3 ref={rightSideRef.current[0]} margin="0 0 2.7rem 0">
        <SpanBlue>Software Engineer</SpanBlue> &{" "}
        <SpanRed>Web Developer</SpanRed>
      </Heading3>
      <Heading1 ref={rightSideRef.current[1]} margin="0 0 1.4rem 0">
        Are you <strong>looking</strong> for professional to support or lead
        your <span>developers</span> team?
      </Heading1>
      <Text2 ref={rightSideRef.current[2]} margin="0 0 2.7rem 0">
        Someone who knows frontend and backend technologies and delivers product
        in incremental iterations, following the best Scrum practices?
      </Text2>
      <Links />
      <Text2 ref={rightSideRef.current[3]} margin="0 0 2.7rem 0">
        <SpanBlue>
          I have broad experience in architecting and implementing{" "}
          <SpanColor>innovatory applications</SpanColor> with use of the newest
          technologies
        </SpanBlue>
      </Text2>
    </Container>
  );
}

const Container = styled.div`
  grid-column: 1/3;
  grid-row: 4/7;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 2;

  ${respond("l", "grid-column: 2/3; grid-row: 1/10;")}
`;
