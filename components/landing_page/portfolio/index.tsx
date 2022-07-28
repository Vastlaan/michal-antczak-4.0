import { useRef } from "react";
import styled from "styled-components";
import Decorations from "./decorations";
import Front from "./front";
import Center from "./center";
import Back from "./back";
import useAnimation from "../../../hooks/useAnimation";
import { ContainerNarrow, respond } from "../../../styles";

export default function Portfolio() {
  const layout = useRef();
  useAnimation({ type: "slideUp", refObject: layout });
  return (
    <Container>
      <Decorations />
      <ContainerNarrow>
        <Layout ref={layout}>
          <Front />
          <Center />
          <Back />
        </Layout>
      </ContainerNarrow>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  padding: 14rem 0rem;
  background-color: ${(p) => p.theme.greyPrimary};
  overflow: hidden;
`;
const Layout = styled.div`
  min-height: 50rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "front"
    "middle"
    "back";

  ${respond(
    "m",
    `
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "front back";
    `
  )}
`;
