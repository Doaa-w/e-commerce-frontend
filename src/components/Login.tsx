/* eslint-disable prettier/prettier */

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "../redux/store"
import { fetchUsers, login } from "../redux/slices/products/UserSlice"

import { Alert, Button } from "@mui/material"


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
    
    
    <div className="  flex  justify-center m-12 p-20">
        <h1 className="  mb-16">login Page</h1>
        <form onSubmit={handelSubmit} className=" flex p-12 items-center"> 
            <label htmlFor="email">email :</label>
            <input type="email"  name="email"  onChange={handelOnChange} /><br/>
            <label htmlFor="password">password :</label>
            <input type="password"  name="password"  onChange={handelOnChange} /><br/>
            <Button type="submit" variant="contained" size="small"  onClick={() => {
               <Alert severity="success">you logged in!</Alert>;
  }}>Log In</Button>
        </form>  
    </div>
)

}
export default Login