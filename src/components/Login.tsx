/* eslint-disable prettier/prettier */

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "../redux/store"
import {  userLogIn } from "../redux/slices/products/UserSlice"

import { Button, Container, Input } from "@mui/material"
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'



export const Login = ({pathName= ''}:{pathName:string;}) =>{
const {userData}=useSelector((state:RootState) => state.usersR)
const dispatch =useDispatch<AppDispatch> ();
const navigate =useNavigate()
const [user ,setUser]= useState({
    email:'',
    password:''
})

const handelOnChange =(event:ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser)=>{
        return{...prevUser, [event.target.name]:event.target.value}
     }) 
    }
useEffect(() => {
    if(userData){
        navigate(pathName? pathName: `/dashboard/${userData && userData?.isAdmin ? 'Admin': 'User'}`)
    }
   },[userData ,navigate ,pathName]);

const handelSubmit= async (event:FormEvent)=>{
    event.preventDefault()
    try {
      dispatch(userLogIn(user))
    console.log(userData)
    } catch (error) {
       console.log(error) 
    }
    
   
}
const notify=()=>{
    toast.success("You have successflly Logged In ,Welcome Back ")   
  }
return(
    
    
    <div className="   p-10">

        <form onSubmit={handelSubmit} className="flex p-4 justify-center ">
        <Container maxWidth="sm" className="mb-10"> 
            <Input placeholder="email"  type='email' name="email" onChange={handelOnChange} required className="mb-12"/><br/>
            <Input type='password' placeholder="password" name="password"  onChange={handelOnChange}  required className="mb-12"/><br/>
            <Button type="submit" variant="contained" size="small" onClick={notify}>Log In</Button>
                 </Container>
        </form>  
        <ToastContainer position="top-right"/>
    </div>
)

}
export default Login