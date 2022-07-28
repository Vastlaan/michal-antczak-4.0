import React from "react";
import Link from "next/link";
import { withTheme } from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styled from "styled-components";
import { respond } from "../../../styles";

function Icons({ theme }) {
  return (
    <IconsWrapper>
      <Link href="https://github.com/vastlaan">
        <BsGithub color={theme.white} />
      </Link>
      <Link href="https://www.linkedin.com/in/michal-antczak/">
        <BsLinkedin color={theme.primary} />
      </Link>
    </IconsWrapper>
  );
}

export default withTheme(Icons);

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.4rem;

  ${respond("m", "margin-top: 0;")}

  svg {
    display: block;
    font-size: 2.7rem;
    margin-right: 1.4rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
