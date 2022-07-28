import styled from "styled-components";
import respond from "./respond";
import { FlexibleComponentProps } from "../types";

interface ContainerAnimatedProps {
  animation?: string;
}

// SECTIONS AND HEADERS

export const SectionNarrow = styled.section<FlexibleComponentProps>`
  max-width: 1255px;
  margin: ${(p) => (p.margin ? p.margin : "0 auto")};
  padding: ${(p) => (p.padding ? p.padding : "1.4rem")};
  background-color: ${(p) => p.background || "transparent"};
  min-height: ${(p) => p.minHeight || "auto"};
`;
export const ContainerNarrow = styled.div<FlexibleComponentProps>`
  max-width: 1255px;
  margin: ${(p) => (p.margin ? p.margin : "0 auto")};
  padding: ${(p) => (p.padding ? p.padding : "1.4rem")};
`;
export const Section = styled.section<FlexibleComponentProps>`
  margin: ${(p) => (p.margin ? p.margin : "0 auto")};
  background-color: ${(p) => p.theme.grey1};
  padding: 1.4rem;
`;
export const FlexRow = styled.div<FlexibleComponentProps>`
  display: flex;
  margin: ${(p) => (p.margin ? p.margin : "0")};
  padding: ${(p) => (p.padding ? p.padding : "0")};
  justify-content: ${(p) => (p.justify ? p.justify : "center")};
  align-items: ${(p) => (p.align ? p.align : "center")};
  background-color: ${(p) => (p.background ? p.background : "transparent")};
  max-width: ${(p) => (p.wide ? p.wide : "auto")};
  flex-wrap: ${(p) => (p.wrap ? p.wrap : "wrap")};
  width: ${(p) => (p.wide ? p.wide : "auto")};
`;
export const FlexCol = styled.div<FlexibleComponentProps>`
  display: flex;
  flex-direction: column;
  margin: ${(p) => (p.margin ? p.margin : "0")};
  padding: ${(p) => (p.padding ? p.padding : "0")};
  justify-content: ${(p) => (p.justify ? p.justify : "center")};
  align-items: ${(p) => (p.align ? p.align : "center")};
  background-color: ${(p) => (p.background ? p.background : "transparent")};
  width: ${(p) => (p.wide ? p.wide : "auto")};
`;

export const ProductsConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${() => respond("m", "flex-direction: row; flex-wrap: wrap;")}
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.9rem 1.9rem 1.9rem 0;

  label {
    font-size: 1.9rem;
    color: ${(p) => (p.color ? p.color : p.theme.grey5)};

    sup {
      color: ${(p) => p.theme.primary};
    }
  }
  input,
  textarea {
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin: 0.9rem 0;
    padding: 0.9rem 2.7rem;
    min-width: 25rem;
    font-size: 1.6rem;
    color: ${(p) => p.theme.grey4};
  }
  textarea {
    width: 100%;
  }
`;
export const ContainerAnimated = styled.div<ContainerAnimatedProps>`
  transform: ${(p) =>
    p.animation === "mx"
      ? "translateX(-100px)"
      : p.animation === "px"
      ? "translateX(100px)"
      : "translate(0, 100px)"};
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
`;
export const ContactBox = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem 2.7rem 2.7rem 2.7rem;
  padding: 1.4rem;
  transition: all 0.3s;
`;
export const Icon = styled.div<FlexibleComponentProps>`
  display: flex;
  margin: ${(p) => (p.margin ? p.margin : "0")};
  padding: ${(p) => (p.padding ? p.padding : "0")};
  justify-content: ${(p) => (p.justify ? p.justify : "center")};
  align-items: ${(p) => (p.align ? p.align : "center")};
  svg {
    margin: 1.4rem 0;
    font-size: 4.7rem;
    color: ${(p) => (p.color ? p.color : p.theme.primary)};
  }
`;
