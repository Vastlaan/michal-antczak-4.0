import {useRouter} from 'next/router'
import Layout from '../../../layouts/main'
import Category from '../../../components/category_page'
import {SlugPageProps} from '../../../types'
import {getProducts, getCategories} from '../../../database'

export default function CategoryPage({slug, products, categories}:SlugPageProps) {

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

  const products = await getProducts()
  const categories = await getCategories()

  return{
    props: {slug, products, categories}
  }

}