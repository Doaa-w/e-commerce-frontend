/* eslint-disable prettier/prettier */
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../api'
import {  UsersState } from '../../../Types'




export const fetchUsers = createAsyncThunk('users/fetchCategories' , async () => {
    const response = await api.get('npm audit fix')
    return response.data
    })

    const data = localStorage.getItem('loginData') !== null ? 
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
    logout :(state , action)=>{
      state.isLoggedIn=false
      state.userData=action.payload
      localStorage.setItem('loginData', JSON.stringify({
        isLoggedIn : state.isLoggedIn ,
        userData:state.userData
      }))
    },
    deleteUser:(state , action) =>{
      const filterUsers =state.users.filter((user)=> user.id !== action.payload)
      state.users=filterUsers
    },
    addUser:(state , action) => {
      console.log(action.payload)
      state.users.push(action.payload)
      console.log(state.users)

    },
     updateUser:(state, action) =>{
      const {id , firstName ,lastName}= action.payload
      const foundUser =state.users.find((user) =>user.id  ===id)
      if(foundUser){
        foundUser.firstName =firstName
        foundUser.lastName=lastName
        state.userData=foundUser
        localStorage.setItem('loginData', JSON.stringify({
          isLoggedIn : state.isLoggedIn ,
          userData:state.userData
        }))

      }
     },

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
export const {login ,logout ,deleteUser ,addUser , updateUser}=UsersReducer.actions
export default UsersReducer.reducer