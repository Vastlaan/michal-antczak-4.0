import Header from '../header'
import Cart from './cart'

export default function CartPageComponent() {

  return (
    <>
      <Header title={`Shopping Cart`} body={`What you are about to buy`} image={`/img/header-1.jpg`} />
      <Cart />
    </>
  )
}
