import { useRef, createRef } from "react";
import { withTheme } from "styled-components";
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
  ]) as React.MutableRefObject<any[]>;

  useAnimation({ type: "slideUp", refObject: refItems });

  return (
    <SectionNarrow>
      <FlexCol margin="4.7rem auto">
        <Line wide="10rem" margin="1.4rem auto" />
        <Text3 ref={refItems.current[0]}>cloud solutions</Text3>
        <Heading1
          ref={refItems.current[1]}
          color={theme.greySecondary}
          margin=".6rem 0 1.4rem 0"
        >
          AWS Cloud Computing
        </Heading1>
        <Text ref={refItems.current[2]} align="center">
          Cloud solutions are improving accessibility and performance of modern
          applications. I have experience with both AWS EC2 instances,
          Serverless Applications and those build with Containers on ECS, EKS
          and Fargate.
        </Text>
      </FlexCol>
    </SectionNarrow>
  );
}
export default withTheme(CloudComputing);
