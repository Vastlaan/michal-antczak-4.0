import {useRouter} from 'next/router'
import Layout from '../../../layouts/main'
import Product from '../../../components/product_page'
import ProductsShort from '../../../components/products_short'
import {GroupPageProps} from '../../../types'
import {getProducts, getCategories} from '../../../database'

export default function ProductPage({group, products, categories}: GroupPageProps) {

  const router = useRouter()
  const {asPath} = router
  const tempArray = asPath.split('/')
  tempArray.pop()
  const path = tempArray.join('/')

  const targetProducts = products.filter(prod=>prod.productGroup===group)
  const currentCategory = categories.find(cat=>cat.link===path)

  const promotedProducts = products.filter(prod=>prod.isPromoted)

  return (
    <Layout categories={categories}>
      <Product products={targetProducts} category={currentCategory} />
      <ProductsShort category='Bestsellers' products={promotedProducts} link='/bestsellers' /> 
    </Layout>
  )
}

export async function getServerSideProps(ctx){
  const {params : {group} } = ctx
  const products = await getProducts()
  const categories = await getCategories()

  return{
    props: {group, products, categories}
  }

}
