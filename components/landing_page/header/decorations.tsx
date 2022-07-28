import { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { respond } from "../../../styles";

export default function Decorations() {
  const deco3 = useRef(null);

  useEffect(() => {
    gsap.from(deco3.current, { y: 200, duration: 1, delay: 1 });
  }, []);
  return (
    <>
      <Deco1
        src="/img/decoration-1.svg"
        alt="circle website decoration"
        width={587}
        height={587}
      />

      <Deco2
        src="/img/decoration-2.svg"
        alt="square website decoration"
        width={415}
        height={593}
      />

      <Deco3
        ref={deco3}
        src="/img/decoration-3.svg"
        alt="triangular website decoration"
        width={418}
        height={207}
      />
    </>
  );
}

const Deco1 = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  left: -29rem;

  ${respond(
    "l",
    `
    display: block;
    top: 50%;
    left: -29rem;
    bottom: auto;
    transform: translateY(-50%);
    `
  )}
`;
const Deco2 = styled.img`
  display: none;
  position: absolute;
  top: 10rem;
  right: -29rem;

  ${respond("s", "display: block;")}

  ${respond(
    "l",
    `
      display: block;
      top: 50%;
      right: -29rem;
      transform: translateY(-50%);
      `
  )}
`;
const Deco3 = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  right: 10rem;

  ${respond("l", "display: block;")}
`;
