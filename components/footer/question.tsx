import styled from "styled-components";
import { SpanBlue, TextLong } from "../../styles";

export default function Question() {
  return (
    <Container>
      <TextLong size="1.4rem" wide="45rem">
        <SpanBlue>
          Interested in working with me? I am available from Monday till Friday
          between 9:00 and 18:00.
        </SpanBlue>
      </TextLong>
    </Container>
  );
}
const Container = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  border-bottom: 1px solid ${(p) => p.theme.primary};
`;
