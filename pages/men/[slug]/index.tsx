import {useRouter} from 'next/router'
import Layout from '../../../layouts/main'
import Category from '../../../components/category_page'

import {categories} from '../../../database_development' // this will be passed as prop from CMS
import {products} from '../../../database_development'   // this will be passed as prop from CMS

export default function CategoryPage({slug}) {

  const router = useRouter()
  const {asPath} = router

  const targetProducts = products.filter(prod=>prod.category.split('-')[0] === 'men' && prod.category.split('-')[1] === slug)
  const currentCategory = categories.find(cat=>cat.link===asPath)

  return (
    <Layout>
      <Category products={targetProducts} category={currentCategory} />
    </Layout>
  )
}

export async function getServerSideProps(ctx){
  const {params : {slug} } = ctx

  return{
    props: {slug}
  }

}