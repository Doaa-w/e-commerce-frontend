/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState  } from "../redux/store";
import React, { ChangeEvent , useEffect} from 'react'
import { productsRequest, productsSuccess, searchProduct } from "../redux/slices/products/productSlice";
import Sort from "../redux/Sort";
import api from "../api";
import { Button, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




const Home = () => {
     const {isLoading ,error, searchTerm} = useSelector((state:RootState) => state.products);
   
    const dispatch = useDispatch<AppDispatch>()

  const state = useSelector((state: RootState) => state)
  const products = state.products

  useEffect(() => {
    handleGetProducts()
  }, [])

  const handleGetProducts = async () => {
    dispatch(productsRequest())
    const products = await api.get('/mock/e-commerce/products.json')
    dispatch(productsSuccess(products.data))
  }

    if(isLoading){
        return <p> items are loaded ..</p>
        }
       if (error){
        return <p> {error} </p>
       }
       
       const handelSearch = (event :ChangeEvent<HTMLInputElement>)=> {
        const searchKeyword= event.target.value;
        dispatch (searchProduct(searchKeyword));
      
       }
      //  const theProduct =searchTerm?products.filter((product)=> 
      //  product.login.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())):products;
      
       return (
          <div>
            <header>
              <h1 className="bg-black w-100">welcome to my store!!</h1>
              
              </header>
            <input type='text' onChange={handelSearch} value={searchTerm} placeholder="searching for .." /> 
            <Sort/>
          
            <ul>
          {products.items.map((product) => (
            <li key={product.id} className="grid grid-row-5 grid-flow-col text-2xl mb-2">
              <img src={product.image} alt={product.name} width="100" />
              <span>{product.name}</span> 
              
              <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                 </IconButton>
                 <Button variant="contained" size="small">more</Button>
            </li>
         ))}
            </ul>
               
               </div>
)}
  
export default Home