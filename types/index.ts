import {  DefaultTheme } from 'styled-components'

export interface ProductProps{
  id: string;
  category: string;
  productGroup: string;        // actual product's family includes all variations of colors and sizes
  displayName: string;  // usually the same as group
  description: string;
  price: number;
  color: string;        // hex value
  size: string;
  image: string;
  stock: number;
  tax: number;
  reviews: {review: string, rate: number}[];
  isPromoted: boolean;
  isNew: boolean;
  discount: number | null;     // for example 0.2  === 20%

}

export interface CategoryProps{
  id: string;
  type: string;
  parent: string | null;
  displayName: string;
  link: string;
  image: string | null;
}
export interface NavigationProps{
  categories?: CategoryProps[]
}
export interface CategoryPageProps{
  categories: CategoryProps[];
  products: ProductProps[]
}
export interface GroupPageProps{
  categories: CategoryProps[];
  products: ProductProps[];
  group: string;
}
export interface SlugPageProps{
  categories: CategoryProps[];
  products: ProductProps[];
  slug: string;
}
export interface BestsellersProps{
  products: ProductProps[]
  categories?: CategoryProps[]
}
export interface NewProps{
  products: ProductProps[]
  categories?: CategoryProps[]
}
export interface ColorSizeProps extends FlexibleComponentProps{
  highlight?:boolean
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

export interface Payload {
  item: ProductProps;
  quantity: number
}
export interface State{
  cart:  Payload[],
}
export interface Action{
  type: string;
  payload?: ProductProps
  cart?: Payload[]
}
export type IContext = { state: State; dispatch?: React.Dispatch<Action>; }