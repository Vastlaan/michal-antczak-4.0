import Header from '../header'
import Categories from '../categories'
import Products from '../products_all'
import Subscribe from '../subscribe'
import {CategoryPageProps} from '../../types'


export default function KidsPage({categories, products}: CategoryPageProps){

  return (
    <>
      <Header title={`Kids' collection`} body={`Amazing and modern designed shoes for children`} image={`/img/header-4.jpg`}/>
      <Categories categories={categories} />
      <Products category="Kids' shoes" products={products} link='/' />
      <Subscribe/>
    </>
  )
}
