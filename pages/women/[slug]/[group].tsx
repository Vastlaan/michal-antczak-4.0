import {useRouter} from 'next/router'
import Layout from '../../../layouts/main'
import Category from '../../../components/category_page'

import {categories} from '../../../database_development' // this will be passed as prop from CMS
import {products} from '../../../database_development'   // this will be passed as prop from CMS

export default function ProductPage({group}) {

  const router = useRouter()
  const {asPath} = router
  const tempArray = asPath.split('/')
  tempArray.pop()
  const path = tempArray.join('/')

  const targetProducts = products.filter(prod=>prod.group===group)
  const currentCategory = categories.find(cat=>cat.link===path)

  return (
    <Layout>
      <Category products={targetProducts} category={currentCategory} />
    </Layout>
  )
}

export async function getServerSideProps(ctx){
  const {params : {group} } = ctx

  return{
    props: {group}
  }

}
