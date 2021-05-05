import Layout from '../../layouts/main'
import Cart from '../../components/cart_page'
import {getCategories} from '../../database'
import {CategoryProps} from '../../types'

export interface CartProps{
  categories?: CategoryProps[]
}
export default function CartPage({categories}:CartProps){
  return <Layout categories={categories}>
    <Cart />
  </Layout> 
}
export async function getServerSideProps(){

  const categories = await getCategories()
  return{
    props:{
      categories
    }
  }
}