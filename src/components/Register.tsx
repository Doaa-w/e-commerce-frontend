/* eslint-disable prettier/prettier */
import {useState ,ChangeEvent ,FormEvent} from "react";
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store';
import { registeredUser } from '../redux/slices/products/UserSlice';

import Input from '@mui/material/Input';
import { Button} from "@mui/material";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const Register = () =>{
    const navigate =useNavigate()
    const dispatch=useDispatch<AppDispatch>()
    const [user ,setUser]= useState({
      _id:'',
      first_name :'',
      last_name :'',
      email :'',
      password:'',
      phone:'',
      address :'',
    })

 console.log(user)
    const handelChange = (event:ChangeEvent<HTMLInputElement>) =>{
       setUser((prevUser)=> {
        return { ...prevUser, [event.target.name]: event.target.value}
      }) 
    }
    const [first_nameError ,setFirst_nameError]=useState('')
    const [last_nameError ,setLast_nameError]=useState('')
    const [emailError ,setEmailNamError]=useState('')
    const [passwoedError ,setPasswordNamError]=useState('')
    const [phoneError ,setPhoneError]=useState('')
    const [addressError ,setAddressError]=useState('')

    const handelSubmit =  (event:FormEvent)=>{
      event.preventDefault()
          

      if(user.first_name.length <2){
        setFirst_nameError('First Name must be more that 5 characters')
        return
      }
      if(user.last_name.length <2){
        setLast_nameError('Last Name must be more that 5 characters')
        return
      }
      if(user.email.length <7){
        setEmailNamError('Email must be more that 7 characters')
        return
      }
      if(user.password.length <4){
        setPasswordNamError('Password must be more that 4 characters')
        return
      }
      if(user.address.length <5){
        setAddressError('adress must be more that 5 characters')
        return
      }
      if(user.phone.length <6){
        setPhoneError('phone number must be more that 6 characters')
        return
      }
      registeredUser(user)
     console.log(user)
    //  
       navigate('/login')
    }
  const notify=()=>{
    toast.success(" Check your email to activate your account")   
  }
  
 return (
  <div>
   
          
    <div className='flex justify-center '>
          
     <form className=' p-12  'onSubmit={handelSubmit} >
    <Typography gutterBottom variant="h4" component="div" className="mb-10 text-blue-600 ">Please Provid :</Typography>
    <Input placeholder="first Name" type='text' name="first_name" value={user.first_name} onChange={handelChange} required className="mb-4" />
    <p className="text-red-500">{first_nameError}</p>
    <Input placeholder="last Name" type='text' name="last_name" value={user.last_name} onChange={handelChange} required className="mb-4" />
    <p className="text-red-500">{last_nameError}</p>
    <Input placeholder="email"  type='email' name="email" value={user.email} onChange={handelChange} required className="mb-4" />
    <p className="text-red-500">{emailError}</p>
    <Input type='password' placeholder="password" name="password" value={user.password} onChange={handelChange}  required className="mb-4"  />
    <p className="text-red-500">{passwoedError}</p>
    <Input type='number' placeholder="address" name="address" value={user.address} onChange={handelChange}  required className="mb-4"  />
    <p className="text-red-500">{addressError}</p>
    <Input type='number' placeholder="phone" name="phone" value={user.phone} onChange={handelChange}  required className="mb-4"  />
    <p className="text-red-500">{phoneError}</p>

    <Button type='submit' variant="contained" size="small" onClick={notify}  >Register </Button> 
   
    </form>
    </div>
    <ToastContainer position="top-right"/>
    </div>

)
}
export default Register