import Header from '../header'
import Products from '../products_all'
import Subscribe from '../subscribe'
import BackgroundVideo from '../video_background'

import {products} from '../../database_development'   // this will be passed as prop from CMS


export default function BestsellersPage(){

  const targetProducts = products.filter(prod=>prod.isPromoted)

  return (
    <>
      <Header title={`Bestsellers`} body={`The most popular shoes in our store`} image={`/img/header-1.jpg`}/>
      <Products category="Our top Products" products={targetProducts} link='/' />
      <Subscribe/>
    </>
  )
}
