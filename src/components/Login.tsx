/* eslint-disable prettier/prettier */

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "../redux/store"
import { fetchUsers, userLogIn } from "../redux/slices/products/UserSlice"

import { Alert, Button, Container, Input } from "@mui/material"


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
        navigate(pathName? pathName: `/dashboard/${userData?.isAdmin ? 'Admin': 'User'}`)
    }
   },[userData ,navigate ,pathName]);

const handelSubmit= async (event:FormEvent)=>{
    event.preventDefault()
    try {
      dispatch(userLogIn(user))
    console.log(userData)
    console.log(userLogIn(user))  
    } catch (error) {
       console.log(error) 
    }
    

    // const [emailError ,setEmailNamError]=useState('')
    // const [passwoedError ,setPasswordNamError]=useState('')

    // if(user.email.length<2){
    //     setEmailNamError('E-mail must be more that 6 characTers')
    //     return
    //   }
    //   if(user.password.length <4){
    //     setPasswordNamError('Password must be more that 4 characTers')
    //     return
    //   }
   
}
return(
    
    
    <div className="   p-10">

        <form onSubmit={handelSubmit} className="flex p-4 justify-center ">
        <Container maxWidth="sm" className="mb-10"> 
            <Input placeholder="email"  type='email' name="email" onChange={handelOnChange} required className="mb-12"/><br/>
            {/* <p className="text-red-500">{emailError}</p> */}
            <Input type='password' placeholder="password" name="password"  onChange={handelOnChange}  required className="mb-12"/><br/>
            {/* <p className="text-red-500">{passwoedError}</p> */}
            <Button type="submit" variant="contained" size="small" >Log In</Button>
                 </Container>
        </form>  
    </div>
)

}
export default Login