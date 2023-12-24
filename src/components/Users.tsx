/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import {  deleteUsers, fetchUsers, grantRole } from "../redux/slices/products/UserSlice";
import AdminSideBar from "./AdminSideBar";

import { Button, InputLabel, NativeSelect } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";


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
   const handelAdmin = async(_id:string | undefined)=>{
    if(_id){
      dispatch(grantRole(_id))
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
            <TableCell align="center" > User Role </TableCell>
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
                           onClick={()=> handelAdmin(user._id)}>Make As Admin</Button></TableCell>
            </InputLabel>
            </TableCell>
                 <TableCell>
                   
                   {/* <Button variant="contained" size="small" color="error" 
                        onClick={()=> handelDelete(user._id)} >Remove User</Button>*/}

                         <TableCell align="center"> <Button variant="outlined" size="small" startIcon={<DeleteIcon/>}
                           onClick={()=> handelDelete(user._id)}></Button></TableCell>
                           </TableCell> 
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