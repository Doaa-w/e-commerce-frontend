/* eslint-disable prettier/prettier */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useParams } from "react-router-dom"

import { AppDispatch ,RootState } from "../redux/store"

import {  fetchProducts, findProduct } from "../redux/slices/products/productSlice"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Product } from "../Types"
import { addToCart } from "../redux/slices/products/cartSlice"



const SingleProduct =() =>{
    
    const { id }= useParams()
    const {SingleProduct, isLoading ,error }=useSelector((state:RootState)=>state.productsR);
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(()=>{
    dispatch(fetchProducts()).then(()=>
    dispatch(findProduct(Number(id))))
    },[])

    if(isLoading){
        return <p> loading the Data now ..</p>
        }
       if (error){
        return <p>{error}</p>
       }
       const handelAddCart=(product: Product)=>{
        console.log(product)
        dispatch(addToCart(product))
      }

    
    return (
        <div className="flex justify-center m-10 mt-10 p-16 ">
            { SingleProduct && (
                <div key={id} className="flex flex-wrap ">
                     <img src={SingleProduct.image} alt={SingleProduct.name} className="w-72 p-8 flex"/>
                     <Box >
                        <h1>{SingleProduct.name}</h1><br/>
                        <p>Description : {SingleProduct.description}</p><br/>
                        <p>Size : {SingleProduct.sizes}</p><br/>
                        <p>variants :{SingleProduct.variants}</p><br/>
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