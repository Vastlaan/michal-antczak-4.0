import { useRef } from "react";
import styled, { withTheme } from "styled-components";
import useAnimation from "../../../hooks/useAnimation";
import DetailsList from "./details_list";
import {
  ButtonPrimary,
  Heading3,
  SpanBlue,
  SpanColor,
  SpanRed,
  Text,
  Text2,
} from "../../../styles";
import Link from "next/link";

function Details({ theme }) {
  const button = useRef();

  useAnimation({ type: "popUp", refObject: button });
  return (
    <Container>
      <Heading3 margin="0 0 1.9rem 0">
        <SpanColor color={theme.greyPrimary}>Skills overview</SpanColor>
      </Heading3>
      <Text margin="0 0 2.7rem 0">
        <SpanBlue>
          I create functional products packaged in a sharp design. I always stay
          up to date with modern technologies.
        </SpanBlue>
      </Text>
      <Text2 margin="0 0 2.7rem 0">
        <SpanColor color={theme.greyPrimary}>
          As a <SpanRed>Professional Scrum Master</SpanRed> I understand the
          principles of iterative project development as described in Scrum
          Guide.
        </SpanColor>
      </Text2>
      <DetailsList />
      <Link href="/skills">
        <ButtonPrimary
          autoAlpha={0}
          ref={button}
          content="Read more..."
          align="flex-end"
        >
          <span>Read more...</span>
        </ButtonPrimary>
      </Link>
    </Container>
    //   <div class="skills__details">
    //   <h3 class="heading-3 black">Skills overview</h3>
    //   <p class="blue para-1 ">
    //     I design functional products packaged in a sharp design. I also find it very important to be up to date with modern
    //     technologies.
    //   </p>
    //   <p class="grey para-1 ">
    //   I understand the principles of iterative project development Agile / Scrum.
    //   </p>
    //   <ul class="skills__details--list">
    //     <li> <span class="devicons devicons-react blue"></span> Frontend Development Tools</li>
    //     <li><span class="devicons devicons-npm green"></span> Backend Development Tools</li>
    //     <li><i class="zmdi zmdi-palette red"></i> Design Tools</li>
    //     <li><span class="devicons devicons-database blue"></span> Cloud solutions and Linux VPS</li>
    //     <li><span class="devicons devicons-git black"></span>Git, Docker and much more...</li>
    //   </ul>
    //   <div class="skills__details--btn">
    //     <button class="button-primary btn-skills als1btn"><span>Read more...</span></button>
    //   </div>

    // </div>
  );
}

export default withTheme(Details);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
