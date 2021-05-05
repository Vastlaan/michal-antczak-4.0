import React from 'react'
import { State, Action, IContext} from '../types'

export const initialState : State = {
  cart: []
}

export const reducer = (state : State, action: Action) : State =>{
  switch(action.type){
    case "addProductToCart":
      let flag = false
      
      state.cart.length > 0 && state.cart.map(item=>{
        if(item.item.id === action.payload.id){
          if(item.quantity < 5){
            item.quantity += 1
          }
          flag=true
        }
      })
      if(!flag){
        state.cart.push({item: action.payload, quantity: 1})
      }

      return {...state};
    
    case "removeItemFromCart":   
      const newCart = state.cart.filter(item=>item.item.id !== action.payload.id)
      state.cart = newCart // mutate the current state for localStorage purposes
      return {...state};
    
    case "reduceAmountInCart":
      const reducedCart = state.cart.map(item=>{
        if(item.item.id===action.payload.id && item.quantity > 1){          
          item.quantity -=1;
        }
        return item
      })
      return {...state, cart: reducedCart};

    case "increaseAmountInCart":
      const increasedCart = state.cart.map(item=>{
        if(item.item.id===action.payload.id  && item.quantity < 5){
          item.quantity +=1;
        }
        return item
      })
      return {...state, cart: increasedCart};
    
    case "updateCart":
      state.cart = action.cart
      return {...state, cart: action.cart}
    default:
      return state
  }
}

export const Context = React.createContext<IContext>({state: initialState})
