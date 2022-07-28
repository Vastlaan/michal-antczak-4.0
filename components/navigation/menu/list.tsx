import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { respond } from "../../../styles";

export default function List() {
  return (
    <Container>
      <Link href="/skills">
        <li>Skills</li>
      </Link>
      <Link href="/portfolio">
        <li>Portfolio</li>
      </Link>
      <Link href="/certificates">
        <li>Certificates</li>
      </Link>
      <Link href="/contact">
        <li>Contact</li>
      </Link>
    </Container>
  );
}
const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  ${respond("m", "flex-direction: row; align-items: center; ")}

  li {
    color: white;
    font-size: 1.7rem;
    margin: 2.7rem 0;
    transition: all 0.3s;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;

    ${respond("m", "text-transform: unset; margin: 0 2.7rem 0 0;")}

    &:after {
      content: "";
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 1rem;
      height: 2px;
      background-color: ${(p) => p.theme.secondary};
      transition: all 0.3s;
    }

    &:hover {
      &:after {
        width: 4rem;
      }
    }
  }
`;
