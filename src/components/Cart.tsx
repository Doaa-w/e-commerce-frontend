/* eslint-disable prettier/prettier */

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { Button, List, ListSubheader, Typography } from "@mui/material";
import { removeAllCart, removeFromCart } from "../redux/slices/products/cartSlice";


const Cart =()=>{
    const {cartItems}=useSelector((state:RootState)=> state.cartR)
    const dispatch =useDispatch<AppDispatch> ();
    
    const handelRemoveFromCart =(id:number)=>{
        dispatch(removeFromCart(id))
    }
    const handelRemoveAllCart =()=>{
        dispatch(removeAllCart())
    }

    const totalPrice = ()=>{
        let totalAmount=0
        cartItems.length> 0 && cartItems.map((cartItem)=>(
            totalAmount=totalAmount +cartItem.price ))
            return totalAmount
    }

    return (
        <div>
            <div>
            <Typography gutterBottom variant="h5">You Have {cartItems.length>0? cartItems.length:0} Product In Your Cart</Typography>
                <Typography gutterBottom variant="h6" component="div"className="flex mb-8">Your Total Is :{totalPrice()} $ </Typography>
                <Button onClick={handelRemoveAllCart} variant="outlined" size="small" color="error">Clear Cart</Button>
                </div>
                <div className=" flex flex-wrap flex-col items-center mb-12">
                    {cartItems.length>0&& (
                        <div className=" ">
                        {cartItems.map((cartItem)=>{
                            return(
                                <List key={cartItem.id} className="flex " 
                                dense sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }
                                } >
                                    <div>
                                    <img src={cartItem.image} width={150} alt={cartItem.name}/>
                                    </div>
                                    <div >
                                    <p>{cartItem.name}</p>
                                    <p>{cartItem.description}</p>
                                    <p>{cartItem.price} $</p>
                                        <Button variant="contained" size="small" color="error" 
                                        onClick= {()=> {handelRemoveFromCart(cartItem.id)}} >Remove</Button>
                                        
                                    </div>
                                    
                                    </List>
                            )
                        })}
                        </div>
                    )}
                </div>
        </div>

    )


}
export default Cart