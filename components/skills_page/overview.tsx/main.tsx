import { useContext } from "react";
import styled, { withTheme } from "styled-components";
import { Heading1, Text, FlexRow, Line, respond } from "../../../styles";
import { FlexibleComponentProps, ISkills } from "../../../types";
import { Context } from "../../../store";
import { skills } from "./skills_data";

function Main({ theme }) {
  const {
    state: { activeSkills },
  } = useContext(Context);

  function getColor(skill: string) {
    const mappedColors = {
      all: theme.secondary,
      frontend: theme.primary,
      backend: theme.green,
      devops: theme.greyTertiary,
      serverless: theme.gold,
    };
    return mappedColors[skill];
  }
  return (
    <Container color={getColor(activeSkills)}>
      {skills
        .filter((skill) => skill.categories.includes(activeSkills))
        .sort((a, b) => {
          if (a.title.toLocaleUpperCase() < b.title.toLocaleUpperCase()) {
            return -1;
          }
          if (a.title.toLocaleUpperCase() > b.title.toLocaleUpperCase()) {
            return 1;
          }
          return 0;
        })
        .map(({ title, description, color, icon }: ISkills) => {
          return (
            <Skill color={color} key={title}>
              <FlexRow margin="0 0 1.4rem 0" justify="flex-start">
                {icon({ color, fontSize: "3.3rem" })}
                <Heading1 color={color} margin="0 0 0 1.4rem">
                  {title}
                </Heading1>
              </FlexRow>
              <Line color={color} />
              <Text color={theme.greySecondary} margin="2.2rem 0 0 0">
                {description}
              </Text>
            </Skill>
          );
        })}
    </Container>
  );
}
export default withTheme(Main);

const Container = styled.div<FlexibleComponentProps>`
  padding: 2.7rem 1.4rem 1.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: none;
  width: 100%;

  ${(p) =>
    respond(
      "m",
      `flex-direction: row; flex-wrap: wrap; align-items: stretch; border-left: 5px solid ${
        p.color || p.theme.greySecondary
      };`
    )}
`;

const Skill = styled.div<FlexibleComponentProps>`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  border: 1px solid ${(p) => p.color};
  position: relative;
  max-width: 30rem;
  margin: 0 1.4rem 1.4rem 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2.2rem;
    height: 2.2rem;
    clip-path: polygon(0 0, 0 100%, 100% 0);
    background-color: ${(p) => p.color};
  }
`;
