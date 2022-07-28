import styled from "styled-components";
import Link from "next/link";
import { respond } from "../../../styles";

export default function Center() {
  return (
    <Container>
      <String>
        <p>Creative solution</p>
      </String>
      <Eye>
        <Link href="/portfolio">PORT</Link>
        <Link href="/portfolio">FOLIO</Link>
      </Eye>
      <Turn>
        <p>Custom design</p>
      </Turn>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 0;
  padding: 1.4rem;
  grid-area: middle;

  ${respond(
    "m",
    ` margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
      z-index: 1;
      transform: translate(-50%, -50%);
      width: 35rem;
      height: 35rem;
    `
  )}
`;
const String = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  color: ${(p) => p.theme.primary};
  text-align: center;

  ${respond("m", `text-align: right;`)}
    
}
`;
const Eye = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../img/image-portfolio-eye.jpg");
  background-size: cover;
  background-position: center;
  z-index: 10;
  max-width: 35rem;
  margin: 0.9rem auto;

  ${respond(
    "m",
    `margin: 0;
    max-width: none;
    width: 60%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `
  )}

  &:hover {
    a {
      color: ${(p) => p.theme.greyTertiary};
    }
  }
  a {
    font-size: 6rem;
    font-weight: 700;
    color: ${(p) => p.theme.greySecondary};
    cursor: pointer;
    transition: all 0.3s;
  }
`;
const Turn = styled.div`
  width: 100%;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  color: ${(p) => p.theme.secondary};
  text-align: center;

  ${respond(
    "m",
    `position: absolute;
    bottom: 2rem;
    left: 2rem;
    transform-origin: left center;
    transform: rotate(-90deg) translateX(25%);
    text-align: left;`
  )}
`;
