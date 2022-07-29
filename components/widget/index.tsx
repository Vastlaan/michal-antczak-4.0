import styled from "styled-components";
import Link from "next/link";
import { Heading3, TextLong, respond } from "../../styles";
import { IconType } from "react-icons";

interface IWidget {
  link: string;
  icon: IconType;
  title: string;
  ariaLabel?: string;
  text?: string;
  color?: string;
}

export default function Widget({
  link,
  color,
  icon,
  title,
  text,
  ariaLabel,
}: IWidget) {
  return (
    <Link href={link}>
      <StyledWidget color={color} aria-label={ariaLabel}>
        {icon({ fontSize: "3.7rem" })}
        <div>
          <Heading3 size="1.6rem">{title}</Heading3>
          <TextLong wide="50rem">{text || link}</TextLong>
        </div>
      </StyledWidget>
    </Link>
  );
}

const StyledWidget = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.9rem 1.4rem;
  border: 1px solid ${(p) => p.color || p.theme.white};
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  margin-bottom: 1.9rem;
  min-width: 35rem;

  ${respond("m", "min-width: 50rem;")}

  svg {
    margin-right: 1.9rem;
    color: ${(p) => p.color || p.theme.white};
  }
  p {
    color: ${(p) => p.color || p.theme.white};
  }
  h3 {
    color: ${(p) => p.color || p.theme.white};
  }
  div {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    background-color: ${(p) => p.color || p.theme.white};

    svg {
      color: ${(p) => p.theme.greyPrimary};
    }
    p {
      color: ${(p) => p.theme.greyPrimary};
    }
    h3 {
      color: ${(p) => p.theme.greyPrimary};
    }
  }
`;
