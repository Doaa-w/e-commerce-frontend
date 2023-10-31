/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";

import { fetchOrders } from "../redux/slices/products/OrdersSlice";
import AdminSideBar from "./AdminSideBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Orders = () => {
    const {orders, isLoading ,error }= useSelector((state:RootState) =>
    state.ordersR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchOrders())
    },[dispatch]); 
   
   
    if(isLoading){
     return <p> loading the Data now ..</p>
     }
    if (error){
     return <p>{error}</p>
    }


    return (
      <div >
            
              <AdminSideBar/>  
              <h1  className="flex  justify-center mt-4 mb-4">All The Orders</h1>
              <div className=" mt-4 mb-4"> 
              
              
     
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell  align="center"> user Id</TableCell>
            <TableCell align="center" >product Id </TableCell>
            <TableCell  align="center">purchased Date</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {orders.length >0 && orders.map((order) =>  (
            <TableRow
              key={order.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center"> {order.userId}</TableCell>
              <TableCell align="center"> {order.productId}</TableCell>
              <TableCell align="center"> {order.purchasedAt}</TableCell>
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </div>
         </div> 
      
        
    )
        
    }
    
    export default Orders