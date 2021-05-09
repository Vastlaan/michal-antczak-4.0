import { useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import gsap from "gsap";
import { fonts} from "../../styles";
import {FlexibleComponentProps} from '../../types'

export default function CookieStatementComponent() {
    const target = useRef();

    function hideStatement() {
        window.localStorage.setItem("customitemname", JSON.stringify({cookies_accepted: true}));
        gsap.to(target.current, { autoAlpha: 0, y: "100%" });
    }

    useEffect(() => {
        const isAgreed = JSON.parse(window.localStorage.getItem(
            "customitemname"
        ));

        if (!isAgreed) {
            gsap.to(target.current, { autoAlpha: 1, y: 0, duration: 0.3 });
        }
    });

    return (
        <CookiesStatement ref={target}>
            <CustomText>
                We use cookies! To give you the best possible experience on our website, we use techniques such as cookies.{" "}
                <Link href="/cookies">
                    <span>Read more</span>
                </Link>{" "}
                about what are cookies and how we use them on our website.
            </CustomText>
            <ButtonSmall
                margin=".9rem 1.4rem"
                onClick={hideStatement}
            >
                Agree
            </ButtonSmall>
        </CookiesStatement>
    );
}

const CookiesStatement = styled.section`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding: 1.4rem 2.7rem;
    background-color: ${(p) => p.theme.grey5};
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
    color: ${(p) => (p.color ? p.color : p.theme.grey1)};
    line-height: 1.3;
    letter-spacing: 0.15rem;
    text-align: ${(p) => (p.align ? p.align : "center")};

    span {
        text-decoration: underline;
        color: ${(p) => p.theme.secondary};
        cursor: pointer;
    }
`;

const ButtonSmall = styled.button<FlexibleComponentProps>`
    margin: ${(p)=>p.margin?p.margin: '1.4rem'};
    padding: 0.6rem 0.9rem;
    background-color: ${(p) => p.theme.secondary};
    border: 1px solid ${(p) => p.theme.secondary};
    font-family: ${fonts.heading};
    font-weight: 600;
    color: ${(p) => (p.color ? p.color : p.theme.grey5)};
    letter-spacing: 0.15rem;
`;