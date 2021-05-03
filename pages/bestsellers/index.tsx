import Layout from '../../layouts/main'
import Bestsellers from '../../components/bestsellers_page'
import {getProducts} from '../../database'
import {BestsellersProps} from '../../types'

export default function BestsellersPage({products}:BestsellersProps){
  return <Layout>
    <Bestsellers products={products}/>
  </Layout> 
}

export async function getServerSideProps(){
  const products = await getProducts()
  const targetProducts = products.filter(prod=>prod.isPromoted)

  return{
    props:{
      products:targetProducts
    }
  }
}