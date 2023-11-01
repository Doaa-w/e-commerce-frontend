/* eslint-disable prettier/prettier */
import {useState ,ChangeEvent ,FormEvent} from "react";
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store';
import { addUser, fetchUsers } from '../redux/slices/products/UserSlice';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import {Button} from "@mui/material";
import Typography from '@mui/material/Typography';

const Register = () =>{

    const dispatch=useDispatch<AppDispatch>()
    const [user ,setUser]= useState({
      firstName :'',
      lastName:'',
      email :'',
      password:'',
      role:'visitor'
    })
    const handelChange = (event:ChangeEvent<HTMLInputElement>) =>{
       setUser((prevUser)=> {
        return { ...prevUser, [event.target.name]: event.target.value}
      })
    }

    const handelSubmit =(event:FormEvent)=>{
      event.preventDefault()
      const newUser={id:new Date().getTime(), ...user}
       dispatch(fetchUsers()).then(()=> dispatch(addUser(newUser)))
    }

 return (
  <div>
   
          <h1 className='mb-2'>Register</h1>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }} className='flex justify-center  p-12 m-7'>
    
    <form onSubmit={handelSubmit} >
    <Typography gutterBottom variant="h6" component="div">Please Provid :</Typography>
    <Input placeholder="first Name" type='text' name="firstName" value={user.firstName} onChange={handelChange} required={true} /><br/>
    {/* {error} */}
    <Input placeholder="last Name" type='text' name="lastName" value={user.lastName} onChange={handelChange} required /><br/>
    <Input placeholder="email"  type='email' name="email" value={user.email} onChange={handelChange} required /><br/>
    <Input type='password' placeholder="password" name="password" value={user.password} onChange={handelChange}  required /><br/>
    <Input type='password' placeholder="confirm the password" name="password" value={user.password} onChange={handelChange} required /><br/>
    <Button type='submit' variant="contained" size="small" >Register</Button>
    </form>
    </Box>
    </div>

)
}
export default Register