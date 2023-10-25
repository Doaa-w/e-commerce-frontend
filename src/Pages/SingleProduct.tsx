/* eslint-disable prettier/prettier */

import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AppDispatch ,RootState } from "../redux/store"
import { useEffect } from "react"
import {  findProduct } from "../redux/slices/products/productSlice"




const SingleProduct =() =>{
    const {id}=useParams()
    const {SingleProduct,isLoading ,error}=useSelector((state:RootState)=>state.productsR);
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(()=>{
    dispatch(findProduct(Number(id)));
    },[id])

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
                    )
                </div>
            )}
        </div>
    )
}
export default SingleProduct