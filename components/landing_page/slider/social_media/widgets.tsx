import styled, { withTheme } from "styled-components";
import {
  FaGithubSquare,
  FaLinkedin,
  FaPhoneSquare,
  FaEnvelope,
} from "react-icons/fa";
import Widget from "../../../widget";
import { TextLong, SpanRed, SpanBlue } from "../../../../styles";

function SocialMediaWidgets({ theme }) {
  return (
    <Container>
      <TextLong margin="0 0 1.9rem 0">Direct contact</TextLong>
      <Widget
        title="Phone"
        link="tel:0031682307051"
        text="(+31) (0) 682 307 051"
        icon={FaPhoneSquare}
        color="#25D366"
        ariaLabel="contact via phone button"
      />
      <Widget
        title="E-mail"
        link="mailto:info@michalantczak.com"
        text="info@michalantczak.com"
        icon={FaEnvelope}
        color={theme.gold}
        ariaLabel="contact via email button"
      />
      <TextLong margin="0 0 1.9rem 0">
        <SpanBlue>Social Media</SpanBlue>
      </TextLong>
      <Widget
        title="Github"
        link="https://github.com/vastlaan"
        icon={FaGithubSquare}
        ariaLabel="link to Github profile"
      />
      <Widget
        title="LinkedIn"
        link="https://www.linkedin.com/michal-antczak"
        icon={FaLinkedin}
        color={theme.primary}
        ariaLabel="link to LinkedIn profile"
      />
    </Container>
  );
}
export default withTheme(SocialMediaWidgets);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
