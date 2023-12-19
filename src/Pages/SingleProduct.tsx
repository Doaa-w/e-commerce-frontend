/* eslint-disable prettier/prettier */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useParams } from "react-router-dom"

import { AppDispatch ,RootState } from "../redux/store"

import {  fetchProducts, fetchSingleProducts } from "../redux/slices/products/ProductSlice"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Product } from "../Types"
import { addToCart } from "../redux/slices/products/cartSlice"



const SingleProduct =() =>{
    
    const { _id }= useParams()
    const {SingleProduct, isLoading ,error }=useSelector((state:RootState)=>state.productsR);
    const dispatch =useDispatch<AppDispatch> ();
///
    useEffect(()=>{
    dispatch(fetchSingleProducts(_id))
   
    },[])

       const handelAddCart=(product: Product)=>{
        console.log(product)
        dispatch(addToCart(product))
      }

    
    return (
        <div className="flex justify-center m-10 mt-10 p-16 ">
            { SingleProduct && (
                <div key={_id} className="flex flex-wrap ">
                     <img src={`http://localhost:5050/${SingleProduct.image}`} alt={SingleProduct.title} className="w-72 p-8 flex"/>
                     <Box >
                        <h1>{SingleProduct.title}</h1><br/>
                        <p>Description : {SingleProduct.description}</p><br/>
                        <p>Quantity :{SingleProduct.quantity}</p><br/>
                        <h3>Price : {SingleProduct.price} $</h3> <br/>
                        <IconButton  color="primary" aria-label="add to  cart" onClick={()=>{handelAddCart(SingleProduct)}}>
                         <AddShoppingCartIcon />
                  </IconButton>
                  <Button variant="contained" size="small" href="/">back</Button> 
                </Box>
                </div>
            )}
        </div>
    )
}
export default SingleProduct