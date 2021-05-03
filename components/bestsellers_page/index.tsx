import Header from '../header'
import Products from '../products_all'
import Subscribe from '../subscribe'
import {BestsellersProps} from '../../types'

export default function BestsellersPage({products}:BestsellersProps){

  return (
    <>
      <Header title={`Bestsellers`} body={`The most popular shoes in our store`} image={`/img/header-1.jpg`}/>
      <Products category="Our top Products" products={products} link='/' />
      <Subscribe/>
    </>
  )
}
