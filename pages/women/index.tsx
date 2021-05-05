import Layout from '../../layouts/main'
import Women from '../../components/women_page'
import {CategoryPageProps} from '../../types'
import {getProducts, getCategories} from '../../database'

export default function WomenPage({products, categories}:CategoryPageProps){
  return <Layout categories={categories}>
    <Women products={products} categories={categories}/>
  </Layout> 
}
export async function getServerSideProps(){
  const products = await getProducts()
  const categories = await getCategories()

  const targetProducts = products.filter(prod=>prod.category.split('-')[0] === 'women')
  const targetCategories = categories.filter(cat=>cat.parent==='women')

  return{
    props:{
      products: targetProducts,
      categories: targetCategories
    }
  }
}