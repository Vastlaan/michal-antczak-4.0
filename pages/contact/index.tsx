import Layout from '../../layouts/main'
import {getCategories} from '../../database'
import {CategoryProps} from '../../types'

export interface ContactProps{
  categories?: CategoryProps[]
}
export default function MenPage({categories}:ContactProps){
  return <Layout categories={categories}>
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