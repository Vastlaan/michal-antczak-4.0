import Layout from '../../layouts/main'
import Head from '../../components/seo'
import {getCategories} from '../../database'
import {CategoryProps} from '../../types'

export interface ContactProps{
  categories?: CategoryProps[]
}
export default function MenPage({categories}:ContactProps){
  return <Layout categories={categories}>
    <Head/>
    Contact Page
  </Layout> 
}
export async function getServerSideProps(){

  const categories = await getCategories()
  return{
    props:{
      categories
    }
  }
}