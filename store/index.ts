import React from "react";
import { State, Action, IContext } from "../types";

export const initialState: State = {
  isNavMenuOpen: false,
  activeSkills: "all",
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "toggleNavMenu":
      state.isNavMenuOpen = action?.payload?.isNavMenuOpen;
      return { ...state };
    case "setActiveSkills":
      state.activeSkills = action.payload.activeSkills;
      return { ...state };

    default:
      return state;
  }
};

export const Context = React.createContext<IContext>({ state: initialState });
