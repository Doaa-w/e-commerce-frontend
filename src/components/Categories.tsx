/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchCategories } from "../redux/slices/products/CategorySlice";
import AdminSideBar from "./AdminSideBar";
import { Button } from "@mui/material";


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
    }
    return (
        <div className="categoriesContainer">
            <AdminSideBar/>
            <h1>All The Categories</h1>
            <div>
                {categories.length >0 && categories.map((category)=>{
                    return(
                        <article key={category.id}>
                        <h2>{category.name}</h2>
                        <Button variant="contained" size="small" color="success">Adding</Button> 
                        <Button variant="contained" size="small" color="error">Remove</Button>
                        </article>
                        )})}
            </div>
            </div>
    )
}

export default categories