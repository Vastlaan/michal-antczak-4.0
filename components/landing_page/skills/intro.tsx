import styled, { withTheme } from "styled-components";
import { Heading1, Heading3, SpanBlue, SpanRed, Text2 } from "../../../styles";

function Intro({ theme }) {
  return (
    <Container>
      <Heading3 align="left">
        <SpanRed>Skills</SpanRed>
      </Heading3>
      <ImageContainer>
        <img src="/img/image-1.jpg" alt="person contemplating" />
      </ImageContainer>
      <Heading1
        size="2.7rem"
        margin="2.7rem 0"
        wide="45rem"
        color={theme.greyPrimary}
      >
        Enthusiastic software engineer with <SpanRed>experience</SpanRed> in
        implementing sophisticated features in{" "}
        <SpanBlue>complex environments</SpanBlue>
      </Heading1>
      <Text2>
        <SpanBlue>
          With a passion for the profession and a "let's do it" mentality.
        </SpanBlue>
      </Text2>
    </Container>
  );
}
export default withTheme(Intro);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 40rem;
  max-height: 30rem;
  overflow: hidden;
  margin: 1.9rem 0 0 0;
  border-radius: 3px;

  img {
    width: 100%;
  }
`;
