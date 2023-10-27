/* eslint-disable prettier/prettier */
import { Button, Toolbar } from '@mui/material';
import UserSideBar from '../components/UserSideBar';
import { AppDispatch, RootState } from '../redux/store';
import {  useDispatch, useSelector } from 'react-redux';
import {FormEvent,ChangeEvent, useEffect } from 'react';
import { fetchUsers } from '../redux/slices/products/UserSlice';


const UserProfile = ()=>{
 const {userData}= useSelector((state:RootState) =>
    state.usersR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchUsers())
    },[dispatch]); 

    const handelChange =(event:ChangeEvent<HTMLInputElement>) => {
        // setUser((prevState)=>{
        //     return{...prevState, [event.target.name]:event.target.value}
        //  }) 
        }
        const handelSubmit= async (event:FormEvent)=>{
            event.preventDefault() 

        }

    return(
        <div>
            <h1  className= "flex justify-center"> this is {`${userData?.firstName}`} page </h1>
        <div className= "  justify-center items-center m-12">
        <p> name : {`${userData?.firstName} ${userData?.lastName} `}</p><br/>
        <p> email: {`${userData?.email}`}</p><br/>
        <Button>Edit</Button>
        <form onSubmit={handelSubmit} >
        <input type='text' name='firstName' onChange={handelChange}/><br/>
        <input type='text' />
        <Button type='submit'>update the name</Button>
        </form>

        <Toolbar>
        <UserSideBar />
        </Toolbar>
        </div>
        </div>
    )
}
export default UserProfile