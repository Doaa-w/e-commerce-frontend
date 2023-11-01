/* eslint-disable prettier/prettier */
import {useState ,ChangeEvent ,FormEvent, useEffect} from "react";
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store';
import { addUser, fetchUsers } from '../redux/slices/products/UserSlice';

import Input from '@mui/material/Input';
import { Button} from "@mui/material";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const navigate =useNavigate()
    const dispatch=useDispatch<AppDispatch>()
    const [user ,setUser]= useState({
      firstName :'',
      lastName:'',
      email :'',
      password:'',
      role:'visitor'
    })

    // useEffect(()=>{
    //   dispatch(fetchUsers())
    // },[])
 
    const handelChange = (event:ChangeEvent<HTMLInputElement>) =>{
       setUser((prevUser)=> {
        return { ...prevUser, [event.target.name]: event.target.value}
      }) 
      console.log(user)
    }
    const [firstNamError ,setFirstNamError]=useState('')
    const [lastNamError ,setLastNamError]=useState('')
    const [emailError ,setEmailNamError]=useState('')
    const [passwoedError ,setPasswordNamError]=useState('')
    const handelSubmit =(event:FormEvent)=>{
      event.preventDefault()
      const newUser={id:new Date().getTime(), ...user}

      if(user.firstName.length <2){
        setFirstNamError('First Name must be more that 5 characyers')
        return
      }
      if(user.lastName.length <2){
         setLastNamError('Last Name must be more that 5 characyers')
        return
      }
      if(user.email.length <9){
        setEmailNamError('Email must be more that 9 characyers')
        return
      }
      if(user.password.length <4){
        setPasswordNamError('Password must be more that 4 characyers')
        return
      }

       dispatch(fetchUsers()).then(()=> dispatch(addUser(newUser))) 
       console.log(newUser)
       console.log('new user' , user)
       navigate('/login')
    }
  
 return (
  <div>
   
          
    <div className='flex justify-center '>
          
     <form className=' p-12 'onSubmit={handelSubmit} >
    <Typography gutterBottom variant="h3" component="div" className="mb-10">Please Provid :</Typography>
    <Input placeholder="first Name" type='text' name="firstName" value={user.firstName} onChange={handelChange} required className="mb-4" />
    <p className="text-red-500">{firstNamError}</p>
    <Input placeholder="last Name" type='text' name="lastName" value={user.lastName} onChange={handelChange} required className="mb-4" />
    <p className="text-red-500">{lastNamError}</p>
    <Input placeholder="email"  type='email' name="email" value={user.email} onChange={handelChange} required className="mb-4" />
    <p className="text-red-500">{emailError}</p>
    <Input type='password' placeholder="password" name="password" value={user.password} onChange={handelChange}  required className="mb-4"  />
    <p className="text-red-500">{passwoedError}</p>

    <Button type='submit' variant="contained" size="small"  >Register</Button>
   
    </form>
    </div>
    </div>

)
}
export default Register