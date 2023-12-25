/* eslint-disable prettier/prettier */
import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { AppDispatch, RootState } from "../redux/store";

import {  deletecategory, fetchCategories } from "../redux/slices/products/CategorySlice";
import AdminSideBar from "./AdminSideBar";
import { AddNewCategory } from "./AddNewCategory";

import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';

const categories = () => {

    const {categories  }= useSelector((state:RootState) =>
state.categoriesR );
    const dispatch =useDispatch<AppDispatch> ();

    // const [isFormOpen,setIsFormOpen]=useState(false)
    // const [categoryName ,setCategoryName] = useState ({
    //   name:category.name
    // })

    // const handelFormOpen=()=>{
    //     setIsFormOpen(!isFormOpen)
    // }

    useEffect(() => {
     dispatch(fetchCategories())
    },[dispatch]); 

     const handelDelete= async (slug:string)=>{
      try {
        const respones = await deletecategory(slug)
        toast.info("You have successflly deleted a Category ")
        dispatch(fetchCategories())
      } catch (error) {
        console.log(error)
      }
  
  
}
    return (
        <div className="flex flex-wrap">
          <AdminSideBar/>
         <AddNewCategory/>
        <div className="categoriesContainer  items-center mt-6 mb-7">

            
            <TableContainer component={Card}>
      <Table sx={{minWidth: 650}} aria-label="category table">
        <TableBody>

                {categories.length >0 && categories.map((category)=>(
                     <TableRow
                     key={category._id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                   >
                     <TableCell align="left"> {category.name}</TableCell>
                     <TableCell align="center"> <Button variant="outlined" size="small" startIcon={<DeleteIcon/>} 
                     onClick={()=> handelDelete(category.name)}></Button></TableCell>
                     {/* <TableCell align="center"> <Button variant="outlined" size="small" 
                      onClick={()=> handelEdit(category.name , category.slug)}>Edit</Button></TableCell> */}
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
export default categories