import Header from '../header'
import Categories from '../categories'
import Products from '../products_all'
import Subscribe from '../subscribe'

import {categories} from '../../database_development' // this will be passed as prop from CMS
import {products} from '../../database_development'   // this will be passed as prop from CMS


export default function MenPage(){

  const targetProducts = products.filter(prod=>prod.category.split('-')[0] === 'men')
  const targetCategories = categories.filter(cat=>cat.parent==='men')

  return (
    <>
      <Header title={`Men's collection`} body={`Grand collection of men's shoes`} image={`/img/header-1.jpg`}/>
      <Categories categories={targetCategories} />
      <Products category="Men's shoes" products={targetProducts} link='/' />
      <Subscribe/>
    </>
  )
}
