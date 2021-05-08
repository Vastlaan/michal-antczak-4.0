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

  try{
    const sessionDetailsJson = await fetch(`${process.env.HOST}/api/checkout_sessions/${session_id}`)
    const sessionDetails = await sessionDetailsJson.json()
    const categories = await getCategories()

    if(sessionDetails.line_item){
      sessionDetails.line_items.data.map(item=>{
      
        const id = item.description
        const quantity = item.quantity

        id && removeProductById(id, quantity)
      })
    }
    return{
      props:{
        session_id,
        categories,
      }
    }
  }catch(e){
    console.log(e)
    return{
      props:{
        session_id: null,
        categories: [],
      }
    }
  }

  
}