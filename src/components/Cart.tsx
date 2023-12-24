/* eslint-disable prettier/prettier */

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { Button, List, ListSubheader, Typography } from "@mui/material";
import { removeAllCart, removeFromCart } from "../redux/slices/products/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart =()=>{
    const {cartItems}=useSelector((state:RootState)=> state.cartR)
    const dispatch =useDispatch<AppDispatch> ();
    
    const handelRemoveFromCart =(_id:string)=>{
        dispatch(removeFromCart(_id))
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
            <Typography gutterBottom variant="h5">You Have {cartItems.length>0? cartItems.length:0} Products In Your Cart</Typography>
                <Typography gutterBottom variant="h6" component="div"className="flex mb-8">Your Total Is :{totalPrice()} $ </Typography>
                <Button onClick={handelRemoveAllCart} variant="outlined" size="small" color="error">Clear Cart</Button>
                </div>
                <div className=" flex flex-wrap flex-col items-center mb-12">
                    {cartItems.length>0&& (
                        <div className=" ">
                        {cartItems.map((cartItem)=>{
                            return(
                                <List key={cartItem._id} className="flex " 
                                dense sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }
                                } >
                                    <div>
                                    <img src={`http://localhost:5050/${cartItem.image}`} width={150} alt={cartItem.title}/>
                                    </div>
                                    <div >
                                    <p>{cartItem.title}</p>
                                    <p>{cartItem.description}</p>
                                    <p>{cartItem.price} $</p>
                                        <Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon/>} 
                                        onClick= {()=> {handelRemoveFromCart(cartItem._id)}} ></Button>
                                        {/* <Button variant="outlined" size="small" */}
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