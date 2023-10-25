/* eslint-disable prettier/prettier */

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUsers, login } from "../redux/slices/products/UserSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { Alert } from "@mui/material"



export const Login = ({pathName}:{pathName:string;}) =>{
const {users}=useSelector((state:RootState) => state.usersR)
const dispatch =useDispatch<AppDispatch> ();

useEffect(() => {
    dispatch(fetchUsers())
   },[dispatch]);

const navigate =useNavigate()
const [user ,setUser]= useState({
    email:'',
    password:''
})
const handelOnChange =(event:ChangeEvent<HTMLInputElement>) => {
    setUser((prevState)=>{
        return{...prevState, [event.target.name]:event.target.value}
     }) 
    }

const handelSubmit= async (event:FormEvent)=>{
    event.preventDefault()
    try{
        console.log(user)
        const foundUser= users.find((userData)=> userData.email===user.email)
        if(foundUser &&foundUser.password===user.password){
            dispatch(login(foundUser))
            navigate(pathName ? pathName : `/dashboard/${foundUser.role}`)
            {<Alert severity="success">you logged in!</Alert>}
        }else {
           {<Alert severity="error">email or password is wrong — try again!</Alert>}
        }
    } catch(error) {
        console.log(error)

    }
    setUser({
        email:'',
        password:''
    })
}
return(
    
    <div>
        <h1>login Page</h1>
        <form onSubmit={handelSubmit}> 
            <label htmlFor="email">email    </label>
            <input type="email"  name="email"  onChange={handelOnChange} /><br/>
            <label htmlFor="password">password</label>
            <input type="password"  name="password"  onChange={handelOnChange} /><br/>
            <button>log in</button>
        </form>  
    </div>

)

}
export default Login