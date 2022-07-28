import { useContext, useRef, createRef } from "react";
import styled, { withTheme } from "styled-components";
import useAnimation from "../../../hooks/useAnimation";
import { ButtonFull } from "../../../styles";
import { Context } from "../../../store";

function ControlButtons({ theme }) {
  const { state, dispatch } = useContext(Context);
  return (
    <Container>
      <ButtonFull
        onClick={() =>
          dispatch({
            type: "setActiveSkills",
            payload: { activeSkills: "all" },
          })
        }
        isActive={state.activeSkills === "all"}
        color={theme.secondary}
      >
        All
      </ButtonFull>
      <ButtonFull
        onClick={() =>
          dispatch({
            type: "setActiveSkills",
            payload: { activeSkills: "frontend" },
          })
        }
        isActive={state.activeSkills === "frontend"}
        color={theme.primary}
      >
        Frontend
      </ButtonFull>
      <ButtonFull
        onClick={() =>
          dispatch({
            type: "setActiveSkills",
            payload: { activeSkills: "backend" },
          })
        }
        isActive={state.activeSkills === "backend"}
        color={theme.green}
      >
        Backend
      </ButtonFull>
      <ButtonFull
        onClick={() =>
          dispatch({
            type: "setActiveSkills",
            payload: { activeSkills: "devops" },
          })
        }
        isActive={state.activeSkills === "devops"}
        color={theme.greyTertiary}
      >
        DevOps
      </ButtonFull>
      <ButtonFull
        onClick={() =>
          dispatch({
            type: "setActiveSkills",
            payload: { activeSkills: "serverless" },
          })
        }
        isActive={state.activeSkills === "serverless"}
        color={theme.gold}
      >
        Serverless
      </ButtonFull>
    </Container>
  );
}
export default withTheme(ControlButtons);

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
`;
