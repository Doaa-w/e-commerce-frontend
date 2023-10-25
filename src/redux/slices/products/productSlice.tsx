/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product, ProductState } from '../../../Types'
import api from '../../../api'


export const fetchProducts = createAsyncThunk('products/fetchProducts' , async () => {
const response = await api.get('/mock/e-commerce/products.json')
return response.data
})

// export const fetchProduct = createAsyncThunk('products/fetchProduct' , async () => {
//   const response = await api.get('/mock/e-commerce/products.json/${id}')
//   return response.data
//   })

const initialState: ProductState = {
  products: [],
  Product:[],
  error: null,
  isLoading: false,
  searchTerm: ' ',
  SingleProduct :{} as Product
}

export const productsReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    findProduct: (state,action)=>{
      const id = action.payload
      const foundProduct = state.products.find((product)=>product.id === id)
      if(foundProduct){
        state.SingleProduct = foundProduct
      }

    },

    searchProduct:(state , action) =>{
      state.searchTerm = action.payload
    },

    sortProducts :(state ,action)=>{
    const storingProduct=action.payload;
    if(storingProduct === 'price'){
       state.products.sort((a,b)=>a.price - b.price)
    } 
     if(storingProduct === 'name'){
      state.products.sort((a,b)=>a.name.localeCompare (b.name))
    } else if (storingProduct === 'price high'){
        state.products.sort((a,b)=>b.price - a.price)
      }
     } ,
     productsRequest: (state) => {
      state.isLoading = true
    },
    productsSuccess: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    addProduct: (state, action :{payload :{product: Product }}) => {
      // let's append the new product to the beginning of the array
      state.products = [action.payload.product, ...state.products]
    },
    removeProduct: (state, action:{payload :{productId:number}}) => {
      const filteredItems = state.products.filter((product) => product.id !== action.payload.productId)
      state.products = filteredItems
    }
    },

  extraReducers:(builder) => {
    builder
    .addCase(fetchProducts.pending,(state)=>{
      state.isLoading=true;
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.products = action.payload
      state.isLoading = false
      
    })
    .addCase(fetchProducts.rejected,(state)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
    }) 
    // .addCase(fetchProduct.pending,(state)=>{
    //   state.isLoading=true;
    // })
    // .addCase(fetchProduct.fulfilled,(state,action)=>{
    //   state.Product = action.payload
    //   state.isLoading = false
      
    // })
    // .addCase(fetchProduct.rejected,(state)=>{
    //   state.isLoading=false;
    //   state.error= "error we can not fech Data";
    // })
  }
  }

)
  
export const {productsRequest,productsSuccess,addProduct,removeProduct, searchProduct ,sortProducts , findProduct} = productsReducer.actions
export default productsReducer.reducer