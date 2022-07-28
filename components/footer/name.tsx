import styled from "styled-components";
import Image from "next/image";
import { SpanBlue, SpanRed, Text } from "../../styles";

export default function Name() {
  return (
    <Container>
      <Logo>
        <Image src="/logo.svg" alt="logo" width={37} height={37} />
        <h1>
          <SpanRed>M</SpanRed>ichal <SpanBlue>A</SpanBlue>ntczak
        </h1>
      </Logo>
      <Text>Software engineer & Web Developer</Text>
    </Container>
  );
}

const Container = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.9rem;

  img {
    margin-right: 1.4rem;
  }

  h1 {
    font-size: 2.2rem;
    color: ${(p) => p.theme.greySecondary};
    font-weight: 600;
  }
`;
