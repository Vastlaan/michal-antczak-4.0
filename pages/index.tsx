import Layout from '../layouts/main'
import Landing from '../components/landing_page'
import {getProducts} from '../database'
import {ProductProps} from '../types'

interface LandingProps{
  products: ProductProps[]
}

export default function LandingPage({products}:LandingProps){

  return <Layout>
    <Landing products={products}/>
  </Layout> 
}

export async function getServerSideProps(){
  const products = await getProducts()

  return{
    props:{
      products
    }
  }
}