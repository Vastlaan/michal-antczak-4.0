import {ReactChildren, ReactChild} from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import CookiesStatement from '../components/modals/cookie_statement'
import {CategoryProps} from '../types'


interface LayoutProps{
  children: ReactChildren | ReactChild | ReactChild[] | ReactChildren[];
  categories: CategoryProps[]
}
export default function MainLayoutComponent({children, categories}: LayoutProps) {
  return (
    <>
      <Navigation categories={categories}/>
      <CookiesStatement/>
      {children}
      <Footer/>
    </>
  )
}
