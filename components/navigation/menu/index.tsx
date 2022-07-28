import React, { useRef, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Context } from "../../../store";
import List from "./list";
import Icons from "./icons";
import styled from "styled-components";
import { gsap } from "gsap";
import { respond } from "../../../styles";

export default function Menu() {
  const { pathname } = useRouter();

  const {
    state: { isNavMenuOpen },
    dispatch,
  } = useContext(Context);
  const navMenu = useRef(null);

  function toggleMenu() {
    gsap.set(navMenu.current, { overflow: "hidden" });
    if (isNavMenuOpen) {
      gsap.to(navMenu.current, { top: "100%", bottom: "auto", duration: 0.6 });
    } else {
      gsap.to(navMenu.current, { top: "auto", bottom: "100%", duration: 0.6 });
    }
  }

  useEffect(() => {
    dispatch({ type: "toggleNavMenu", payload: { isNavMenuOpen: false } });
  }, [pathname]);
  useEffect(() => {
    toggleMenu();
  }, [isNavMenuOpen]);

  return (
    <Container ref={navMenu}>
      <List />
      <Icons />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  background-color: ${(p) => p.theme.greyPrimary};
  padding: 2.7rem;
  z-index: 8;

  ${respond(
    "m",
    `
    padding: 1.4rem 2.7rem;
    width: auto;
    position: static;
    flex-direction: row;
    margin-left: auto;
    `
  )}
`;
