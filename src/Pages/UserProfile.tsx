/* eslint-disable prettier/prettier */
import {FormEvent,ChangeEvent, useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../redux/store';
import {  useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUser } from '../redux/slices/products/UserSlice';


import { Button, Container} from '@mui/material';
import Typography from '@mui/material/Typography';

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
            <h1  className= "flex justify-center"> This Is {`${userData?.firstName}`} page </h1>
            <Container maxWidth="sm">
        <div className= " p-4 m-12 bg-white shadow-lg">
        <Typography gutterBottom variant="h6" component="div">
                  Name : {`${userData?.firstName} ${userData?.lastName} `}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                  Email:  {`${userData?.email}` }
                  </Typography>
                   <Button variant="contained" onClick={handelFormOpen}>Edit</Button>
         </div>
          <div className='pb-4'>
             {isFormOpen && (
             <form onSubmit={handelSubmit} className= " m-12" >
              <input type='text' name='firstName' onChange={handelChange} value={user.firstName} className='mb-4'/><br/>
              <input type='text' name='lasttName' onChange={handelChange} value={user.lastName} className='mb-4'/><br/>
              <Button variant="contained" type='submit'>update the name</Button>
             </form> 
         )}
        </div > 
       </Container>
        
        </div>
    )
}
export default UserProfile