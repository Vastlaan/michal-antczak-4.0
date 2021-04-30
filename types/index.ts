import {  DefaultTheme } from 'styled-components'

export interface ProductProps{
   id: number;
  category: string;
  group: string;        // actual product's family includes all variations of colors and sizes
  displayName: string;  // usually the same as group
  price: number;
  color: string;        // hex value
  size: string;
  image: string;
  stock: number;
  isPromoted: boolean;
}

export interface ThemeProps extends DefaultTheme {
  theme: {
    primary?: string,
    primaryLight?:string;
    primaryDark?:string;
    secondary?: string,
    grey1?: string,
    grey2?: string,
    grey3?: string,
    grey4?: string,
    grey5?: string,
    black?: string,
    white?: string
  }
  color?:string
}
export interface FlexibleComponentProps{
  padding?: string;
  margin?: string;
  color?:string;
  wide?: string;
  align?: string;
  size?: string;
  justify?: string;
  background?: string;
  url?: string;
  minHeight?:string;
  wrap?:string;
  top?:string
}