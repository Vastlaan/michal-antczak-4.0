import styled, { withTheme } from "styled-components";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { respond } from "../../../styles";

function Home({ theme }) {
  return (
    <Link href="/">
      <Container role="button" aria-label="link to homepage">
        <div>
          <FaHome color={theme.primary} />
          Homepage
        </div>
      </Container>
    </Link>
  );
}
export default withTheme(Home);
const Container = styled.div`
  grid-column: 1/1;
  grid-row: 5/6;
  display: flex;
  align-items: center;
  padding: 1.4rem;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.6rem;
  color: ${(p) => p.theme.greySecondary};

  ${respond(
    "m",
    `
      grid-column: 2/3;
      grid-row: 1/2;
      justify-content: center;
    `
  )}

  &:hover {
    background-color: rgba(233, 0, 45, 0.3);
  }

  svg {
    margin-right: 1.4rem;
  }
`;
