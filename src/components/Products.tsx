/* eslint-disable prettier/prettier */
import { useEffect ,useState } from "react";
import React, { ChangeEvent } from 'react'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch ,RootState } from "../redux/store"
import { fetchProducts, searchProduct } from "../redux/slices/products/ProductSlice";
import { Link} from "react-router-dom";

import Sort from "./Sort";

import { Button, IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';
import { Product } from "../Types";
import { addToCart } from "../redux/slices/products/cartSlice";


const Products = ()=>{
    const {products, isLoading ,error , searchTerm}= useSelector((state:RootState) =>
        state.productsR );
        const dispatch =useDispatch<AppDispatch> ();

        useEffect(() => {
         dispatch(fetchProducts())
        },[dispatch]); 
      
        const handelSearch = (event :ChangeEvent<HTMLInputElement>)=> {
          const searchKeyword= event.target.value;
          dispatch (searchProduct((searchKeyword)));

      }
      const handelAddCart=(product: Product)=>{
        console.log(product)
        toast.success("Product Added To Cart ")
        dispatch(addToCart(product))
      }
         const theProducts =searchTerm?products.filter((product)=> 
         product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())):products;

        
 return (

         <div > 
            <TextField label="searching for .."  onChange={handelSearch} value={searchTerm}  />
            <Sort />
               <div className="prdouctsContainer flex flex-row flex-wrap justify-around items-center gap-8 " > 
               {theProducts.length >0 && theProducts.map((product:Product) => ( 
                 <Card sx={{maxWidth: 300}} key={product._id} className="shadow-xl  grid justify-items-center" >
                  <CardMedia
                   sx={{ height: 180 , width: 150}}
                   image={`http://localhost:5050/${product.image}`}
                   
                   title={product.title}
                   />
                 <CardContent >
                   <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                  {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {product.price} $
                 </Typography>
                 </CardContent>
                 <CardActions>
                 <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>{handelAddCart(product)}}>
                         <AddShoppingCartIcon  />
                  </IconButton>
                  <Link to= {`/Products/${product._id}`} > 
                  <Button variant="contained" size="small"  >more</Button>
                  </Link>
                    </CardActions>
                 
                   </Card> 
                 
                   
                 ))}
                  
                     </div> 
                     </div> 
                    
)}

export default Products