/* eslint-disable prettier/prettier */

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "../redux/store"
import { fetchUsers, login } from "../redux/slices/products/UserSlice"

import { Alert, Button, Container, Input } from "@mui/material"


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
    setUser((prevUser)=>{
        return{...prevUser, [event.target.name]:event.target.value}
     }) 
    }
    const [emailError ,setEmailNamError]=useState('')
    const [passwoedError ,setPasswordNamError]=useState('')

const handelSubmit= async (event:FormEvent)=>{
    event.preventDefault()
    // if(user.email.length<2){
    //     setEmailNamError('E-mail must be more that 6 characTers')
    //     return
    //   }
    //   if(user.password.length <4){
    //     setPasswordNamError('Password must be more that 4 characTers')
    //     return
    //   }

    try{
     
        const foundUser= users.find((userData)=> userData.email===user.email)
        if(foundUser &&foundUser.password===user.password){
            dispatch(login(foundUser))
            navigate(pathName ? pathName : `/dashboard/${foundUser.isAdmin}`)
             
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
    
    
    <div className="   p-10">

        <form onSubmit={handelSubmit} className="flex p-4 justify-center ">
        <Container maxWidth="sm" className="mb-10"> 
            <Input placeholder="email"  type='email' name="email" onChange={handelOnChange} required className="mb-12"/><br/>
            <p className="text-red-500">{emailError}</p>
            <Input type='password' placeholder="password" name="password"  onChange={handelOnChange}  required className="mb-12"/><br/>
            <p className="text-red-500">{passwoedError}</p>
            <Button type="submit" variant="contained" size="small"  onClick={() => {
              <Alert severity="success">you logged in!</Alert>;
                 }}>Log In</Button>
                 </Container>
        </form>  
    </div>
)

}
export default Login