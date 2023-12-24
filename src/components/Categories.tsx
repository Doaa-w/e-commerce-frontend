/* eslint-disable prettier/prettier */
import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';

const categories = () => {

    const {categories }= useSelector((state:RootState) =>
state.categoriesR );
    const dispatch =useDispatch<AppDispatch> ();
    // const [categortName ,setCategoryName]=useState('')
    // const [categortslug ,setCategoryslug]=useState('')
    // const [isEidCategory ,setIsEidCategory]=useState(false)

    useEffect(() => {
     dispatch(fetchCategories())
    },[dispatch]); 

     const handelDelete= async (slug:string)=>{
      try {
        const respones = await deletecategory(slug)
        dispatch(fetchCategories())
      } catch (error) {
        console.log(error)
      }
    // const  handelEdit =(slug:string , name :string )=>{
    //   isEidCategory(true)
    //   setCategoryName(name)
    //   setCategoryslug(slug)
    // }
  
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
                     <TableCell align="center"> <Button variant="outlined" size="small" startIcon={<DeleteIcon/>} onClick={()=> handelDelete(category.name)}>Remove</Button></TableCell>
                     {/* <TableCell align="center"> <Button variant="outlined" size="small" startIcon={<DeleteIcon/>} onClick={()=> handelEdit(category.name , category.slug)}>Remove</Button></TableCell> */}
                  </TableRow>
                            ))}
                            
                          </TableBody>
                       </Table>
                      </TableContainer>
                           </div>
                           </div> 
    )

}
export default categories