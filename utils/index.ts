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