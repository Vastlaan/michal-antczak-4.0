import { useEffect, useRef, createRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import Decorations from "./decorations";
import Motto from "./motto";
import Disclaimer from "./disclaimer";
import Picture from "./picture";
import Info from "./info";
import { ContainerNarrow, respond } from "../../../styles";

export default function HeaderComponent() {
  const leftSideRef = useRef([createRef(), createRef(), createRef()]);

  useEffect(() => {
    const leftSideItems = leftSideRef.current.map((item) => item.current);
    gsap.from(leftSideItems, {
      duration: 1,
      opacity: 0,
      x: "-100",
      stagger: 0.25,
    });
  }, []);

  return (
    <Header>
      <Decorations />
      <ContainerNarrow>
        <Layout>
          <Motto ref={leftSideRef} />
          <Disclaimer ref={leftSideRef} />
          <Picture ref={leftSideRef} />
          <Info />
        </Layout>
      </ContainerNarrow>
    </Header>
  );
}

const Header = styled.header`
  background-color: ${(p) => p.theme.greyPrimary};
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 1.4rem;
  padding-top: 10rem;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, auto);
  grid-gap: 2.7rem;
  grid-column-gap: 4.7rem;
  padding: 1.4rem;
  padding-top: 4.7rem;

  ${respond("m", "padding: 2.7rem; ")}

  ${respond("l", "padding-top: 10rem; grid-template-rows: repeat(12, 1fr);")}
`;
