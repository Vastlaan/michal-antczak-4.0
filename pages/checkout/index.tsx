import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Checkout from '../../components/checkout_page'
import {getCategories} from '../../database'
import {CategoryProps} from '../../types'

export interface CheckoutProps{

  categories?: CategoryProps[]
}
export default function CheckoutPage({categories,}:CheckoutProps){
  return <Layout categories={categories}>
    <Head/>
    <Checkout />
  </Layout> 
}
export async function getServerSideProps(){

  try{
    const categories = await getCategories()

    return{
      props:{
        categories,

      }
    }
  }
  catch(e){
    console.error(e)
    return{
      props:{
        categories:[],
      }
    }
  }

  
}