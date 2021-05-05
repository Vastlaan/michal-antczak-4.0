import Layout from '../../layouts/main'
import Kids from '../../components/kids_page'
import {getProducts, getCategories} from '../../database'
import {CategoryPageProps} from '../../types'

export default function KidsPage({products,categories}:CategoryPageProps){
  return <Layout categories={categories}>
    <Kids products={products} categories={categories}/>
  </Layout> 
}

export async function getServerSideProps(){
  const products = await getProducts()
  const categories = await getCategories()

  const targetProducts = products.filter(prod=>prod.category.split('-')[0] === 'kids')
  const targetCategories = categories.filter(cat=>cat.parent==='kids')

  return{
    props:{
      products: targetProducts,
      categories: targetCategories
    }
  }
}