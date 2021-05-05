import Layout from '../../layouts/main'
import Bestsellers from '../../components/bestsellers_page'
import {getProducts, getCategories} from '../../database'
import {BestsellersProps} from '../../types'

export default function BestsellersPage({products, categories}:BestsellersProps){
  return <Layout categories={categories}>
    <Bestsellers products={products}/>
  </Layout> 
}

export async function getServerSideProps(){
  const products = await getProducts()
  const categories = await getCategories()
  const targetProducts = products.filter(prod=>prod.isPromoted)

  return{
    props:{
      products:targetProducts,
      categories
    }
  }
}