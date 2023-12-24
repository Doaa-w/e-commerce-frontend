/* eslint-disable prettier/prettier */
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {  User, UsersState } from '../../../Types'


export const fetchUsers = createAsyncThunk('users/fetchUsers' , async () => {
    const response = await axios.get('http://localhost:5050/api/Users')
    // console.log(response.data.payload.users)
    return response.data.payload
    })

    export const deleteUsers =  async (_id:string) => {
      const response = await axios.delete(`http://localhost:5050/api/Users/${_id}`)
      return response.data.payload
      }
      export const updateTheUser =  async ( slug:string ,userData:Partial<User>) => {
        const response = await axios.put(`http://localhost:5050/api/Users/${ slug}`,{first_name: userData.first_name})
        return response.data.payload
        }
      export const registeredUser= async (user:object)=>{
        const response = await axios.post('http://localhost:5050/api/users/register',user)
        console.log('reducer', registeredUser)
        console.log(response.data)
        console.log(Error)
        return response.data.payload
      }
      export const userLogIn = createAsyncThunk('users/userLogIn' , async (user:object) => {
        const response = await axios.post('http://localhost:5050/api/auth/login',user)
        return response.data.payload
        console.log(response.data)
        })
        export const userLogOut = createAsyncThunk('users/userLogOut' , async () => {
          const response = await axios.post('http://localhost:5050/api/auth/logout')
          return response.data.payload
          console.log(response.data)
          })

          export const grantRole = createAsyncThunk('users/grantRole' , async (id:string) => {
            const response = await axios.put(`http://localhost:5050/api/users/role/${id}`)
            return id
            console.log(response.data.payload)
            
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
    // login :(state,action)=>{
    //   state.isLoggedIn=true
    //   state.userData=action.payload
    //   localStorage.setItem('loginData', JSON.stringify({
    //     isLoggedIn : state.isLoggedIn ,
    //     userData:state.userData
    //   }))
    // },
    // logout :(state , action)=>{
    //   state.isLoggedIn=false
    //   state.userData=action.payload
    //   localStorage.setItem('loginData', JSON.stringify({
    //     isLoggedIn : state.isLoggedIn ,
    //     userData:state.userData
    //   }))
    // },
    // deleteUser:(state , action) =>{
    //   const filterUsers =state.users.filter((user)=> user._id !== action.payload)
    //   state.users=filterUsers
    // },
    // addUser:(state , action) => {
    //   console.log(action.payload)
    //   state.users.push(action.payload)
    //   console.log(state.users)

    // },
    //  updateUser:(state, action) =>{
    //   const {id , firstName ,lastName}= action.payload
    //   const foundUser =state.users.find((user) =>user._id  ===id)
    //   if(foundUser){
    //     foundUser.first_name =firstName
    //     foundUser.last_name=lastName
    //     state.userData=foundUser
    //     localStorage.setItem('loginData', JSON.stringify({
    //       isLoggedIn : state.isLoggedIn ,
    //       userData:state.userData
    //     }))

    //   }
    //  },

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
    })
    .addCase(userLogIn.fulfilled , (state , action )=>{
        state.isLoggedIn=true
      state.userData=action.payload
      localStorage.setItem('loginData', JSON.stringify({
        isLoggedIn : state.isLoggedIn ,
        userData:state.userData
      })
      )

    })
    .addCase(userLogOut.fulfilled , (state )=>{
    state.isLoggedIn=false
    state.userData = null
    localStorage.setItem('loginData', JSON.stringify({
      isLoggedIn : state.isLoggedIn ,
      userData:state.userData
    }))

   })
   .addCase(grantRole.fulfilled,(state,action)=>{
    const foundUser=state.users.find((user)=> user._id==action.payload)
    if(foundUser){
      foundUser.isAdmin= true
    }
    state.isLoading=false
   })
  } 
});
// export const { addUser , updateUser}=UsersReducer.actions
export default UsersReducer.reducer