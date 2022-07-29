import { useRef, createRef } from "react";
import useAnimation from "../../../hooks/useAnimation";
import styled, { withTheme } from "styled-components";
import { SectionNarrow, FlexCol, Heading1, Line, Text3 } from "../../../styles";
import Logos from "./logos";

function Companies({ theme }) {
  const refItems = useRef([createRef(), createRef()]) as React.MutableRefObject<
    any[]
  >;
  useAnimation({ type: "slideUp", refObject: refItems });

  return (
    <SectionNarrow margin="6.7rem auto 2.7rem auto">
      <FlexCol margin="0 auto">
        <Line wide="10rem" margin="1.4rem auto" />
        <Text3 ref={refItems.current[0]}>top tech companies</Text3>
        <Heading1 ref={refItems.current[1]} color={theme.grey4}>
          Business Experience
        </Heading1>
        <Logos />
      </FlexCol>
    </SectionNarrow>
  );
}

export default withTheme(Companies);

const Icon = styled.a`
  margin: 0 1.4rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s;

  svg {
    font-size: 3.7rem;
  }

  &:hover {
    transform: scale(1.15);
  }
`;
