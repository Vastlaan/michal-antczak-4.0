import Layout from '../layouts/main'
import {removeProductById, getCategories} from '../database'
import { CategoryProps} from '../types'
import Payment from '../components/payment_page'


interface PaymentProps{
  session_id: string
  categories: CategoryProps[],
}

export default function PaymentPage({session_id, categories}:PaymentProps){

  

  return <Layout categories={categories}>
    <Payment session_id={session_id} />
  </Layout> 
}

export async function getServerSideProps({query}){

  const {session_id} = query

  const sessionDetailsJson = await fetch(`${process.env.HOST}/api/checkout_sessions/${session_id}`)
  const sessionDetails = await sessionDetailsJson.json()
  const categories = await getCategories()

  sessionDetails.line_items.data.map(item=>{
    
    const id = item.description
    const quantity = item.quantity
    console.log(id)

    removeProductById(id, quantity)
  })
  return{
    props:{
      session_id,
      categories,
    }
  }
}