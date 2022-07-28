import React from "react";
import styled from "styled-components";
import { respond } from "../../../styles";

export default React.forwardRef(Picture);
function Picture(_props, ref) {
  return (
    <Container ref={ref.current[2]}>
      <img
        src="/img/michal_antczak.png"
        alt="michal antczak software engineer"
        width="337"
        height="426"
      />
    </Container>
  );
}

const Container = styled.div`
  grid-column: 1/3;
  grid-row: 1/4;
  display: flex;
  justify-content: flex-start;
  z-index: 2;

  ${respond(
    "l",
    `
    grid-column: 1/2;
            grid-row: 1/10;
            justify-content: flex-end;
    `
  )}

  img {
    width: 235px;
    height: 284px;

    ${respond(
      "m",
      `
              width: 353px;
              height: 426px;
              max-width: 100%;
              `
    )}
  }
`;
