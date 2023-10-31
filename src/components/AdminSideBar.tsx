/* eslint-disable prettier/prettier */
import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from './Navbar';

import { AppBar, Toolbar } from '@mui/material';

const AdminSideBar = () =>{

    return (
        
            <div className="AdminSideBar ">
                <React.Fragment >
                     <AppBar position='sticky' color='inherit'>
                        <Toolbar> 
                            <h4>Admin pages :</h4>
                            <ul  className='flex justify-around space-x-4 m-4 '>
                       <li> <Link to='/dashboard/Orders'>Orders</Link>   </li>
                       <li> <Link to='/dashboard/Users'>Users</Link>    </li>
                       <li> <Link to='/dashboard/Categories'>Categories</Link> </li>
                       <li> <Link to='/dashboard/Admin'>Product</Link> </li>
                           </ul>
                            <NavBar/>
                        </Toolbar>
                    </AppBar>
                </React.Fragment>
        </div> 
    )
}
export default AdminSideBar