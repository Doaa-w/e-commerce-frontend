/* eslint-disable prettier/prettier */

import { createSlice } from "@reduxjs/toolkit"
import { cartState } from "../../../Types"

const data =localStorage.getItem('cart') !== null? 
JSON.parse(String(localStorage.getItem('cart'))):[]


const initialState :cartState ={
    cartItems:data
}
const cartReducer = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            state.cartItems.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
        },
        removeFromCart:(state ,action) =>{
            state.cartItems=state.cartItems.filter((cartItem) => cartItem._id !== action.payload)
            localStorage.setItem('cart' , JSON.stringify(state.cartItems))
        },
        removeAllCart:(state)=>{
            state.cartItems=[]
            localStorage.removeItem('cart')
        }
    },
})
export const{ addToCart , removeFromCart, removeAllCart}=cartReducer.actions
export default cartReducer.reducer