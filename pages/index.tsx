import Layout from '../layouts/main'
import Landing from '../components/landing_page'
import {getProducts, getCategories} from '../database'
import {ProductProps, CategoryProps} from '../types'

interface LandingProps{
  products: ProductProps[]
  categories: CategoryProps[]
}

export default function LandingPage({products, categories}:LandingProps){

  return <Layout categories={categories}>
    <Landing products={products}/>
  </Layout> 
}

export async function getServerSideProps(){
  const products = await getProducts()
  const categories = await getCategories()

  return{
    props:{
      products,
      categories
    }
  }
}