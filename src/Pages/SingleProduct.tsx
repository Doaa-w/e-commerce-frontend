/* eslint-disable prettier/prettier */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { AppDispatch ,RootState } from "../redux/store"

import {  fetchProducts, findProduct } from "../redux/slices/products/productSlice"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from "@mui/material";
import Button from '@mui/material/Button';



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
        <div className="flex justify-center m-10 mt-4 text-white">
            { SingleProduct && (
                <div key={id} >
                     <img src={SingleProduct.image} alt={SingleProduct.name} className="w-72"/>
                        <h1>{SingleProduct.name}</h1><br/>
                        <h3>Price : {SingleProduct.price} $</h3> <br/>
                        <p>Details : {SingleProduct.description}</p><br/>
                        <p>Size : {SingleProduct.sizes}</p><br/>
                        <IconButton color="primary" aria-label="add to shopping cart">
                         <AddShoppingCartIcon />
                  </IconButton>
                  <Button variant="contained" size="small"onClick={()=>{ navigate('/')}}>back</Button>
                  {/* <button >back</button> */}
                    
                </div>
            )}
        </div>
    )
}
export default SingleProduct