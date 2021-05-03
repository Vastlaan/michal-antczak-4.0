import Header from '../header'
import Categories from '../categories'
import Products from '../products_all'
import Subscribe from '../subscribe'
import {CategoryPageProps} from '../../types'

export default function MenPage({products, categories}: CategoryPageProps){

  return (
    <>
      <Header title={`Men's collection`} body={`Grand collection of men's shoes`} image={`/img/header-5.jpg`}/>
      <Categories categories={categories} />
      <Products category="Men's shoes" products={products} link='/' />
      <Subscribe/>
    </>
  )
}
