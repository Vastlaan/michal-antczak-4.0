import styled from "styled-components";
import { FlexibleComponentProps } from "../types";
import respond from "./respond";

export const ButtonPrimary = styled.button<FlexibleComponentProps>`
  padding: 1rem 1.4rem;
  font-size: 1.9rem;
  background-color: ${(p) => p.theme.secondary};
  border: none;
  color: ${(p) => p.theme.greySecondary};
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 2;
  min-width: 15rem;
  max-width: ${(p) => p.wide || "auto"};
  align-self: ${(p) => p.align || "stretch"};
  opacity: ${(p) => p.autoAlpha || 1};
  transform: scale(${(p) => p.autoAlpha || 1});
  margin: ${(p) => p.margin || "0"};

  span {
    display: block;
    transition: all 0.3s;
  }

  &::after {
    content: "${(p) => p.content || "Read more..."}";
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.9rem;
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.theme.primary};
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover {
    span {
      display: block;
      transform: translateX(-120%);
    }

    &::after {
      top: 0;
      left: 0;
    }
  }
`;

export const ButtonEmpty = styled.button<FlexibleComponentProps>`
  padding: ${(p) => (p.padding ? p.padding : " 1rem 1.4rem")};
  font-size: 1.9rem;
  background-color: ${(p) => p.theme.greyPrimary};
  border: 1px solid ${(p) => p.theme.greySecondary};
  color: ${(p) => p.theme.greySecondary};
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.theme.white};
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover {
    color: ${(p) => p.theme.greyPrimary};

    &::after {
      top: 0;
      left: 0;
    }
  }
`;
export const ButtonFull = styled.button<FlexibleComponentProps>`
  padding: ${(p) => (p.padding ? p.padding : " 1rem 1.4rem")};
  margin: ${(p) => p.margin || "0 0 1.4rem 0"};
  font-size: 1.9rem;
  background-color: transparent;
  border: 1px solid ${(p) => p.color || p.theme.greyTertiary};
  color: ${(p) => (p.isActive ? p.theme.greySecondary : p.color)};
  transition: all 0.3s;
  overflow: hidden;
  position: relative;
  min-width: ${(p) => p.wide || "13rem"};

  &::after {
    content: "";
    position: absolute;
    top: ${(p) => (p.isActive ? "0" : "100%")};
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.color || p.theme.greyTertiary};
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover {
    color: ${(p) => p.theme.greySecondary};
  }
`;
