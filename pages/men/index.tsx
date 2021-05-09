import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Men from '../../components/men_page'
import {CategoryPageProps} from '../../types'
import {getProducts, getCategories} from '../../database'

export default function MenPage({products, categories}:CategoryPageProps){
  return <Layout categories={categories}>
    <Head/>
    <Men products={products} categories={categories}/>
  </Layout> 
}
export async function getServerSideProps(){
  const products = await getProducts()
  const categories = await getCategories()

  const targetProducts = products.filter(prod=>prod.category.split('-')[0] === 'men')
  const targetCategories = categories.filter(cat=>cat.parent==='men')

  return{
    props:{
      products: targetProducts,
      categories: targetCategories
    }
  }
}