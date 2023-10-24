/* eslint-disable prettier/prettier */

import { Outlet, useLocation } from "react-router-dom"

import { Login } from "../components/Login"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"


const UserRoute = () => {
    const location=useLocation()
    const {isLoggedIn }= useSelector((state:RootState) => state.usersR)

    return isLoggedIn ? <Outlet/>: <Login pathName={location.pathname}/>  
}
export default UserRoute