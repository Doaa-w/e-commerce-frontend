/* eslint-disable prettier/prettier */
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../api'
import { Category, CategoryState } from '../../../Types'



export const fetchCategories = createAsyncThunk('categories/fetchCategories' , async () => {
    const response = await api.get('/mock/e-commerce/categories.json')
    return response.data
    })
    
    const initialState :CategoryState = {
      categories: [],
      error: null,
      isLoading: false,
    }

 const CategoryReducer = createSlice({
  name:"categories",
  initialState,
  reducers: {
    deleteCategory:(state , action) =>{
      const filterCategory =state.categories.filter((Category)=> Category.id !== action.payload)
      state.categories=filterCategory
    },
    addCategory: (state, action :{payload :{category:Category }}) => {
      // let's append the new product to the beginning of the array
      state.categories = [action.payload.category, ...state.categories] 
      }
  },
  extraReducers:(builder) =>{
    builder
    .addCase(fetchCategories.pending , (state)=>{
      state.isLoading=true;
    })
    .addCase(fetchCategories.fulfilled , (state , action)=>{
      state.categories = action.payload
      state.isLoading = false
      
    })
    .addCase(fetchCategories.rejected , (state)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
    })}
    
});
export const {deleteCategory ,addCategory} = CategoryReducer.actions
export default CategoryReducer.reducer;