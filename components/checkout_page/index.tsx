import Header from '../header'
import Process from './process'
import {CheckoutProps} from '../../types'

export default function CheckoutPageComponent() {
  return (
    <>
      <Header title={`Checkout process`} body={`Invest in yourself`} image={`/img/header-8.jpg`}/>
      <Process/>
    </>
  )
}
