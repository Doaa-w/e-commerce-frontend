/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product, ProductState } from '../../../Types'
import axios from 'axios'


export const fetchProducts = createAsyncThunk('products/fetchProducts' , async () => {
const response = await axios.get('http://localhost:5050/api/products')
return response.data.payload
})

export const fetchSingleProducts =  createAsyncThunk ('products/fetchSingleProducts' ,
 async (_id:string | undefined ) => {
  const response = await axios.get(`http://localhost:5050/api/products/${_id}`)
  console.log(response)
  return response.data.payload
  })
  export const deleteProduct = createAsyncThunk('products/deleteProduct' , async (slug:string) => {
    const response = await axios.delete(`http://localhost:5050/api/products/${slug}`)
    return response.data.payload
    console.log(response.data)
    })
    export const createProduct =  createAsyncThunk ('products/createProduct' ,
    async (formData:FormData) => {
     const response = await axios.post('http://localhost:5050/api/products/',formData)
     console.log(response)
     console.log(formData)
     return response.data.payload
     })
const initialState: ProductState = {
  products: [],
  Product:[],
  error: null,
  isLoading: false,
  searchTerm: ' ',
  SingleProduct: {} as Product
}

export const productsReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // findProduct: (state , action)=>{
    //   const id = action.payload
    //   const foundProduct = state.products.find((product)=>product._id === id)
    //   if(foundProduct){
    //     state.SingleProduct = foundProduct
    //   }
    // },
    searchProduct:(state , action) =>{
      state.searchTerm = action.payload
    },

    sortProducts :(state ,action)=>{
    const storingProduct=action.payload;
    if(storingProduct === 'price'){
       state.products.sort((a,b)=>a.price - b.price)
    } 
     if(storingProduct === 'title'){
      state.products.sort((a,b)=>a.title.localeCompare (b.title))
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
    // addProduct: (state, action :{payload :{product: Product }}) => {
    //   // let's append the new product to the beginning of the array
    //   state.products = [action.payload.product, ...state.products]
    // },
    // removeProduct: (state, action:{payload :{productId:number}}) => {
    //   const filteredItems = state.products.filter((product) => Number(product._id) !== action.payload.productId)
    //   state.products = filteredItems
    // }
     },

  extraReducers:(builder) => {
    builder
    .addCase(fetchProducts.pending,(state)=>{
      state.isLoading=true;
    })
     .addCase(deleteProduct.fulfilled,(state , action)=>{
      state.isLoading=true;
      state.products=state.products.filter((product)=>product.slug !==action.payload)
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.products = action.payload
      console.log(action.payload)
      state.isLoading = false
      
    })
    .addCase(fetchProducts.rejected,(state)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
    }) 
    .addCase(fetchSingleProducts.fulfilled,(state,action)=>{
      state.SingleProduct = action.payload
    })
    .addCase(createProduct.fulfilled,(state,action)=>{
      state.products.push(action.payload)
      console.log(action.payload.message)
      
    })
    .addMatcher(
      (action)=>action.type.endsWith('/pending') ,
      (state)=> {
        state.isLoading = true
        state.error=null
      })
      .addMatcher(
        (action)=>action.type.endsWith('/rejected') ,
        (state , action)=> {
          state.isLoading = false,
          state.error=action.error.message || "some error accurd"
        }
    )
  }
  }

)
  
export const {productsRequest,productsSuccess,  searchProduct ,sortProducts } = productsReducer.actions
export default productsReducer.reducer
