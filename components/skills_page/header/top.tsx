import styled, { withTheme } from "styled-components";
import { FaWrench } from "react-icons/fa";
import { Heading4 } from "../../../styles";

function Top({ theme }) {
  return (
    <Container>
      <FaWrench fontSize="2.7rem" color={theme.primary} />
      <Heading4>Skills</Heading4>
    </Container>
  );
}
export default withTheme(Top);

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 15rem;
  padding: 1.4rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    background-image: linear-gradient(
      to right,
      ${(p) => p.theme.secondary},
      ${(p) => p.theme.primary}
    );
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0.5rem;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      ${(p) => p.theme.secondary},
      ${(p) => p.theme.primary}
    );
  }

  svg {
    margin-right: 1.4rem;
  }
  h4 {
    display: inline-block;
  }
`;
