import { useRef } from "react";
import styled, { ThemeProviderProps, withTheme } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FaCalendar, FaChevronRight } from "react-icons/fa";
import { respond, Heading4, Text, ButtonPrimary } from "../../../styles";
import { IPortfolio } from "../../../types";
import useAnimation from "../../../hooks/useAnimation";

function Project({
  title,
  year,
  image,
  techStack,
  description,
  urlWebsite,
  theme,
}: IPortfolio & ThemeProviderProps<any>) {
  const refObject = useRef();
  useAnimation({ type: "slideUp", refObject });
  return (
    <Link href={urlWebsite}>
      <Container
        ref={refObject}
        role="button"
        aria-label={`link to website: ${title}`}
      >
        <HeadingWrapper>
          <Heading4 wide="65rem">{title}</Heading4>
          <Calendar>
            <FaCalendar fontSize="1.6rem" color={theme.greySecondary} />
            <Text color={theme.greySecondary}>{year}</Text>
          </Calendar>
        </HeadingWrapper>
        <MainWrapper>
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
          <Details>
            <Heading4 margin="0 0 1.4rem 0">Tech Specification:</Heading4>
            <ul>
              {techStack.map((tech, i) => (
                <li key={i}>
                  <FaChevronRight color={theme.secondary} />
                  {tech}
                </li>
              ))}
            </ul>
            <Heading4 margin="0 0 1.4rem 0">Description:</Heading4>
            <Text margin="0 0 1.4rem 0 ">{description}</Text>
            <ButtonWrapper>
              <ButtonPrimary content="Visit Website">
                <span>Visit Website</span>
              </ButtonPrimary>
            </ButtonWrapper>
          </Details>
        </MainWrapper>
      </Container>
    </Link>
  );
}
export default withTheme(Project);

const Container = styled.article`
  padding: 1.4rem;
  background-color: #333;
  margin: 2.7rem 0;
  transition: all 0.3s;
  cursor: pointer;

  ${respond("m", " padding: 1.4rem 2.7rem;")}

  &:hover {
    background-color: #444;
  }
`;
const HeadingWrapper = styled.div`
  padding: 0.4rem;
  border-bottom: 1px solid ${(p) => p.theme.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-right: 1.4rem;
  }
`;
const Calendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 8rem;
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.4rem 0;

  ${respond("m", "flex-direction: row;align-items: stretch;")}
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;

  ${respond("m", "margin-right: 2.7rem; max-width: 50%;")}
`;

const Details = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;

  ${respond("m", "margin-top: 0;max-width: 50%;")}

  h6 {
    margin-bottom: 1.4rem;
  }
  ul {
    list-style: none;
    margin-bottom: 1.4rem;

    li {
      margin-bottom: 0.9rem;

      font-size: 1.4rem;
      text-transform: uppercase;
      color: ${(p) => p.theme.greyTertiary};

      svg {
        margin-right: 1.4rem;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  margin: 2.7rem 0 0 0;

  ${respond("m", "margin: auto 0 0 0;")}
`;
