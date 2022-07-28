import styled, { withTheme } from "styled-components";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { respond } from "../../../styles";

function Skills({ theme }) {
  return (
    <Link href="/skills">
      <Container>
        <FaCode color={theme.secondary} />
        Skills
      </Container>
    </Link>
  );
}
export default withTheme(Skills);
const Container = styled.div`
  grid-column: 1/2;
  grid-row: 6/7;
  display: flex;
  align-items: center;
  padding: 1.4rem;
  cursor: pointer;
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
      grid-column: 2/3;
      grid-row: 2/3;
      justify-content: center;
      border-bottom: 1px solid ${p.theme.secondary};

    `
    )}

  &:hover {
    background-color: rgba(233, 0, 45, 0.3);
  }
`;
