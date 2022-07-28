import styled, { withTheme } from "styled-components";
import { SpanColor, TextLong, respond } from "../../styles";

function Info({ theme }) {
  return (
    <Container>
      <TextLong wide="45rem" size="1.4rem">
        <SpanColor color={theme.gold}>
          Dive into my website, visit my social media profiles, get to know me
          better. Contact me and make an appointment for an introductory
          meeting.
        </SpanColor>
      </TextLong>
    </Container>
  );
}
export default withTheme(Info);
const Container = styled.div`
  grid-column: 1/2;
  grid-row: 4/5;

  ${respond(
    "m",
    `
      grid-column: 3/4;
      grid-row: 3/4;
    `
  )}
`;
