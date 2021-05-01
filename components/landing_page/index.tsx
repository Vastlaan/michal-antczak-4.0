import Header from './header'
import ProductsShort from '../products_short'
import Subscribe from '../subscribe'
import BackgroundVideo from '../video_background'

import {products} from '../../database_development'   // this will be passed as prop from CMS

export default function LandingPage(){

  const newProducts = products.filter(prod=>prod.isNew)
  const promotedProducts = products.filter(prod=>prod.isPromoted)

  return (
    <>
      <Header />
      <ProductsShort category='Bestsellers' products={promotedProducts} link='/bestsellers' />
      <Subscribe/>
      <BackgroundVideo heading='Take a shoe' para='amazing experience'/>
      <ProductsShort category='New Collection' products={newProducts} link='/new'/>
    </>
  )
}
