import styled from "styled-components";
import BackgroundImage from "../../../public/img/skills-header.jpg";
import Decoration from "./decoration";
import Top from "./top";
import Main from "./main";
import { ContainerNarrow, respond } from "../../../styles";

export default function HeaderComponent() {
  return (
    <Header>
      <Decoration />
      <ContainerNarrow>
        <Layout>
          <Top />
          <Main />
        </Layout>
      </ContainerNarrow>
    </Header>
  );
}

const Header = styled.header`
  min-height: 45rem;
  background-image: url(${BackgroundImage.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
const Layout = styled.div`
  padding: 1.4rem 0rem;
  padding-top: 10rem !important;

  ${respond("m", " padding: 2.7rem;")}
`;
