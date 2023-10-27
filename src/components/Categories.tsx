/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import {  deleteCategory, fetchCategories } from "../redux/slices/products/CategorySlice";
import AdminSideBar from "./AdminSideBar";
import { Button } from "@mui/material";
import { AddNewCategory } from "./AddNewCategory";


const categories = () => {

    const {categories, isLoading ,error}= useSelector((state:RootState) =>
    state.categoriesR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchCategories())
    },[dispatch]); 
   
   
    if(isLoading){
     return <p> loading the Data now ..</p>
     }
    if (error){
     return <p>{error}</p>

    } const handelDelete=(id:number)=>{
        dispatch(deleteCategory(id))
    }

    return (
        <div
        ><h1>All The Categories</h1>
        <div className="categoriesContainer flex items-center justify-between">
            <AdminSideBar/>
            <AddNewCategory/>
            <div className="m-4">
                {categories.length >0 && categories.map((category)=>{
                    return(
                        <article key={category.id}>
                        <h2>{category.name}</h2>
                         
                        <Button variant="contained" size="small" color="error" onClick={()=> handelDelete(category.id)}>Remove</Button>
                        </article>
                        )})}
            </div>
            </div>
            </div>
    )
}

export default categories