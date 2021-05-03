import {Knex, knex} from 'knex'

const config: Knex.Config = {
  client: "pg",
  connection: process.env.DB_CONNECTION_STRING
}

const db = knex(config)

async function getCategories(){
  const categories = await db('categories')
  return categories
} 

async function getProducts(){
  const products = await db('products')
  return products
} 

export {
  getProducts,
  getCategories
}