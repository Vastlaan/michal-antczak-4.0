import styled from "styled-components";
import { respond } from "../../styles";
import Decoration from "./decoration";
import DecoImage from "./deco_image";
import Details from "./details";
import Form from "./form";

export default function Contact() {
  return (
    <Container>
      <DecoImage />
      <Layout>
        <Decoration />
        <Details />
        <Form />
      </Layout>
    </Container>
  );
}
const Container = styled.section`
  padding: 2.7rem;
  padding-top: 7rem;
  width: 100%;
  min-height: 50rem;
  background-color: ${(p) => p.theme.greyPrimary};
  display: flex;
  flex-direction: center;
  align-items: center;
  position: relative;
  ${respond("xxl", "padding-top: 13rem;")}
`;
const Layout = styled.div`
  padding: 2.7rem 0rem;
  background-color: ${(p) => p.theme.greyPrimary};

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.7rem;
  max-width: 1255px;
  margin: 0 auto;
  z-index: 2;
  position: relative;

  ${respond(
    "m",
    `padding: 2.7rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);`
  )}
`;
