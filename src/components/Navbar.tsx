/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import { AppDispatch, RootState } from '../redux/store';
import {fetchUsers, logout } from '../redux/slices/products/UserSlice';

import { AppBar, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminSideBar from './AdminSideBar';


const NavBar = () => {

    const {isLoggedIn ,userData }= useSelector((state:RootState) => state.usersR)
    const dispatch =useDispatch<AppDispatch> ();
    const navigate= useNavigate()

    const handelLogout= () =>{
        dispatch(logout(logout))
        navigate('/Login')
     } 

    
    return (
        <div className="nav mb-20  text-blue-500" >

               <React.Fragment>
                    <AppBar position="fixed" className='flex items-center' color='inherit' >
                        <Toolbar className='flex space-x-8 m-4'> 
                        
                        { isLoggedIn ? ( 
                    <>
                   <Link to='/' onClick={handelLogout}>Logout <LogoutIcon fontSize="small" /></Link>

                <Link to={`/UserProfile`}>User Profile</Link>
                  </>
                ):
                <>
                <Link to='/Login'>Login <LoginIcon fontSize="small" /></Link>
                <Link to='/Register'>Register</Link>
                </>
                }
                <Link to='/Products'>Products</Link>
                <Link to='/Cart'> <ShoppingCartIcon fontSize="small"/></Link>
                <Link to='/'> <HomeIcon fontSize="small" /></Link>

               {/* {isLoggedIn && userData?.role === 'admin'? (
                    <>
                           <AdminSideBar/>
                           <Link to='/' onClick={handelLogout}>Logout <LogoutIcon fontSize="small" /></Link>
                            <Link to={`/UserProfile`}>User Profile</Link>
                           </>

                ): 
                <>
                <Link to='/Login'>Login <LoginIcon fontSize="small" /></Link>
                <Link to='/Register'>Register</Link>
                </>
                } 
                {isLoggedIn  ? (
                    <>
                    <Link to='/' onClick={handelLogout}>Logout <LogoutIcon fontSize="small" /></Link>
 
                 <Link to={`/UserProfile`}>User Profile</Link>
                   </>

                ):
                <>
                <Link to='/Login'>Login <LoginIcon fontSize="small" /></Link>
                <Link to='/Register'>Register</Link>
                </>

                }
                <Link to='/Products'>Products</Link>
                <Link to='/Cart'> <ShoppingCartIcon fontSize="small"/></Link>
                <Link to='/'> <HomeIcon fontSize="small" /></Link> */}
               
                        </Toolbar>
                    </AppBar>
                </React.Fragment> 
        </div>
    )
    
}
export default NavBar