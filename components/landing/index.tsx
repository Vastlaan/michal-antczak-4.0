import Header from './header'
import ProductsShort from '../products_short'
import Subscribe from '../subscribe'
import BackgroundVideo from '../video_background'

export default function LandingPage(){
  return (
    <>
      <Header />
      <ProductsShort category='Bestsellers' />
      <Subscribe/>
      <BackgroundVideo heading='Take a shoe' para='amazing experience'/>
      <ProductsShort category='New Collection' />
    </>
  )
}
