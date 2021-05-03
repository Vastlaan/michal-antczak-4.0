import Header from './header'
import ProductsShort from '../products_short'
import Subscribe from '../subscribe'
import BackgroundVideo from '../video_background'
import Parallax from '../parallax'
import SocialMedia from '../social_media'
import {MdCall} from 'react-icons/md'

import {products} from '../../database_development'   // this will be passed as prop from CMS

export default function LandingPage(){

  const newProducts = products.filter(prod=>prod.isNew)
  const promotedProducts = products.filter(prod=>prod.isPromoted)

  return (
    <>
      <Header />
      <ProductsShort category='Bestsellers' products={promotedProducts} link='/bestsellers' />
      <Subscribe/>
      <BackgroundVideo heading='All you need is shoe' para='make shoe contact before eye contact'/>
      <ProductsShort category='New Collection' products={newProducts} link='/new'/>
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
