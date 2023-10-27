/* eslint-disable prettier/prettier */
import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './Navbar';


const AdminSideBar = () =>{

    return (
        
            <div className="AdminSideBar">
                <React.Fragment>
                    <AppBar position='sticky' className='mt-2'>
                        <Toolbar>
                            <ul>
                            <li> <Link to='/dashboard/Orders'>Orders</Link></li>  
                        <li><Link to='/dashboard/Users'>Users</Link></li>    
                <li><Link to='/dashboard/Categories'>Categories</Link></li> 
                            </ul>
                            <NavBar/>
                        </Toolbar>
                    </AppBar>
                </React.Fragment>
                {/* <div className="AdminInfo flex space-x-8 flex items-center">
                <h2>Admin name</h2>
                <p>Admin E-mail</p>
                 </div>
                 <ul>
                <li>
                <Link to='/Orders'>Orders</Link>
                </li>
                <li>
                <Link to='/Users'>Users</Link>
                </li>
                <li>
                <Link to='/dashboard/Categories'>Categories</Link>
                </li>
                <li>
                <Link to='/dashboard/Orders'>Orders</Link>
                </li>
            </ul> */}
        </div> 
    )
}
export default AdminSideBar