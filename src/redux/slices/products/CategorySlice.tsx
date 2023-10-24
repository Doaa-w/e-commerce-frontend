/* eslint-disable prettier/prettier */
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../api'
import { CategoryState } from '../../../Types'



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
  reducers: {},
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

export default CategoryReducer.reducer;