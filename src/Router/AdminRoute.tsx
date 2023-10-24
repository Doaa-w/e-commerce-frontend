/* eslint-disable prettier/prettier */

import { Outlet, useLocation } from "react-router-dom"
import { Login } from "../components/Login"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"


const AdminRoute = () => {
    
    const {isLoggedIn ,userData}= useSelector((state:RootState) => state.usersR)
     const location=useLocation()

    return isLoggedIn && userData?.role ==='admin'?
     <Outlet/>:<Login pathName={location.pathname}/>

}
export default AdminRoute