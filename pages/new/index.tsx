import Layout from '../../layouts/main'
import New from '../../components/new_page'
import {getProducts, getCategories} from '../../database'
import {NewProps} from '../../types'

export default function NewPage({products, categories}:NewProps){
  return <Layout categories={categories}>
    <New products={products}/>
  </Layout> 
}

export async function getServerSideProps(){
  const products = await getProducts()
  const categories = await getCategories()
  const targetProducts = products.filter(prod=>prod.isNew)

  return{
    props:{
      products:targetProducts,
      categories
    }
  }
}