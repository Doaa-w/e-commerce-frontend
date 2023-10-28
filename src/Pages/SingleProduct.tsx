/* eslint-disable prettier/prettier */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { AppDispatch ,RootState } from "../redux/store"

import {  fetchProducts, findProduct } from "../redux/slices/products/productSlice"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from "@mui/material";




const SingleProduct =() =>{
    
    const { id }= useParams()
    const navigate =useNavigate()
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

    
    return (
        <div>
            { SingleProduct && (
                <div key={id}>
                    return (
                        <h2>Name : {SingleProduct.name}</h2>
                        <h3>Price : {SingleProduct.price} $</h3>
                         <h3>Category : {SingleProduct.categories}</h3>
                        <img src={SingleProduct.image} alt={SingleProduct.name} className="w-20"/>
                        <p>Details : {SingleProduct.description}</p>
                        <p>Size : {SingleProduct.sizes}</p>
                        <p>Product Id : {SingleProduct.id}</p>
                        <IconButton color="primary" aria-label="add to shopping cart">
                         <AddShoppingCartIcon />
                  </IconButton>
                  <button onClick={()=>{ navigate('/')}}>back</button>
                    )
                </div>
            )}
        </div>
    )
}
export default SingleProduct