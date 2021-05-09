import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Cart from '../../components/cart_page'
import {getCategories} from '../../database'
import {CategoryProps} from '../../types'

export interface CartProps{
  categories?: CategoryProps[]
}
export default function CartPage({categories}:CartProps){
  return <Layout categories={categories}>
    <Head/>
    <Cart />
  </Layout> 
}
export async function getServerSideProps(){

  try{
    const categories = await getCategories()
    return{
      props:{
        categories
      }
    }
  }
  catch(e){
    console.error(e)
    return{
      props:{
        products:[],
        categories: []
      }
    }
  }
  
}