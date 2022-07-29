import { useRef, createRef } from "react";
import styled, { withTheme } from "styled-components";
import Image from "next/image";
import ScrumMasterBadge from "../../../public/img/psmi.png";
import useAnimation from "../../../hooks/useAnimation";
import {
  SectionNarrow,
  FlexCol,
  Text,
  Text3,
  Heading1,
  Line,
} from "../../../styles";

function CloudComputing({ theme }) {
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
        <Text3 ref={refItems.current[0]}>Iterrative software development</Text3>
        <ImageWrapper ref={refItems.current[1]}>
          <Image
            src={ScrumMasterBadge}
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
          Certified Professional Scrum Master
        </Heading1>
        <Text ref={refItems.current[3]} align="center">
          As a software engineer I develop products following the best practices
          of itterative software development framework.
        </Text>
      </FlexCol>
    </SectionNarrow>
  );
}
export default withTheme(CloudComputing);
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.4rem auto;
  width: 25rem;
  height: 25rem;
  position: relative;
`;
