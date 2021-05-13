import {ReactChildren, ReactChild, useEffect, useContext} from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import {Context} from '../store'
import CookiesStatement from '../components/modals/cookie_statement'
import {CategoryProps} from '../types'
import {retrieveCartFromLocalStorage} from '../utils'


interface LayoutProps{
  children: ReactChildren | ReactChild | ReactChild[] | ReactChildren[];
  categories: CategoryProps[]
}
export default function MainLayoutComponent({children, categories}: LayoutProps) {

  const { state, dispatch } = useContext(Context);

  useEffect(()=>{
      if(typeof window !== undefined){
          dispatch({type:'updateCart', cart: retrieveCartFromLocalStorage()})
      }
  },[])

  return (
    <>
      <Navigation categories={categories}/>
      <CookiesStatement/>
      {children}
      <Footer/>
    </>
  )
}
