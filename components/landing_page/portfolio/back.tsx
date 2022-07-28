import React from "react";
import styled, { withTheme } from "styled-components";
import { respond, TextLong } from "../../../styles";

function Back({ theme }) {
  return (
    <Container>
      <TextWrapper>
        <TextLong color={theme.grey}>
          My work is recognized by the continuous development process. Projects
          have always been carried out using the latest technologies, with
          passion and commitment
        </TextLong>
      </TextWrapper>
    </Container>
  );
}
export default withTheme(Back);

const Container = styled.div`
  position: relative;
  margin: auto 0 0 0;
  padding: 1.4rem;
  grid-area: back;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  ${respond("m", ` align-items: flex-end;`)}
`;
const TextWrapper = styled.div`
  max-width: 80%;
  margin-bottom: 2rem;
  margin-top: 10rem;
  ${respond("s", `max-width: 50%;`)}
  ${respond(
    "m",
    `margin-bottom: 10rem;
     margin-top: 2rem;`
  )}
`;
