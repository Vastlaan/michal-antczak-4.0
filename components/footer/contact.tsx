import styled from "styled-components";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Text, respond } from "../../styles";

export default function Contact() {
  return (
    <Container>
      <Link href="mailto:info@michalantczak.com">
        <CustomText aria-label="contact via email button">
          <FaEnvelope />
          info@michalantczak.com
        </CustomText>
      </Link>
      <Link href="tel:0031682307051">
        <CustomText aria-label="contact via phone button">
          <FaPhone />
          (+31) (0) 6 82 30 70 51
        </CustomText>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  ${(p) =>
    respond(
      "m",
      `
        border-top: 1px solid ${p.theme.secondary};
        border-right: 1px solid ${p.theme.secondary};
      `
    )}
`;
const CustomText = styled(Text)`
  margin: 0.4rem 0;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 1.4rem;
  }

  &:hover {
    color: ${(p) => p.theme.primary};
  }
`;
