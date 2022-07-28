import styled, { withTheme } from "styled-components";
import ControlButtons from "./control_buttons";
import Main from "./main";
import { Heading1, Line, SectionNarrow } from "../../../styles";

function Overview({ theme }) {
  return (
    <Container id="skills_overview">
      <Line color={theme.primary} wide="15rem" />
      <Heading1 margin="1.4rem 0 4.7rem 0">Skills Overview</Heading1>

      <ControlButtons />
      <Main />
    </Container>
  );
}

export default withTheme(Overview);

const Container = styled(SectionNarrow)`
  margin: 4.7rem auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1255px;
`;
