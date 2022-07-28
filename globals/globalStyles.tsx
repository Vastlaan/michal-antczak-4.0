import React from "react";
import { createGlobalStyle } from "styled-components";
import { respond, fonts } from "../styles";
import { ThemeProps } from "../types";

export default function GlobalStyles() {
  return <StylesConatiner />;
}
const StylesConatiner = createGlobalStyle<ThemeProps>`
  *,
  *::after,
  *::before{
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      line-height: inherit;
      scrollbar-width: thin;
      font-family: inherit;
  }
  &::-webkit-scrollbar{display: block; width: 7px;}
  &::-webkit-scrollbar-track { background: ${(p) => p.theme.greySecondary};}
  &::-webkit-scrollbar-thumb { background: ${(p) => p.theme.greyDark};  }
  html{
      font-size: 50%;
      box-sizing: border-box;
      font-family: ${fonts.para};
      line-height: 1.3;
      ${() => respond("xs", `font-size:30%;`)}
      ${() => respond("l", `font-size:55%;`)}    
      ${() => respond("xl", `font-size:62.5%;`)} 
      ${() => respond("xxl", `font-size:65%;`)}
      ${() => respond("tv", `font-size:100%;`)}
      ${() => respond("m", "line-height: 1.6;")};
  }
  
  body{
      overflow-x: hidden;
      background-color: ${(p) => p.theme.greyPrimary};
      height: 100%;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: ${fonts.heading};
  }
  a{
      text-decoration: none;
      color:inherit;
  }
  ul{
    list-style: none;
  }
  button{
      cursor: pointer;
      &:active,:focus{
          outline: none;
      }
  }
  button, input, textarea{
      border: none;
  }
  input, textarea{
      &:active, :focus{
        outline: none;
        box-shadow: 0 0 5px ${(p) => p.theme.primary};
      }
      color: ${(p) => p.theme.greyPrimary}
  }
`;
