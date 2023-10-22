/* eslint-disable prettier/prettier */

import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Home from "../Pages/Home"
import SingleProduct  from "../Pages/Home"
import Error from "../Pages/Home"
import Admin from "../Pages/Admin"
import NavBar from "../components/Navbar"
import Categories from "../components/Categories"
import UserProfile from "../Pages/UserProfile"
import UserOrders from "../components/UserOrders"

const RouterMain = () => {
    return(
        <BrowserRouter>
       <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Categories" element={<Categories />}/>
            <Route path="/UserOrders" element={<UserOrders />}/>
            
            <Route path="/UserProfile" element={<UserProfile/>}/>
            <Route path="/Product/:name" element={<SingleProduct/>}/>
            {/* if */}
            <Route path="/Admin" element={< Admin />} />
            <Route path="*"  element={< Error />} />
        </Routes>
        </BrowserRouter>
    )

}
export default RouterMain