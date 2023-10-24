/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { fetchProducts } from "../redux/slices/products/productSlice";
import { useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Link } from "react-router-dom";
import Sort from "./Sort";

const Products = ()=>{
    const {products, isLoading ,error}= useSelector((state:RootState) =>
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


 return (
         
            <div className="prdouctsContainer grid grid-cols-3 ">
               <Sort />
               
               <Card sx={{ maxWidth: 400 }}>
               {products.length >0 && products.map((product) => (
                <div key={product.id}>
                  <CardMedia
                   sx={{ height: 380 }}
                   image= {product.image}
                   title={product.name}
                    />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {product.price}
                 </Typography>
                 </CardContent>
                 <CardActions>
                 <IconButton color="primary" aria-label="add to shopping cart">
                         <AddShoppingCartIcon />
                  </IconButton>
                  <Link to='/Product/:name'>
                  <Button variant="contained" size="small">more</Button>
                  </Link>
                    </CardActions>
                    </div> ))}
                     </Card>
                     
                     </div>
                     
    
)}

export default Products