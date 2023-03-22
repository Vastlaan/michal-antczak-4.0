import { DefaultTheme } from "styled-components";
import { StaticImageData } from "next/image";
import { MutableRefObject } from "react";
import { IconType } from "react-icons";

export interface ColorSizeProps extends FlexibleComponentProps {
  highlight?: boolean;
}
export interface ThemeProps extends DefaultTheme {
  theme: {
    primary?: string;
    primaryLight?: string;
    primaryDark?: string;
    secondary?: string;
    grey1?: string;
    grey2?: string;
    grey3?: string;
    grey4?: string;
    grey5?: string;
    black?: string;
    white?: string;
    greyPrimary?: string;
    greyTertiary?: string;
    greyDark?: string;
    greySecondary?: string;
    grey?: string;
    gold?: "#c98702";
    green?: "#005609";
  };
  color?: string;
}
export interface FlexibleComponentProps {
  padding?: string;
  margin?: string;
  color?: string;
  wide?: string;
  align?: string;
  size?: string;
  justify?: string;
  background?: string;
  url?: string;
  minHeight?: string;
  wrap?: string;
  top?: string;
  highlight?: boolean;
  content?: string;
  autoAlpha?: number;
  ref?: MutableRefObject<any>;
  isActive?: boolean;
}

export interface Payload {
  isNavMenuOpen?: boolean;
  activeSkills?: "all" | "frontend" | "backend" | "devops" | "serverless";
  activeCertificate?: false | StaticImageData;
  isAnalyticsAgreed?: boolean;
}
export interface State {
  isNavMenuOpen: boolean;
  activeSkills: "all" | "frontend" | "backend" | "devops" | "serverless";
  activeCertificate: false | StaticImageData;
  isAnalyticsAgreed: boolean;
}
export interface Action {
  type: string;
  payload?: Payload;
}
export type IContext = { state: State; dispatch?: React.Dispatch<Action> };

export interface ErrorObject {
  field?: string;
  message?: string;
}

export interface ISkills {
  icon: IconType;
  title: string;
  description: string;
  color: string;
  categories: string[];
}

export interface IPortfolio {
  title: string;
  image: StaticImageData;
  year: string;
  techStack: string[];
  description: string;
  urlWebsite: string;
  urlGithub?: string;
}
export interface ICertificate {
  title: string;
  image: StaticImageData;
  year: string;
  issuedBy: string;
  url?: string;
}

export interface StrapiTimestamps {
  updated_at: string;
  published_at: string;
  created_at: string;
}

export interface Categories extends StrapiTimestamps {
  id: number;
  name: string;
}

export interface Post extends StrapiTimestamps {
  id: number;
  title: string;
  image: string | null;
  date: string;
  categories: Categories[];
  content: string;
  time: string;
}
