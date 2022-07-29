import styled, { withTheme } from "styled-components";
import Image from "next/image";
import { FaEnvelope, FaPhoneSquare } from "react-icons/fa";
import Widget from "../widget";
import { Heading1, respond, SpanBlue, Text } from "../../styles";

function Details({ theme }) {
  return (
    <Container>
      <Image src="/logo.svg" alt="logo" width="74" height="74" />
      <Heading1 margin="1.4rem 0 2.7rem 0">
        <span>Contact</span> Details
      </Heading1>
      <div>
        <Text margin="0 0 1.4rem 0">Send me an e-mail:</Text>
        <Widget
          title="E-mail"
          link="mailto:info@michalantczak.com"
          text="info@michalantczak.com"
          icon={FaEnvelope}
          color={theme.gold}
          ariaLabel="contact via email button"
        />
      </div>
      <div>
        <Text margin="0 0 1.4rem 0">Mobile:</Text>
        <Widget
          title="Mobile"
          link="tel:0031682307051"
          text="(+31) (0) 682 307 051"
          icon={FaPhoneSquare}
          color="#25D366"
          ariaLabel="contact via phone button"
        />
      </div>
      <div>
        <Text>
          <SpanBlue>
            Do you have a question? Feel free to contact me using the contact
            details above.
          </SpanBlue>
        </Text>
      </div>
    </Container>
  );
}
export default withTheme(Details);

const Container = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${respond(
    "m",
    `grid-column: 1/2;
    grid-row: 1/-1;`
  )}
`;
