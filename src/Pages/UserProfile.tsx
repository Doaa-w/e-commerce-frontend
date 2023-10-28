/* eslint-disable prettier/prettier */
import {FormEvent,ChangeEvent, useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../redux/store';
import {  useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUser } from '../redux/slices/products/UserSlice';

import UserSideBar from '../components/UserSideBar';

import { Button, Toolbar } from '@mui/material';

const UserProfile = ()=>{
 const {userData}= useSelector((state:RootState) =>
    state.usersR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchUsers())
    },[dispatch]); 

    const [isFormOpen,setIsFormOpen]=useState(false)
    const [user ,setUser] = useState ({
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        //  onChange={handelChange} 
        })


    const handelFormOpen=()=>{
        setIsFormOpen(!isFormOpen)
    }

    const handelChange =(event:ChangeEvent<HTMLInputElement>) => {
        setUser((prevUser)=>{
            return{...prevUser, [event.target.name]:event.target.value}
         }) 
        }
        const handelSubmit= async (event:FormEvent)=>{
            event.preventDefault() 
            const undateUserDate ={id: userData?.id, ...user}
            dispatch(updateUser(undateUserDate))

        }

    return(
        <div>
            <h1  className= "flex justify-center"> this is {`${userData?.firstName}`} page </h1>
        <div className= "  m-12">
        <p> name : {`${userData?.firstName} ${userData?.lastName} `}</p><br/>
        <p> email: {`${userData?.email}`}</p><br/>
        <Button onClick={handelFormOpen}>Edit</Button>
         </div>
        {isFormOpen && (
          <form onSubmit={handelSubmit} className= " flex m-12" >
        <input type='text' name='firstName' onChange={handelChange} value={user.firstName}/>
        <input type='text' name='lasttName' onChange={handelChange} value={user.lastName} />
        <Button type='submit'>update the name</Button>
        </form>  
        )}
        

        <Toolbar>
        <UserSideBar />
        </Toolbar>
        
        </div>
    )
}
export default UserProfile