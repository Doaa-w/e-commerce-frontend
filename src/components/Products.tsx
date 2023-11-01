/* eslint-disable prettier/prettier */
import { useEffect ,useState } from "react";
import React, { ChangeEvent } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch ,RootState } from "../redux/store"
import { fetchProducts, searchProduct } from "../redux/slices/products/productSlice";
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
       
       
        if(isLoading){
         return <p> loading the Products now ..</p>
         }
        if (error){
         return <p>{error}</p>
        }

   
        const handelSearch = (event :ChangeEvent<HTMLInputElement>)=> {
          const searchKeyword= event.target.value;
          dispatch (searchProduct((searchKeyword)));

      }
      const handelAddCart=(product: Product)=>{
        console.log(product)
        dispatch(addToCart(product))
      }
         const theProducts =searchTerm?products.filter((product)=> 
         product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())):products;

         
        //  const [currentPage ,setCurrentPage] = useState(1)
        //  const [itemsPerPage ]= useState(6)

        //  const indexOfLastPage = currentPage * itemsPerPage 
        //  const indexOfFirstPage = indexOfLastPage - itemsPerPage
        //  const currentItems = theProducts.slice(indexOfFirstPage , indexOfLastPage)
        //  const totalPages = Math.ceil(theProducts.length / itemsPerPage)
         
        //  const handelNext=()=>{
        //   setCurrentPage(currentPage +1 )
        //  }
        //  const handelPrev=()=>{
        //   setCurrentPage(currentPage - 1 )
        //  }
        
 return (

         <div > 
            <TextField label="searching for .."  onChange={handelSearch} value={searchTerm}  />
            <Sort />
               <div className="prdouctsContainer flex flex-row flex-wrap justify-around items-center gap-8 " > 
               {theProducts.length >0 && theProducts.map((product:Product) => ( 
                 <Card sx={{maxWidth: 300}} key={product.id} className="shadow-xl  grid justify-items-center" >
                  <CardMedia
                   sx={{ height: 200 , width: 150}}
                   image= {product.image}
                   title={product.name}
                   />
                 <CardContent >
                   <Typography gutterBottom variant="h5" component="div">
                  {product.name}
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
                  <Link to= {`/Products/${product.id}`} > 
                  <Button variant="contained" size="small"  >more</Button>
                  </Link>
                    </CardActions>
                 
                   </Card> 
                 
                   
                 ))}
                  
                     </div> 
                    {/* <button onClick={handelPrev} disabled ={currentPage == totalPages }> previous </button> 
                    <button onClick={handelNext} disabled ={currentPage ==1 }> netx </button> */}
                     </div> 
                    
)}

export default Products