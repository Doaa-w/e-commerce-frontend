/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import {  deleteUsers, fetchUsers } from "../redux/slices/products/UserSlice";
import AdminSideBar from "./AdminSideBar";

import { Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const UserOrders = () => {

    const {users, isLoading ,error}= useSelector((state:RootState) =>
    state.usersR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchUsers())
    },[dispatch]); 
   
    const handelDelete= async (_id:string)=>{
        try {
          const respones = await deleteUsers(_id)
          dispatch(fetchUsers())
        } catch (error) {
          console.log(error)
        }
    }
   
    if(isLoading){
     return <p> loading the Users  ..</p>
     }
    if (error){
     return <p>{error}</p>
    }
    return (

         <div >
              <AdminSideBar/>
            <h1  className="flex  justify-center mt-4 mb-4">All The users</h1>
            
            <div className="usersContainer mb-4 ">

            <TableContainer component={Paper}>
      <Table sx={{minWidth: 200 }} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell  align="center"> user name </TableCell>
            <TableCell align="center" > user email </TableCell>
            <TableCell align="center" > user role </TableCell>
            <TableCell align="center" >  </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>

                {users.length >0 && users.map((user)=>(
                     <TableRow
                     key={user._id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                   >       
              <TableCell align="center">{user.first_name} </TableCell>
              <TableCell align="center"> {user.email}</TableCell>
              <TableCell align="center"> Visitor</TableCell>
                 <TableCell>  <Button variant="contained" size="small" color="error" 
                        onClick={()=> handelDelete(user._id)} >Remove User</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
       </TableContainer>
       </div>
         </div>
  
          
    )
}

    
    export default UserOrders