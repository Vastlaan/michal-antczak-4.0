import { useEffect, useState } from "react";
import styled from "styled-components";
import Contact from "./contact";
import SocialMedia from "./social_media";

interface IButtonProps {
  isActive?: boolean;
}
type TActiveSlide = "contact" | "socialMedia";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState<TActiveSlide>("contact");

  useEffect(() => {
    function slide() {
      setActiveSlide((prevState) =>
        prevState === "contact" ? "socialMedia" : "contact"
      );
    }

    const interval = setInterval(() => slide(), 8000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Container>
      <Layout>
        <Contact isActive={activeSlide === "contact"} />
        <SocialMedia isActive={activeSlide === "socialMedia"} />
        <ControlButtonsWrapper>
          <ControlButton
            isActive={activeSlide === "contact"}
            onClick={() => setActiveSlide("contact")}
          ></ControlButton>
          <ControlButton
            isActive={activeSlide === "socialMedia"}
            onClick={() => setActiveSlide("socialMedia")}
          ></ControlButton>
        </ControlButtonsWrapper>
      </Layout>
    </Container>
  );
}

const Container = styled.section`
  padding: 4.7rem 0;
  background-color: ${(p) => p.theme.greyPrimary};
  overflow: hidden;
  margin-bottom: 4.7rem;
`;
const Layout = styled.div`
  position: relative;
  width: 100%;
  min-height: 55rem;
`;
const ControlButtonsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  z-index: 9;
`;
const ControlButton = styled.button<IButtonProps>`
  width: 2.7rem;
  height: 2.7rem;
  margin-right: 1.9rem;
  border-radius: 5px;
  border: 1px solid ${(p) => p.theme.white};
  background-color: ${(p) => (p.isActive ? p.theme.white : "transparent")};
`;
