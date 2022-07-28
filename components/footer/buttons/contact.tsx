import styled, { withTheme } from "styled-components";
import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";
import { respond } from "../../../styles";

function Contact({ theme }) {
  return (
    <Link href="/contact">
      <Container>
        <RiCustomerService2Fill color={theme.gold} />
        Contact
      </Container>
    </Link>
  );
}
export default withTheme(Contact);
const Container = styled.div`
  grid-column: 1/2;
  grid-row: 8/9;
  display: flex;
  align-items: center;
  padding: 1.4rem;
  cursor: pointer;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  transition: all 0.3s;
  font-size: 1.6rem;
  color: ${(p) => p.theme.greySecondary};

  svg {
    margin-right: 1.4rem;
  }

  ${(p) =>
    respond(
      "m",
      `
      grid-column: 3/4;
                grid-row: 1/2;
      justify-content: center;
      border-top: 1px solid ${p.theme.primary};
      border-left: 1px solid ${p.theme.primary};

    `
    )}

  &:hover {
    background-color: rgba(233, 0, 45, 0.3);
  }
`;
