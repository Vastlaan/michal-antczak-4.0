import Header from '../header'
import Products from '../products'
import Subscribe from '../subscribe'
import BackgroundVideo from '../video_background'

import {products} from '../../database_development'   // this will be passed as prop from CMS


export default function WomenPage(){

  const targetProducts = products.filter(prod=>prod.category.split('-')[0] === 'women')

  return (
    <>
      <Header title={`Ladies collection`} body={`Grand collection of women's shoes`} image={`/img/header-1.jpg`}/>
      <Products category="Women's shoes" products={targetProducts} link='/' />
      <Subscribe/>
    </>
  )
}
