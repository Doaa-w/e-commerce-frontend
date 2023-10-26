/* eslint-disable prettier/prettier */
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../api'
import {OrdersState } from '../../../Types'



export const fetchOrders = createAsyncThunk('orders/fetchOrders' , async () => {
    const response = await api.get('/mock/e-commerce/orders.json')
    return response.data
    })
    const initialState :OrdersState = {
      orders: [],
      error: null,
      isLoading: false,
    }

 const OrdersReducer = createSlice({
  name:"orders",
  initialState,
  reducers: {},
  extraReducers:(builder) =>{
    builder
    .addCase(fetchOrders.pending , (state)=>{
      state.isLoading=true;
    })
    .addCase(fetchOrders.fulfilled , (state , action)=>{
      state.orders = action.payload
      state.isLoading = false
      
    })
    .addCase(fetchOrders.rejected , (state)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
    })}
    
});
export default OrdersReducer.reducer;