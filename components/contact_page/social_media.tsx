import { useRef, createRef } from "react";
import { withTheme } from "styled-components";
import useAnimation from "../../hooks/useAnimation";
import Widget from "../widget";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SectionNarrow, FlexCol, Text3, Heading1, Line } from "../../styles";

function SocialMedia({ theme }) {
  const refItems = useRef([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ]) as React.MutableRefObject<any[]>;
  const widget_github = useRef();

  useAnimation({ type: "slideUp", refObject: refItems });

  return (
    <SectionNarrow>
      <FlexCol margin="4.7rem auto">
        <Line wide="10rem" margin="1.4rem auto" />
        <Text3 ref={refItems.current[0]}>Social Media</Text3>
        <Heading1
          ref={refItems.current[1]}
          color={theme.greySecondary}
          margin=".6rem 0 2.7rem 0"
        >
          Contact me via social media
        </Heading1>
        <div ref={refItems.current[2]}>
          <Widget
            title="Github"
            link="https://github.com/vastlaan"
            icon={FaGithubSquare}
            ariaLabel="link to Github profile"
          />
        </div>
        <div ref={refItems.current[3]}>
          <Widget
            title="LinkedIn"
            link="https://www.linkedin.com/in/michal-antczak"
            icon={FaLinkedin}
            color={theme.primary}
            ariaLabel="link to LinkedIn profile"
          />
        </div>
      </FlexCol>
    </SectionNarrow>
  );
}
export default withTheme(SocialMedia);
