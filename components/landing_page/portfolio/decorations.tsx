import { useRef } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import useAnimation from "../../../hooks/useAnimation";
import { respond } from "../../../styles";
import { FlexibleComponentProps } from "../../../types";

export default function Decorations() {
  const deco2 = useRef();
  const chevron = useRef();
  useAnimation({ type: "rotate", refObject: deco2 });
  useAnimation({ type: "infiniteSlideDown", refObject: chevron });

  return (
    <>
      <Deco1
        src="/img/decoration-2.svg"
        alt="square website decoration"
        width={415}
        height={593}
      />
      <Deco2
        ref={deco2}
        src="/img/cog3.svg"
        width={216}
        height={216}
        alt="cog website decoration"
      />
      <Deco3 ref={chevron}>
        <FaChevronDown />
      </Deco3>
    </>
  );
}

const Deco1 = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  left: -29rem;

  ${respond(
    "m",
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
  top: 0;
  right: 0;
  ${respond("m", `display: block;`)}
`;

const Deco3 = styled.div<FlexibleComponentProps>`
  display: block;
  position: absolute;
  top: 90%;
  left: 10rem;
  z-index: 2;
  font-size: 9rem;
  color: ${(p) => p.theme.primary};
  width: 9rem;
  height: 9rem;

  ${respond("m", `display: block;`)}
`;
