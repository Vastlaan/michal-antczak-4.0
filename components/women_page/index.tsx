import Header from '../header'
import Categories from '../categories'
import Products from '../products_all'
import Subscribe from '../subscribe'

export default function WomenPage({products, categories}){

  return (
    <>
      <Header title={`Ladies collection`} body={`Grand collection of women's shoes`} image={`/img/header-6.jpg`}/>
      <Categories categories={categories} />
      <Products category="Women's shoes" products={products} link='/' />
      <Subscribe/>
    </>
  )
}
