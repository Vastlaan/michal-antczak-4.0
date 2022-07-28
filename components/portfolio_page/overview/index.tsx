import { withTheme } from "styled-components";
import { Heading1, Line, SectionNarrow } from "../../../styles";
import Main from "./main";

function Overview({ theme }) {
  return (
    <SectionNarrow id="portfolio_overview">
      <Line color={theme.secondary} wide="15rem" />
      <Heading1 margin="1.4rem 0 ">Private Projects</Heading1>
      <Main />
    </SectionNarrow>
  );
}

export default withTheme(Overview);
