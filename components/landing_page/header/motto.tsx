import React from "react";
import styled from "styled-components";
import { respond, TextLong } from "../../../styles";

export default React.forwardRef(Motto);
function Motto(_props, ref) {
  return (
    <Container>
      <TextLong ref={ref.current[0]}>
        My designs combine form and aesthetics with stylish and structured code.
      </TextLong>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  grid-column: 1/3;
  grid-row: 1/2;
  z-index: 3;

  ${respond(
    "l",
    `
    display: block;
    grid-column: 1/2;
    grid-row: 1/3;
    `
  )}
`;
