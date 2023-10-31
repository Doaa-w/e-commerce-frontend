/* eslint-disable prettier/prettier */
import { ChangeEvent, FormEvent, useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";

import {  deleteCategory, fetchCategories, updateCategory } from "../redux/slices/products/CategorySlice";
import AdminSideBar from "./AdminSideBar";
import { AddNewCategory } from "./AddNewCategory";

import { Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const categories = () => {

    const {categories, isLoading ,error }= useSelector((state:RootState) =>
    state.categoriesR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchCategories())
    },[dispatch]); 

    // const [isFormOpen,setIsFormOpen]=useState(false) 
    // const [category ,setCategory] =useState(' ')


    // const handelFormOpen=()=>{
    //     setIsFormOpen(!isFormOpen)
    // }

    // // const handelChange =(event:ChangeEvent<HTMLInputElement>) => {
    // //      setCategory([event.target.value])
    // //     },
    //     const handelSubmit= async (event:FormEvent)=>{
    //         event.preventDefault() 
    //         const updateCategoryDate ={id:category.id, name:category.name}
    //         dispatch(updateCategory(updateCategoryDate))

    //     }
   
    if(isLoading){
     return <p> loading the Data now ..</p>
     }
    if (error){
     return <p>{error}</p>

    } const handelDelete=(id:number)=>{
        dispatch(deleteCategory(id))
    }

    return (
        <div>
          <AdminSideBar/>
          <h1  className="flex  justify-center mt-4 mb-4">All The Categories</h1>
        <div className="categoriesContainer flex items-center mt-6 mb-7">
            <AddNewCategory/>
            {/* {isFormOpen && (
          <form onSubmit={handelSubmit} className= " flex m-12" > 
        <input type='text' name='name' onChange={handelChange} value={category.name}/>
        <Button type='submit'>update the category</Button>
        </form>  
        )} */}
            {/* <div className="m-8 p-6 grid grid-cols-6"> */}
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="category table">
        <TableHead>
          <TableRow>
            <TableCell  align="center"> category name</TableCell>
            <TableCell align="center" > </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>

                {categories.length >0 && categories.map((category)=>(
                     <TableRow
                     key={category.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                   >
                     <TableCell align="center"> {category.name}</TableCell>
                     <TableCell align="center"> <Button variant="contained" size="small" color="error" onClick={()=> handelDelete(category.id)}>Remove</Button></TableCell>

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