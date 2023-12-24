/* eslint-disable prettier/prettier */
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Category, CategoryState } from '../../../Types'



export const fetchCategories = createAsyncThunk('categories/fetchCategories' , async () => {
    const response = await axios.get('http://localhost:5050/api/categories')
    return response.data.payload
    })

    export const deletecategory =  async (slug:string) => {
      const response = await axios.delete(`http://localhost:5050/api/categories/${slug}`)
      return response.data.payload
      }
      export const createCategories = createAsyncThunk('categories/createCategories' , async (name:string) => {
        const response = await axios.post('http://localhost:5050/api/categories',{name:name})
        return response.data.payload
        })
        export const updateCategories = async (slug:string ,categoryData:Partial<Category>) => {
          const response = await axios.put(`http://localhost:5050/api/categories/${slug}` ,{name:categoryData.name})
          return response.data.payload
          }
        
    const initialState :CategoryState = {
      categories: [],
      error: null,
      isLoading: false,
    }

 const CategoryReducer = createSlice({
  name:"categories",
  initialState,
  reducers: {
    // deleteCategory:(state , action) =>{
    //   const filterCategory =state.categories.filter((Category)=> Category._id !== action.payload)
    //   state.categories=filterCategory
    // },
    // addCategory: (state, action ) => {
    //   state.categories = [action.payload.category, ...state.categories] 
    //   },
   updateCategory:(state, action) =>{
    const {id , name }= action.payload
    const foundCategory =state.categories.find((Category) =>Category._id  ===id)
    if(foundCategory){
      foundCategory.name=name
    }
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
    .addCase(createCategories.fulfilled , (state , action)=>{
      console.log(action.payload.payload)
      state.categories.push(action.payload)
      
    })
    .addCase(fetchCategories.rejected , (state)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
    })}
    
});
export const {updateCategory} = CategoryReducer.actions
export default CategoryReducer.reducer;