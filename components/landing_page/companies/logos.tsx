import { useRef, createRef, useEffect, Ref } from "react";
import styled from "styled-components";
import Image from "next/image";
import useAnimation from "../../../hooks/useAnimation";
import { FlexRow, FlexCol, TextLong, Text, respond } from "../../../styles";
import { data } from "./data";

export default function Logos() {
  const logos = useRef([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ]) as React.MutableRefObject<any[]>;

  useAnimation({ type: "bulkShowUp", refObject: logos });

  return (
    <FlexRow margin="4.7rem auto 1.9rem auto">
      {data.map(({ src, alt, width, height, color, description, title }, i) => (
        <Logo ref={logos.current[i]} key={`${alt}-${i}`} color={color}>
          <ImageWrapper color={color}>
            <Image src={src} alt={alt} width={width} height={height} />
          </ImageWrapper>

          <FlexCol align="flex-start" margin="1.4rem 0 0 0">
            <Text margin="0 0 .9rem 0" color={color}>
              {title}
            </Text>
            <TextLong size="1.4rem">{description}</TextLong>
          </FlexCol>
        </Logo>
      ))}
    </FlexRow>
  );
}

const Logo = styled.div`
  margin: 1.9rem 2.7rem;
  transition: all 0.3s;
  opacity: 0;
  padding: 0.9rem 1.4rem;
  border: 1px solid ${(p) => p.color || p.theme.white};
  border-radius: 5px;
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 0 1rem ${(p) => `${p.color}4d` || p.theme.white};
  position: relative;
  ${respond("m", "margin: 0 3.7rem 0 0;")};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5rem;
    height: 5rem;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    background-color: ${(p) => p.color || p.theme.white};
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(p) => p.color || p.theme.white};
`;
