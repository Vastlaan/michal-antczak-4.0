import Layout from '../../layouts/main'
import New from '../../components/new_page'
import {getProducts} from '../../database'
import {NewProps} from '../../types'

export default function NewPage({products}:NewProps){
  return <Layout>
    <New products={products}/>
  </Layout> 
}

export async function getServerSideProps(){
  const products = await getProducts()
  const targetProducts = products.filter(prod=>prod.isNew)

  return{
    props:{
      products:targetProducts
    }
  }
}