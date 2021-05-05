import Header from '../header'
import Cart from './cart'

export default function CartPageComponent() {

  return (
    <>
      <Header title={`Shopping Cart`} body={`Good shoes take you to good places`} image={`/img/header-7.jpg`} />
      <Cart />
    </>
  )
}
