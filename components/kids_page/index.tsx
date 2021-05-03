import Header from '../header'
import Categories from '../categories'
import Products from '../products_all'
import Subscribe from '../subscribe'

import {categories} from '../../database_development' // this will be passed as prop from CMS
import {products} from '../../database_development'   // this will be passed as prop from CMS


export default function MenPage(){

  const targetProducts = products.filter(prod=>prod.category.split('-')[0] === 'kids')
  const targetCategories = categories.filter(cat=>cat.parent==='kids')

  return (
    <>
      <Header title={`Kids' collection`} body={`Amazing and modern designed shoes for children`} image={`/img/header-4.jpg`}/>
      <Categories categories={targetCategories} />
      <Products category="Kids' shoes" products={targetProducts} link='/' />
      <Subscribe/>
    </>
  )
}
