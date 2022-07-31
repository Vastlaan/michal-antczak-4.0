import { useEffect, useRef, useContext } from "react";
import styled, { withTheme } from "styled-components";
import gsap from "gsap";
import { Context } from "../../store";
import { fonts, ButtonPrimary } from "../../styles";
import { FlexibleComponentProps } from "../../types";

function CookieStatementComponent({ theme }) {
  const target = useRef();
  const { state, dispatch } = useContext(Context);

  function hideStatement(agreed) {
    if (agreed) {
      window.localStorage.setItem(
        "michalantczak_cookie_policy",
        JSON.stringify({ cookies_accepted: true, visited: true })
      );
      dispatch({
        type: "setAnalyticsAgreed",
        payload: { isAnalyticsAgreed: true },
      });
    } else {
      window.localStorage.setItem(
        "michalantczak_cookie_policy",
        JSON.stringify({ cookies_accepted: false, visited: true })
      );
      dispatch({
        type: "setAnalyticsAgreed",
        payload: { isAnalyticsAgreed: false },
      });
    }

    gsap.to(target.current, { autoAlpha: 0, y: "100%" });
  }

  useEffect(() => {
    const isAgreed = JSON.parse(
      window.localStorage.getItem("michalantczak_cookie_policy")
    );

    if (!isAgreed?.visited) {
      gsap.to(target.current, { autoAlpha: 1, y: 0, duration: 0.3 });
    }
  });

  return (
    <CookiesStatement ref={target}>
      <CustomText>
        I use Analytics Cookies to track the traffic on my website. I don't
        share this information with any compnany or person, it is for my own
        statistics purposes only. Of course, you can choose if you want to be
        included into this statistics or not.
      </CustomText>
      <ButtonPrimary
        color={theme.primary}
        content="Agree"
        margin=".9rem 1.4rem"
        onClick={() => hideStatement(true)}
      >
        <span>Agree</span>
      </ButtonPrimary>
      <ButtonPrimary
        content="Disagree"
        margin=".9rem 1.4rem"
        onClick={() => hideStatement(false)}
      >
        <span>Disagree</span>
      </ButtonPrimary>
    </CookiesStatement>
  );
}

export default withTheme(CookieStatementComponent);

const CookiesStatement = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 1.4rem 2.7rem;
  background-color: ${(p) => p.theme.greyPrimary};
  transform: translateY(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  visibility: hidden;
  opacity: 0;
  border: 3px solid ${(p) => p.theme.primary};
`;

const CustomText = styled.p<FlexibleComponentProps>`
  margin: ${(p) => (p.margin ? p.margin : "0")};
  font-size: 1.9rem;
  font-family: ${fonts.heading};
  font-weight: 300;
  color: ${(p) => (p.color ? p.color : p.theme.greySecondary)};
  line-height: 1.3;
  letter-spacing: 0.15rem;
  text-align: ${(p) => (p.align ? p.align : "center")};

  span {
    text-decoration: underline;
    color: ${(p) => p.theme.secondary};
    cursor: pointer;
  }
`;
