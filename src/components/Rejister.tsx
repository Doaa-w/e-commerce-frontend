/* eslint-disable prettier/prettier */
import {useState ,ChangeEvent ,FormEvent} from "react";
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store';
import { addUser } from '../redux/slices/products/UserSlice';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import {Button} from "@mui/material";

const Rejister = () =>{

    const dispatch=useDispatch<AppDispatch>()
    const [user ,setUser]= useState({
      firstName :"",
      lastName:"",
      email :"",
      password:"",
      role:'visitor'
    })
    const handelChange = (event:ChangeEvent<HTMLInputElement>) =>{
      setUser((prevUser)=> {
        return {... prevUser ,[event.target.name]:event.target.value}
      })
    }

    const handelForm =(event:FormEvent)=>{
      event.preventDefault()
      const newUser={id:new Date().getTime(),... user}
       dispatch(addUser(newUser))
    }

 return (
   
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }} className='p-28'>
    <h1 className='mb-20'>Rejister</h1>
    <form onSubmit={handelForm}>
    <Input placeholder="first Name"  type='text' value={user.firstName} onChange={handelChange}/>
    <Input placeholder="last Name" type='text' value={user.lastName} onChange={handelChange}/>
    <Input placeholder="email"  type='email' value={user.email} onChange={handelChange} />
    <Input type='password' placeholder="password" value={user.password} onChange={handelChange} />
    <Input type='password' placeholder="confirm the password"  value={user.password} onChange={handelChange} />
    <Button type='submit' variant="contained" size="small" href='/login' >Rejister</Button>
    </form>
    </Box>

)
}
export default Rejister