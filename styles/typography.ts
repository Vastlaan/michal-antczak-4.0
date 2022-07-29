import styled from "styled-components";
import { fonts } from "./fonts";
import { FlexibleComponentProps } from "../types";
import { respond } from ".";

// Headings

// Paragraphs
export const Heading1 = styled.h1<FlexibleComponentProps>`
  margin: ${(p) => p.margin || "0"};
  font-size: ${(p) => p.size || "3.3rem"};
  line-height: 1.2;
  font-family: ${fonts.heading};
  color: ${(p) => p.color || p.theme.white};
  font-weight: 800;
  max-width: ${(p) => p.wide || "50rem"};
  text-align: ${(p) => (p.align ? p.align : "left")};

  span {
    color: ${(p) => p.theme.primary};
  }
  strong {
    color: ${(p) => p.theme.secondary};
  }
`;
export const Heading3 = styled.h3<FlexibleComponentProps>`
  margin: ${(p) => p.margin || "0"};
  font-family: ${fonts.para};
  font-size: ${(p) => p.size || "1.9rem"};
  letter-spacing: 0.1rem;
  color: ${(p) => (p.color ? p.color : p.theme.white)};
  text-align: ${(p) => (p.align ? p.align : "left")};
  max-width: 50rem;
`;
export const Heading2 = styled.h2<FlexibleComponentProps>`
  margin: ${(p) => p.margin || "0"};
  font-family: ${fonts.para};
  font-size: 2.9rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: ${(p) => (p.color ? p.color : p.theme.grey)};
  text-align: ${(p) => (p.align ? p.align : "left")};
  max-width: 50rem;
`;
export const Heading4 = styled.h4<FlexibleComponentProps>`
  margin: ${(p) => p.margin || "0"};
  font-size: ${(p) => p.size || "2.2rem"};
  color: ${(p) => p.color || p.theme.white};
  font-weight: 600;
  max-width: ${(p) => p.wide || "50rem"};
  text-transform: uppercase;

  span {
    color: ${(p) => p.theme.primary};
  }
  strong {
    color: ${(p) => p.theme.secondary};
  }
`;
export const Heading5 = styled.h3<FlexibleComponentProps>`
  font-family: ${fonts.heading};
  font-size: 2.7rem;
  color: ${(p) => p.theme.greyPrimary};
  font-weight: 600;
  max-width: 50rem;
  margin: ${(p) => p.margin || "0"};

  span {
    color: ${(p) => p.theme.primary};
  }
  strong {
    color: ${(p) => p.theme.secondary};
  }
`;

export const Text = styled.p<FlexibleComponentProps>`
  margin: ${(p) => p.margin || "0"};
  font-size: 1.6rem;
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => p.color || p.theme.greyTertiary};
  font-weight: 400;
  max-width: ${(p) => p.wide || "50rem"};
`;

export const Text2 = styled.p<FlexibleComponentProps>`
  margin: ${(p) => p.margin || "0"};
  font-size: ${(p) => p.size || "1.6rem"};
  color: ${(p) => p.color || p.theme.greyTertiary};
  font-weight: 700;
  max-width: 50rem;
`;
export const Text3 = styled.p<FlexibleComponentProps>`
  margin: ${(p) => p.margin || "0"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : p.theme.grey)};
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 400;
  max-width: ${(p) => p.wide || "50rem"};
`;
export const TextLong = styled.p<FlexibleComponentProps>`
  margin: ${(p) => p.margin || "0"};
  font-size: ${(p) => p.size || "1.6rem"};
  font-weight: 300;
  letter-spacing: 0.2rem;
  max-width: ${(p) => p.wide || "35rem"};
  color: ${(p) => p.color || p.theme.greySecondary};
  line-height: 1.6;
`;

// Other

export const SpanRed = styled.span`
  color: ${(p) => p.theme.secondary} !important;
`;
export const SpanBlue = styled.span`
  color: ${(p) => p.theme.primary} !important;
`;
export const SpanColor = styled.span`
  color: ${(p) => p.color || "white"};
`;
