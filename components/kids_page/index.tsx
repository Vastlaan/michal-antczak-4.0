import Header from '../header'
import Products from '../products'
import Subscribe from '../subscribe'
import BackgroundVideo from '../video_background'

import {products} from '../../database_development'   // this will be passed as prop from CMS


export default function MenPage(){

  const targetProducts = products.filter(prod=>prod.category.split('-')[0] === 'men')

  return (
    <>
      <Header title={`Kids' collection`} body={`Amazing and modern designed shoes for children`} image={`/img/header-1.jpg`}/>
      <Products category="Kids' shoes" products={targetProducts} link='/' />
      <Subscribe/>
    </>
  )
}
