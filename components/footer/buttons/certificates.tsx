import styled, { withTheme } from "styled-components";
import Link from "next/link";
import { MdSchool } from "react-icons/md";
import { respond } from "../../../styles";

function Certificates({ theme }) {
  return (
    <Link href="/certificates">
      <Container>
        <MdSchool color={theme.secondary} />
        Certificates
      </Container>
    </Link>
  );
}
export default withTheme(Certificates);
const Container = styled.div`
  grid-column: 1/2;
  grid-row: 9/10;
  display: flex;
  align-items: center;
  padding: 1.4rem;
  cursor: pointer;
  border-left: 1px solid transparent;
  border-bottom: 1px solid transparent;
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
      grid-row: 2/3;
      justify-content: center;
      border-left: 1px solid ${p.theme.primary};
      border-bottom: 1px solid ${p.theme.secondary};
    `
    )}

  &:hover {
    background-color: rgba(233, 0, 45, 0.3);
  }
`;
