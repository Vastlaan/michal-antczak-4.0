import Header from '../header'
import Products from '../products_all'
import Subscribe from '../subscribe'
import BackgroundVideo from '../video_background'
import {NewProps} from '../../types'

export default function NewPage({products}:NewProps){

  return (
    <>
      <Header title={`New Collection`} body={`Our newest assortiment`} image={`/img/header-1.jpg`}/>
      <Products category="Brand new collection" products={products} link='/' />
      <BackgroundVideo heading='Take a shoe' para='amazing experience'/>
      <Subscribe/>
      
    </>
  )
}
