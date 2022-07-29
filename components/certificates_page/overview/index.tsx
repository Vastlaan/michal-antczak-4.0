import { useContext } from "react";
import { withTheme } from "styled-components";
import { Heading1, Line, SectionNarrow } from "../../../styles";
import { Context } from "../../../store";
import Main from "./main";
import FullScreenCertificate from "./full_screen_certificate";

function Overview({ theme }) {
  const { state } = useContext(Context);
  return (
    <SectionNarrow id="certificates_overview">
      {state.activeCertificate && <FullScreenCertificate />}
      <Line color={theme.primary} wide="15rem" />
      <Heading1 margin="1.4rem 0 ">My Certificates</Heading1>
      <Main />
    </SectionNarrow>
  );
}

export default withTheme(Overview);
