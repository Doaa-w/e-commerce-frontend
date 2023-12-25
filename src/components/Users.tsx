/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import {  deleteUsers, fetchUsers, grantRole } from "../redux/slices/products/UserSlice";
import AdminSideBar from "./AdminSideBar"; 

import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import { Button, InputLabel } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const UserOrders = () => {

    const {users }= useSelector((state:RootState) =>
    state.usersR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchUsers())
    },[dispatch]); 
   
    const handelDelete= async (_id:string)=>{
        try {
          const respones = await deleteUsers(_id)
          toast.info("You have successflly deleted a User ")
          dispatch(fetchUsers())
        } catch (error) {
          console.log(error)
        }
    }
   const handelAdmin = async(_id:string | undefined)=>{
    if(_id){
      dispatch(grantRole(_id))
    toast.warn("You Gave Administration To A User ") 
    }
   }
   
    return (

         <div className="flex flex-wrap">
              <AdminSideBar/>
            <div className="usersContainer pl-20 ml-20 mb-20 mt-8 flex flex-wrap  w-3/4">

            <TableContainer component={Paper}>
      <Table sx={{minWidth: 200 }} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell  align="center"> User Name </TableCell>
            <TableCell align="center" > User E-mail </TableCell>
            <TableCell align="left" > User Role </TableCell>
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
              <TableCell align="center"> 
              <InputLabel variant="standard" htmlFor="user-role">
              <TableCell align="center"> <Button variant="outlined" size="small" 
                           onClick={()=> handelAdmin(user._id)}>Make As Admin &#11088; </Button></TableCell>
            </InputLabel>
            </TableCell>
                 <TableCell>
                         <TableCell align="center"> <Button variant="outlined" size="small" startIcon={<DeleteIcon/>}
                           onClick={()=> handelDelete(user._id) }></Button></TableCell>
                           </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
       </TableContainer>
       </div>
       <ToastContainer position="top-right"/>
         </div>
  
          
    )
}

    
    export default UserOrders