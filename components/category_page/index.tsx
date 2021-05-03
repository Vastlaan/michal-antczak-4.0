import Header from '../header'
import Products from '../products_all'
import Subscribe from '../subscribe'
import Parallax from '../parallax'
import SocialMedia from '../social_media'
import {MdCall} from 'react-icons/md'
import {ProductProps, CategoryProps} from '../../types'

interface CategoryPageProps{
  products: ProductProps[];
  category: CategoryProps;
}

export default function CategoryPage({products, category}:CategoryPageProps){

  return (
    <>
      <Header title={category.displayName} body={``} image={category.image}/>
      <Products category={category.displayName} products={products} link='/' />
      <Subscribe/>
      <Parallax 
        title='Customer Service' 
        body='Just in case you face a problem, we are here to help you. You can call us from Monday till Friday between 9AM and 5PM' 
        link='tel:0031682307051' 
        btn='+31 682 30 70 51'
        icon={<MdCall/>}
        image='/img/customer-service.jpg'
      />
      <SocialMedia/>
    </>
  )
}
