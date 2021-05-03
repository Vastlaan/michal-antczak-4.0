import Header from '../header'
import Product from '../product_main'
import Subscribe from '../subscribe'
import {ProductProps, CategoryProps} from '../../types'

interface ProductPageProps{
  products: ProductProps[];
  category: CategoryProps;
}

export default function ProductPage({products, category}:ProductPageProps){

  return (
    <>
      <Header title={category.displayName} body={``} image={category.image}/>
      <Product category={category.displayName} products={products} link='/' />
      <Subscribe/>
    </>
  )
}