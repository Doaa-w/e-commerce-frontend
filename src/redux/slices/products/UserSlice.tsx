/* eslint-disable prettier/prettier */
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../api'
import {  UsersState } from '../../../Types'




export const fetchUsers = createAsyncThunk('users/fetchCategories' , async () => {
    const response = await api.get('/mock/e-commerce/users.json')
    return response.data
    })

    const data = localStorage.getItem('loginData') != null ? 
    JSON.parse(String(localStorage.getItem('loginData'))) :[]

    const initialState :UsersState = {
      users: [],
      error: null,
      isLoading: false,
      isLoggedIn:data.isLoggedIn,
      userData:data.userData ,
    }
 const UsersReducer = createSlice({
  name:"User",
  initialState,
  reducers: {
    login :(state,action)=>{
      state.isLoggedIn=true
      state.userData=action.payload
      localStorage.setItem('loginData', JSON.stringify({
        isLoggedIn : state.isLoggedIn ,
        userData:state.userData
      }))
    },
    logout :(state)=>{
      state.isLoggedIn=false
      state.userData=null
    }
  },
  extraReducers:(builder) =>{
    builder
    .addCase(fetchUsers.pending , (state)=>{
      state.isLoading=true;
    })
    .addCase(fetchUsers.fulfilled , (state , action)=>{
      state.users = action.payload
      state.isLoading = false
      
    })
    .addCase(fetchUsers.rejected , (state)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
    })}
    
});
export const {login ,logout}=UsersReducer.actions
export default UsersReducer.reducer