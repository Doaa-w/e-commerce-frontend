/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { fetchProducts } from "../redux/slices/products/productSlice";
import { useEffect } from "react";
import AdminSideBar from "./AdminSideBar";


const AdminProducts = ()=>{
    const {products, isLoading ,error}= useSelector((state:RootState) =>
        state.productsR );
        const dispatch:AppDispatch =useDispatch();

        useEffect(() => {
         dispatch(fetchProducts())
        },[dispatch]); 
       
       
        if(isLoading){
         return <p> loading the Data now ..</p>
         }
        if (error){
         return <p>{error}</p>
        }
        return (
            <div className="prdouctsContainer">
                <AdminSideBar/>
                <h2>All The Products</h2>
                <div>
                    {products.length >0 && products.map((product)=>{
                        return(
                            <article key={product.id}>
                            <img src={product.image}/>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            </article>
                            )})}
                </div>
                </div>
        )
}
export default AdminProducts