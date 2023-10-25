/* eslint-disable prettier/prettier */

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { deleteUser, fetchUsers } from "../redux/slices/products/UserSlice";
import UserSideBar from "./UserSideBar";
import { Button } from "@mui/material";

const UserOrders = () => {

    const {users, isLoading ,error}= useSelector((state:RootState) =>
    state.usersR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchUsers())
    },[dispatch]); 
   
    const handelDelete=(id:number)=>{
        dispatch(deleteUser(id))
    }
   
    if(isLoading){
     return <p> loading the Users  ..</p>
     }
    if (error){
     return <p>{error}</p>
    }
    return (
        <div className="usersContainer">
            <UserSideBar/>
            <h2>All The users</h2>
            <div>
                {users.length >0 && users.map((user)=>{
                    return(
                        <article key={user.id}>
                        <h2>{user.firstName}</h2>
                        <h2>{user.lastName}</h2>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                        <Button variant="contained" size="small" color="error" 
                        onClick={()=> handelDelete(user.id)} >Remove User</Button>
                        </article>
                        )})}
            </div>
            </div>
    )
}

    
    export default UserOrders