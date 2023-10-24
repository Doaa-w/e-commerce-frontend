/* eslint-disable prettier/prettier */

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchUsers } from "../redux/slices/products/UserSlice";
import UserSideBar from "./UserSideBar";

const UserOrders = () => {

    const {users, isLoading ,error}= useSelector((state:RootState) =>
    state.usersR );
    const dispatch =useDispatch<AppDispatch> ();

    useEffect(() => {
     dispatch(fetchUsers())
    },[dispatch]); 
   
   
    if(isLoading){
     return <p> loading the Data now ..</p>
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
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                        </article>
                        )})}
            </div>
            </div>
    )
}

    
    export default UserOrders