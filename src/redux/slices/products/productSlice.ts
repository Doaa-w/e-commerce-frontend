/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'
import { ProductState, Product } from '../../../Types'
import api from '../../../api'


export const products = await api.get('/mock/e-commerce/products.json')
// At this point we have the data so let's update the store


const initialState: ProductState = {
  items: [],
  error: null,
  isLoading: false,
  searchTerm: ' ',
  SingleProduct :null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    searchProduct:(state , action) =>{
      state.searchTerm = action.payload
    },
 

    sortProducts :(state ,action)=>{
    const storingProduct=action.payload;
    if(storingProduct === 'id'){
      state.items.sort((a,b)=>a.id - b.id)
    }

    else if(storingProduct === 'name'){
      state.items.sort((a,b)=>a.name.localeCompare (b.name))
    } 
  },
    // extraReducers:(builder) =>{
    //   builder
    //   .addCase(fetchCompanies.pending , (state)=>{
    //     state.isLoading=true;
    //   })
    productsRequest: (state) => {
      state.isLoading = true
    },
    productsSuccess: (state, action) => {
      state.isLoading = false
      state.items = action.payload
    },
    addProduct: (state, action: { payload: { product: Product } }) => {
      // let's append the new product to the beginning of the array
      state.items = [action.payload.product, ...state.items]
    },
    removeProduct: (state, action: { payload: { productId: number } }) => {
      const filteredItems = state.items.filter((product) => product.id !== action.payload.productId)
      state.items = filteredItems
    }
  },
})

export const { removeProduct, addProduct, productsRequest, productsSuccess , searchProduct ,sortProducts} = userSlice.actions
export default userSlice.reducer
