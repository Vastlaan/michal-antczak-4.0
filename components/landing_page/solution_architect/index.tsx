import { useRef, createRef } from "react";
import styled, { withTheme } from "styled-components";
import Image from "next/image";
import SolutionsArchitectBadge from "../../../public/img/solution-architect-badge.png";
import useAnimation from "../../../hooks/useAnimation";
import {
  SectionNarrow,
  FlexCol,
  Text,
  Text3,
  Heading1,
  Line,
  ButtonPrimary,
} from "../../../styles";
import Link from "next/link";

function SolutionsArchitect({ theme }) {
  const refItems = useRef([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ]) as React.MutableRefObject<any[]>;

  useAnimation({ type: "slideUp", refObject: refItems });

  return (
    <SectionNarrow>
      <FlexCol margin="4.7rem auto">
        <Line wide="10rem" margin="1.4rem auto" />
        <Text3 ref={refItems.current[0]}>
          AWS Certified Solutions Architect
        </Text3>
        <ImageWrapper ref={refItems.current[1]}>
          <Image
            src={SolutionsArchitectBadge}
            alt="professional scrum master"
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
        <Heading1
          ref={refItems.current[2]}
          color={theme.greySecondary}
          margin=".6rem 0 1.4rem 0"
          align="center"
        >
          AWS Certified Solutions Architect
        </Heading1>
        <Text ref={refItems.current[3]} align="center">
          I have a comprehensive understanding of AWS services and technologies.
          I have demonstrated the ability to build secure and robust solutions
          using architectural design principles based on customer requirements.
          I am able to strategically design well-architected distributed systems
          that are scalable, resilient, efficient, and fault-tolerant.
        </Text>
        <Link href="https://www.credly.com/badges/71a06d07-c663-4815-84ce-5afb9ed669ab/">
          <ButtonPrimary wide="20rem" content="Verify" margin="1.9rem auto">
            <span>Verify</span>
          </ButtonPrimary>
        </Link>
      </FlexCol>
    </SectionNarrow>
  );
}
export default withTheme(SolutionsArchitect);
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.4rem auto;
  width: 25rem;
  height: 25rem;
  position: relative;
`;
