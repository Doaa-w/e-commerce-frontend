/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchOrders } from "../redux/slices/products/OrdersSlice";



const Orders = () => {
    const {orders, isLoading ,error }= useSelector((state:RootState) =>
    state.ordersR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchOrders())
    },[dispatch]); 
   
   
    if(isLoading){
     return <p> loading the Data now ..</p>
     }
    if (error){
     return <p>{error}</p>
    }


    return (
    

        <div className=" flex align-items-center">
            <h1 > the Orders  :</h1>
            <div> 
      <table aria-label="orders table" className="mt-5">
        <thead >
            <tr >
            <th>user Id</th>
            <th>product Id </th>
            <th>purchased Date</th>
            </tr>
        </thead>
        <tbody>
        {orders.length >0 && orders.map((order) => {
            return(

             <tr key={order.id}>
               <td style={{ width: 160 }} >{order.userId}</td>
               <td style={{ width: 160 }}>{order.productId}</td>
               <td style={{ width: 160 }} >{order.purchasedAt}</td>
               </tr>

                  )} )}
          </tbody>
        </table>
         </div>
         </div>
        
    )
        
    }
    
    export default Orders