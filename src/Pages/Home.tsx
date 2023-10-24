/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux";
import React, { ChangeEvent } from 'react'

import { searchProduct } from "../redux/slices/products/productSlice";

import Products from "../components/Products";
import TextField from '@mui/material/TextField';

import { AppDispatch, RootState  } from "../redux/store";

const Home = () => {
     const {products ,searchTerm} = useSelector((state:RootState) => state.productsR);
   
    const dispatch = useDispatch<AppDispatch>()


       const handelSearch = (event :ChangeEvent<HTMLInputElement>)=> {
        const searchKeyword= event.target.value;
        dispatch (searchProduct(String(searchKeyword)));
      
    }
       const theProduct =searchTerm?products.filter((product)=> 
       product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())):products;
      
       return (
          <div>
            <header>
              <h1 className=" w-100">welcome to my store!!</h1>
              
              </header>
              <TextField id="filled-basic" label="searching for .." variant="filled" onChange={handelSearch} value={searchTerm}  />
            {/* <input type='text' onChange={handelSearch} value={searchTerm} placeholder="searching for .." />  */}
               <Products/>
            
               </div>
       )}
           
export default Home