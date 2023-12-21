/* eslint-disable prettier/prettier */
import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from './Navbar';

import { AppBar, Toolbar } from '@mui/material';
import UserProfile from '../Pages/UserProfile';

const AdminSideBar = () =>{

    return (
        
            <div className="AdminSideBar flex ">
                {/* <React.Fragment >
                     <AppBar position='sticky' color='inherit'> */}
                        <aside className='h-hvh pl-0 float-left bg-slate-300 p-40 align-middle '> 
                        
                            <ul   >
                       <li> <Link to='/dashboard/Orders'>Orders</Link>   </li>
                       <li> <Link to='/dashboard/Users'>Users</Link>    </li>
                       <li> <Link to='/dashboard/Categories'>Categories</Link> </li>
                       <li> <Link to='/dashboard/Admin'>Product</Link> </li>
                           </ul>
                            {/* <NavBar/> */}
                        </aside>
                    {/* </AppBar>
                </React.Fragment> */}
        </div> 
    )
}
export default AdminSideBar