import React, { useRef, createRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Link from "next/link";
import { ButtonEmpty } from "../../../styles";

export default function Links() {
  const buttonsRef = useRef([
    createRef(),
    createRef(),
  ]) as React.MutableRefObject<any[]>;

  useEffect(() => {
    const leftSideItems = buttonsRef.current.map((item) => item.current);
    gsap.from(leftSideItems, {
      duration: 1.5,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    });
  }, []);
  return (
    <Container>
      <Link href="/contact">
        <ButtonEmpty ref={buttonsRef.current[0]}>Contact</ButtonEmpty>
      </Link>
      <Link href="/certificates">
        <ButtonEmpty ref={buttonsRef.current[1]}>Certificates</ButtonEmpty>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 2.7rem;

  button {
    margin-right: 2.7rem;
  }
`;
