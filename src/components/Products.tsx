/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch ,RootState } from "../redux/store"
import { fetchProducts, searchProduct } from "../redux/slices/products/productSlice";
import { useEffect } from "react";
import React, { ChangeEvent } from 'react'
import { Link} from "react-router-dom";
import Sort from "./Sort";

import { Button, Grid, IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Products = ()=>{
    const {products, isLoading ,error , searchTerm}= useSelector((state:RootState) =>
        state.productsR );
        const dispatch =useDispatch<AppDispatch> ();

        useEffect(() => {
         dispatch(fetchProducts())
        },[dispatch]); 
       
       
        if(isLoading){
         return <p> loading the Data now ..</p>
         }
        if (error){
         return <p>{error}</p>
        }

   
        const handelSearch = (event :ChangeEvent<HTMLInputElement>)=> {
          const searchKeyword= event.target.value;
          dispatch (searchProduct((searchKeyword)));

      }
         const theProducts =searchTerm?products.filter((product)=> 
         product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())):products;


 return (

         <div > 
            <TextField label="searching for .." focused  onChange={handelSearch} value={searchTerm}  />
            <Sort />
               <div className="prdouctsContainer ">
               
               <Card sx={{ maxWidth: 400 }}>
                {/* <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                  <> */}
               {theProducts.length >0 && theProducts.map((product) => (
                <div key={product.id}> 
                  <CardMedia
                   sx={{ height: 300 }}
                   image= {product.image}
                   title={product.name}
                    />
                 <CardContent >
                   <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                  {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {product.price} $
                 </Typography>
                 </CardContent>
                 <CardActions>
                 <IconButton color="primary" aria-label="add to shopping cart">
                         <AddShoppingCartIcon />
                  </IconButton>
                  {/* <Link to= {`/Products/${product.id}`}>  */}
                  <Button variant="contained" size="small" href={`/Products/${product.id}`}>more</Button>
                  {/* </Link> */}
                    </CardActions>
                    </div> 
                    ))}
                    {/* </>
                     </Stack> */}
                     </Card>
                    
                     </div>
                     </div>
                    
    
)}

export default Products