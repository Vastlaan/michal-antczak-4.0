import styled, { withTheme } from "styled-components";
import Link from "next/link";
import { FaBriefcase } from "react-icons/fa";
import { respond } from "../../../styles";

function Protfolio({ theme }) {
  return (
    <Link href="/portfolio">
      <Container>
        <FaBriefcase color={theme.green} />
        Portfolio
      </Container>
    </Link>
  );
}
export default withTheme(Protfolio);
const Container = styled.div`
  grid-column: 1/2;
  grid-row: 7/8;
  display: flex;
  align-items: center;
  padding: 1.4rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  border-right: 1px solid transparent;
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
      grid-column: 2/3;
      grid-row: 3/4;
      justify-content: center;
      border-bottom: 1px solid ${p.theme.primary};
      border-right: 1px solid ${p.theme.primary};

    `
    )}

  &:hover {
    background-color: rgba(233, 0, 45, 0.3);
  }
`;
