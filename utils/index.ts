import {ProductProps} from '../types'


export function checkViewportWidth(breakpoint:number){
  if(window){
    return window.innerWidth < breakpoint ? true : false
  }else{
    return true
  }
}

export function countFinalPriceOfSingleProduct(item:ProductProps){
  // with tax
  let price = item.price + (item.price * item.tax)
  // if discount, lower the price
  if(item.discount){
    price -= price * item.discount
  }
  return price.toFixed(2)
} 

export function buildUrlForGivenProduct(item:ProductProps){
  // build url path to specific product (group)
  const slugsArray = item.category.split('-')
  let url = '/'
  slugsArray.forEach(slug=>{
    url += `${slug}/`
  })
  url += item.productGroup
  return url
}

export function storeCartInLocalStorage(cart){
  window.localStorage.setItem('goldenshoecart', JSON.stringify(cart))
}
export function retrieveCartFromLocalStorage(){
  const cart = window.localStorage.getItem('goldenshoecart')
  return cart ? JSON.parse(cart) : []
}