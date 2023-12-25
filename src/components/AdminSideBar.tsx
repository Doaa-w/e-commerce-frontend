/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import NavBar from './Navbar';

import { AppBar, Badge, Toolbar } from '@mui/material';
import UserProfile from '../Pages/UserProfile';
import  BadgeIcon from'@mui/icons-material/Badge'


const AdminSideBar = () =>{
    const {userData}= useSelector((state:RootState) =>
    state.usersR );
    const [user ,setUser] = useState ({
        firstName: userData?.first_name,
        lastName: userData?.last_name,
        })

    return (
        
            <div className="AdminSideBar flex">
              <aside className='h-hvh pl-0 float-left bg-slate-100 p-32 items-center justify-center'> 
                 <BadgeIcon color='primary' sx={{ fontSize:70}}/> 
                  <p className='font-bold '>Admin : {userData?.first_name}</p>
          <ul className='mt-16 space-y-6 '>
            <li> <Link to='/dashboard/Orders'>Orders</Link>   </li>
             <li> <Link to='/dashboard/Users'>Users</Link>    </li>
             <li> <Link to='/dashboard/Categories'>Categories</Link> </li>
             <li> <Link to='/dashboard/Admin'>Product</Link> </li>
          </ul>
        </aside>
               
        </div> 
    )
}
export default AdminSideBar