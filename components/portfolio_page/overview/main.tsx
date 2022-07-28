import styled from "styled-components";
import { FlexibleComponentProps, IPortfolio } from "../../../types";
import { portfolio } from "./portfolio_data";
import Project from "./project";

export default function Main() {
  return (
    <Container>
      {portfolio.map((project: IPortfolio) => (
        <Project {...project} />
      ))}
    </Container>
  );
}

const Container = styled.div<FlexibleComponentProps>`
  padding: 1.4rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
