import styled, { withTheme } from "styled-components";
import { respond, TextLong, fonts } from "../../../styles";

function Front({ theme }) {
  return (
    <Container>
      <h1>Portfolio</h1>
      <TextLong color={theme.grey} margin="auto 0 0 0">
        I<br />
        look at Things
        <br />
        from different Perspective
        <br />
      </TextLong>
    </Container>
  );
}

export default withTheme(Front);

const Container = styled.div`
  padding: 1.4rem;
  grid-area: front;
  display: flex;
  flex-direction: column;
  z-index: 5;
  pointer-events: none;

  ${respond("m", "margin: 5rem 0;")}

  h1 {
    font-family: ${fonts.para};
    font-size: 4.5rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: ${(p) => p.theme.greyDark};

    ${respond("s", "font-size: 6rem;")}
  }

  p {
    margin-top: auto;
  }
`;
