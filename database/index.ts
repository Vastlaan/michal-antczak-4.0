import {Knex, knex} from 'knex'
import {ProductProps} from '../types'

const config: Knex.Config = {
  client: "pg",
  connection: process.env.DB_CONNECTION_STRING
}

const db = knex(config)

async function getCategories(){
  try{
    const categories = await db('categories')
    return categories
  }catch(e){
    console.error(e)
    return []
  }
  
} 

async function getProducts(){
  try{
    const products = await db('products')
    return products
  }catch(e){
    console.error(e)
    return []
  }
  
} 

async function getProductById(id: number) {
  try{
    const product = await db('products').where({id})
    return {product}
  }
  catch(e){
    console.error(e)
    return {error: 'Database unavailable'}
  }
}

async function removeProductById(id: number, quantity: number){
  try{
    await db('products').where({id}).decrement('stock', quantity)
    return true
  }catch(e){
    console.error(e)
    return false
  }
}



export {
  getProducts,
  getProductById,
  getCategories,
  removeProductById
}