import Header from '../header'
import Products from '../products_all'
import Subscribe from '../subscribe'
import BackgroundVideo from '../video_background'

import {products} from '../../database_development'   // this will be passed as prop from CMS


export default function MenPage(){

  const targetProducts = products.filter(prod=>prod.isNew)

  return (
    <>
      <Header title={`New Collection`} body={`Our newest assortiment`} image={`/img/header-1.jpg`}/>
      <Products category="Brand new collection" products={targetProducts} link='/' />
      <BackgroundVideo heading='Take a shoe' para='amazing experience'/>
      <Subscribe/>
      
    </>
  )
}
