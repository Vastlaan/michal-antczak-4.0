import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Context } from "../../../store";
import MenuButton from "./menu_button";
import { respond, SpanBlue, SpanRed } from "../../../styles";

export default function Logo() {
  const { state, dispatch } = useContext(Context);
  return (
    <Container>
      <Link href="/">
        <GoHome aria-label="go home button">
          <Image src="/logo.svg" alt="logo" width={37} height={37} />
          <h1>
            <SpanRed>M</SpanRed>ichal <SpanBlue>A</SpanBlue>ntczak
          </h1>
        </GoHome>
      </Link>
      <MenuButton
        isOpen={state.isNavMenuOpen}
        setIsOpen={() =>
          dispatch({
            type: "toggleNavMenu",
            payload: { isNavMenuOpen: !state.isNavMenuOpen },
          })
        }
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 1.4rem 2.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 9;
  background-color: ${(p) => p.theme.greyPrimary};
  cursor: pointer;

  h1 {
    font-size: 2.7rem;
    color: ${(p) => p.theme.greySecondary};
    font-weight: 600;
    margin-left: 1.4rem;
  }

  ${() => respond("m", "width: auto;")}
`;
const GoHome = styled.div`
  display: flex;
  align-items: center;
`;
