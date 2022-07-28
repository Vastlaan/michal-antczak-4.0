import React from "react";
import styled from "styled-components";
import { respond, TextLong, SpanBlue } from "../../../styles";

export default React.forwardRef(Disclaimer);
function Disclaimer(_props, ref) {
  return (
    <Container>
      <TextLong ref={ref.current[1]}>
        <SpanBlue>
          All my websites are responsive. Every screen diameter has its fitting
          layout and content structure, so that website displays properly on
          various different devices
        </SpanBlue>
      </TextLong>
    </Container>
  );
}

const Container = styled.div`
  grid-column: 1/3;
  grid-row: 7/8;
  z-index: 3;

  ${respond("l", "grid-column: 1/2; grid-row: 9/12;")}
`;
