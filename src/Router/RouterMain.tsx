/* eslint-disable prettier/prettier */

import { BrowserRouter ,Routes ,Route } from "react-router-dom"

import SingleProduct  from "../Pages/Home"
import Error from "../Pages/Home"
import Admin from "../Pages/Admin"
import NavBar from "../components/Navbar"
import Categories from "../components/Categories"
import UserProfile from "../Pages/UserProfile"
import Users from "../components/Users"
import Products from "../components/Products"
import Home from "../Pages/Home"
import AdminProducts from "../components/AdminProducts"
import { Login } from "../components/Login"
import UserRoute from "./UserRoute"
import AdminRoute from "./AdminRoute"

const RouterMain = () => {
    return(
        <BrowserRouter>
       <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Products" element={< Products />}/>
            <Route path="/Products/:id" element={<SingleProduct/>}/>
            <Route path="/Login" element={<Login pathName={""} />}/>

        <Route path="/" element={<UserRoute/>}>
            <Route path="/User" element={<Users/>}/>
            <Route path="/UserProfile" element={<UserProfile/>}/>
            {/* user orders */}
        </Route>

         
        <Route path="/" element={< AdminRoute />}>
            <Route path="/dashboard/Admin" element={< Admin />} />
            <Route path="/dashboard/AdminProduct" element={<AdminProducts />}/>
            <Route path="/dashboard/Categories" element={<Categories />}/>
         </Route>

            <Route path="*"  element={< Error />} />
        </Routes>
        </BrowserRouter>
    )

}
export default RouterMain