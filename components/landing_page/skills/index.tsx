import { useRef } from "react";
import styled from "styled-components";
import Intro from "./intro";
import Details from "./details";
import { respond, ContainerNarrow } from "../../../styles";
import useAnimation from "../../../hooks/useAnimation";

export default function Skills() {
  const section = useRef();

  useAnimation({ type: "slideUp", refObject: section });

  return (
    <section ref={section}>
      <ContainerNarrow>
        <Layout>
          <Intro />
          <Details />
        </Layout>
      </ContainerNarrow>
    </section>
  );
}

const Layout = styled.div`
  border: 5px solid ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.greySecondary};
  padding: 4.7rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.7rem;
  min-height: 50rem;

  ${respond("m", " grid-template-columns: 1fr 1fr;")};
`;
