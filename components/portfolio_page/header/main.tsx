import { useRef, createRef } from "react";
import styled from "styled-components";
import useAnimation from "../../../hooks/useAnimation";
import { respond, Heading1, Text2, ButtonPrimary } from "../../../styles";

export default function Main() {
  const target = useRef([
    createRef(),
    createRef(),
    createRef(),
  ]) as React.MutableRefObject<any[]>;
  useAnimation({ type: "bulkSlideFromRight", refObject: target });

  function scrollToOverview() {
    document
      .querySelector("#portfolio_overview")
      .scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Container>
      <Heading1 ref={target.current[0]} margin="0 0 1.4rem 0">
        I design, build and maintain <strong>websites</strong> of different{" "}
        <span>complexity</span> and scope.
      </Heading1>
      <Text2 ref={target.current[1]}>
        From simple SPA websites to modern and sophisticated web applications.
      </Text2>
      <ButtonPrimary
        onClick={scrollToOverview}
        ref={target.current[2]}
        wide="20rem"
      >
        <span>Read more...</span>
      </ButtonPrimary>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2.7rem;

  ${respond("s", "padding: 2.7rem 4.7rem;")}

  ${respond("xxl", "padding: 4.7rem;")}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.5rem;
    height: 50%;
    background-image: linear-gradient(
      to bottom,
      ${(p) => p.theme.secondary},
      ${(p) => p.theme.primary}
    );
  }

  h3 {
    margin-bottom: 1.4rem;
  }
  p {
    margin-bottom: 2.7rem;
  }
`;
