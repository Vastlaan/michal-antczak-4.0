import React from 'react'
import {ProductProps} from '../types'

interface Payload {
  item: ProductProps;
  quantity: number
}
interface State{
  cart:  Payload[],
}
interface Action{
  type: string;
  payload?: ProductProps
}
type IContext = { state: State; dispatch?: React.Dispatch<Action>; }

export const initialState : State = {
  cart: []
}

export const reducer = (state : State, action: Action) : State =>{
  switch(action.type){
    case "addProductToCart":
      let flag = false
      
      state.cart.length > 0 && state.cart.map(item=>{
        if(item.item.id === action.payload.id){
          item.quantity += 1
          flag=true
        }
      })
      if(!flag){
        state.cart.push({item: action.payload, quantity: 1})
      }
      const newState = state
      return newState;
    
    case "removeItemFromCart":   
      const newCart = state.cart.filter(item=>item.item.id !== action.payload.id)
      return {...state, cart: newCart};
    default:
      return state
  }
}

export const Context = React.createContext<IContext>({state: initialState})
