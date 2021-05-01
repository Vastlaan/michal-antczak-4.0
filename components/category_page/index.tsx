import Header from '../header'
import Products from '../products'
import Subscribe from '../subscribe'
import {ProductProps, CategoryProps} from '../../types'

interface CategoryPageProps{
  products: ProductProps[];
  category: CategoryProps;
}

export default function CategoryPage({products, category}:CategoryPageProps){

  return (
    <>
      <Header title={category.displayName} body={`Grand collection of men's shoes`} image={`/img/header-1.jpg`}/>
      <Products category={category.displayName} products={products} link='/' />
      <Subscribe/>
    </>
  )
}
