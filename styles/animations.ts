import { keyframes } from "styled-components";

// CSS animations
export const slideDown = keyframes`
{
  0% {
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
  }
  100% {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
  }
}
`;
export const slideUp = keyframes`
 {
  0% {
      transform: translateY(100%);
      opacity: 0;
      visibility: hidden;
  }
  100% {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
  }
}
`;

export const slideFromRight = keyframes`
 {
  0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(100%);
  }
  100% {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
  }
}
`;
export const slideFromLeft = keyframes`
 {
  0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-100%);
  }
  100% {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
  }
}
`;
export const grow = keyframes`
 {
  0% {
      opacity: 0;
      visibility: hidden;
      transform: scale(0);
  }
  100% {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
  }
}`;
