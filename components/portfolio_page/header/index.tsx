import styled from "styled-components";
import BackgroundImage from "../../../public/img/header-port.jpg";
import { ContainerNarrow, respond } from "../../../styles";
import Decoration from "./decoration";
import Main from "./main";
import Top from "./top";

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
