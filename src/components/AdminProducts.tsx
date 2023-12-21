/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "../redux/store"
import { fetchProducts } from "../redux/slices/products/ProductSlice";
import AdminSideBar from "./AdminSideBar";


const AdminProducts = ()=>{
    const {products, isLoading ,error}= useSelector((state:RootState) =>
        state.productsR );
        const dispatch:AppDispatch =useDispatch();

        useEffect(() => {
         dispatch(fetchProducts())
        },[dispatch]); 
       
        return (
            <div className="prdouctsContainer flex flex-wrap">
                
                <AdminSideBar/>
                <h2>All The Products 3</h2>
                <div>
                    {products.length >0 && products.map((product)=>{
                        return(
                            <article key={product._id}>
                            <img src={product.image} width={80}/>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            </article>
                            )})}
                </div>
                </div>
        )
}
export default AdminProducts