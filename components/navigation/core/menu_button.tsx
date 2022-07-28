import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { respond } from "../../../styles";

interface ButtonMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
interface ButtonProps {
  isOpen: boolean;
}

export default function ButtonMenu({ isOpen, setIsOpen }: ButtonMenuProps) {
  return (
    <Button
      name="triggerMenu"
      isOpen={isOpen}
      onClick={() => setIsOpen((prevState) => !prevState)}
      aria-label="menu"
    >
      <div></div>
    </Button>
  );
}

const Button = styled.button<ButtonProps>`
  margin-left: auto;
  display: flex;
  width: 5rem;
  height: 5rem;
  border: none;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99;

  ${respond("m", "display: none;")}

  &:active,
    :focus {
    outline: none;
  }
  div {
    width: 3rem;
    height: 2px;
    background-color: ${(p) => p.theme.secondary};
    position: relative;
    transition: all 0.3s;
    transform: ${(props) => (props.isOpen ? "rotate(135deg)" : "")};
    pointer-events: none;
    &:after {
      width: 3rem;
      height: 2px;
      content: "";
      display: block;
      position: absolute;
      background-color: ${(p) => p.theme.secondary};
      top: -1rem;
      left: 0;
      transition: all 0.3s;
      transform: ${(props) =>
        props.isOpen ? "translate(0%,1rem) rotate(90deg)" : ""};
    }
    &:before {
      width: 3rem;
      height: 2px;
      content: "";
      display: ${(props) => (props.isOpen ? "none" : "block")};
      position: absolute;
      background-color: ${(p) => p.theme.secondary};
      top: 1rem;
      left: 0;
    }
  }
`;
