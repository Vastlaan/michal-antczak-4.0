import Header from '../header'
import Categories from '../categories'
import Products from '../products_all'
import Subscribe from '../subscribe'

import {categories} from '../../database_development' // this will be passed as prop from CMS
import {products} from '../../database_development'   // this will be passed as prop from CMS


export default function WomenPage(){

  const targetProducts = products.filter(prod=>prod.category.split('-')[0] === 'women')
  const targetCategories = categories.filter(cat=>cat.parent==='women')

  return (
    <>
      <Header title={`Ladies collection`} body={`Grand collection of women's shoes`} image={`/img/header-6.jpg`}/>
      <Categories categories={targetCategories} />
      <Products category="Women's shoes" products={targetProducts} link='/' />
      <Subscribe/>
    </>
  )
}
