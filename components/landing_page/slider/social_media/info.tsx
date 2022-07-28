import styled from "styled-components";
import {
  respond,
  FlexCol,
  Heading3,
  Heading1,
  SpanBlue,
  TextLong,
} from "../../../../styles";

export default function SocialMediaInfo() {
  return (
    <Container>
      <Heading3>
        <SpanBlue>Contact</SpanBlue>
      </Heading3>
      <Heading1 wide="45rem" margin="1.9rem 0 3.3rem 0">
        Follow me online, check my <SpanBlue>github</SpanBlue> account or simply
        get in touch.
      </Heading1>
      <TextLong>
        It is important to find someone who fits your team. Make an introductory
        meeting with me and who knows, it will be a perfect match.
      </TextLong>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  flex-direction: column;

  ${respond("m", "display: flex;")};
`;
