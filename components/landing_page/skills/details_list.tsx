import styled, { withTheme } from "styled-components";
import { FaDocker, FaReact, FaNpm, FaGitAlt, FaAws } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  Heading3,
  SpanBlue,
  SpanColor,
  SpanRed,
  Text,
  Text2,
} from "../../../styles";

function DetailsList({ theme }) {
  return (
    <List>
      <li>
        <FaReact color={theme.primary} /> Frontend Development Tools
      </li>
      <li>
        <FaNpm color={theme.green} /> Backend Development Tools
      </li>
      <li>
        <FaDocker color={theme.primary} /> DevOps and Infrastructure
      </li>
      <li>
        <FaAws color={theme.gold} /> Serverless Architecture Model
      </li>
      <li>
        <FaGitAlt color={theme.greyPrimary} /> Version Control Systems
      </li>
      <li>
        <FiFigma color={theme.secondary} /> Design Tools
      </li>
    </List>
  );
}
export default withTheme(DetailsList);

const List = styled.ul`
  list-style: none;
  margin-bottom: 2.7rem;
  flex: 1;

  li {
    font-size: 1.9rem;
    margin: 2rem 0;
    display: flex;
    align-items: center;

    svg {
      font-size: 2.7rem;
      margin-right: 1.4rem;
      margin-left: 0.4rem;
    }
  }
`;
