import styled from "styled-components";
import { respond } from "../../styles";
import Name from "./name";
import Contact from "./contact";
import Question from "./question";
import {
  Home,
  Skills,
  Portfolio,
  Contact as ContactButton,
  Certificates,
} from "./buttons";
import Info from "./info";
import Copyright from "./copyright";

export default function FooterComponent() {
  return (
    <Footer>
      <Layout>
        <Name />
        <Contact />
        <Question />
        <Home />
        <Skills />
        <Portfolio />
        <ContactButton />
        <Certificates />
        <Info />
        <Copyright />
      </Layout>
    </Footer>
  );
}

const Footer = styled.footer`
  padding: 1.4rem 0 0 0;
  background-color: ${(p) => p.theme.greyPrimary};
  border-top: 1px solid rgba(255, 255, 255, 0.3);

  ${respond("m", "padding: 4.7rem 4.7rem 0 4.7rem;")}
`;

const Layout = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: 1fr;

  ${respond("m", "grid-template-columns: repeat(3, 1fr);")}

  & > * {
    padding: 1.4rem;
  }
`;
