/* eslint-disable prettier/prettier */
import {FormEvent,ChangeEvent, useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../redux/store';
import {  useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateTheUser } from '../redux/slices/products/UserSlice';


import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { AccountCircleOutlined } from '@mui/icons-material';

const UserProfile = ()=>{
 const {userData}= useSelector((state:RootState) =>
    state.usersR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchUsers())
    },[dispatch]); 

    const [isFormOpen,setIsFormOpen]=useState(false)
    const [user ,setUser] = useState ({
        first_name: userData?.first_name
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
            // const updateUserDate ={slug: userData?.slug, ...user} 
            // await dispatch(updateTheUser(user))
        }

    return(
        <div className='h-full'>
        <div className= " p-4 m-12 bg-white shadow-lg h-full ">
           <AccountCircleOutlined color='primary' sx={{fontSize:120}}/>
           <div className='flex flex-col'> 
        <Typography gutterBottom variant="h6" component="div">
                  Name : {`${userData?.first_name}  ${userData?.last_name} `}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                  Email:  {`${userData?.email}` }
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                  Phone Number:  {`${userData?.phone}` }
                  </Typography>
                   </div> 
         <Button variant="contained" onClick={handelFormOpen}>Edit</Button>
          <div className='pb-4'>
             {isFormOpen && (
             <form onSubmit={handelSubmit} className= " m-12" >
              <input type='text' name='first_name' onChange={handelChange} value={user.first_name} className='mb-4'/><br/>
              <Button variant="contained" type='submit'>update the name</Button>
             </form>
              )}
              </div> 
        </div > 
     </div>
    )
}
export default UserProfile