/* eslint-disable prettier/prettier */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import { AppDispatch, RootState } from '../redux/store';
import {logout } from '../redux/slices/products/UserSlice';

import { AppBar, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const NavBar = () => {

    const {isLoggedIn }= useSelector((state:RootState) => state.usersR)
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
                <Link to='/Rejister'>Register</Link>
                </>
                }
                <Link to='/Products'>Products</Link>
                <Link to='/'><ShoppingCartIcon fontSize="small" /></Link>
                <Link to='/'> <HomeIcon fontSize="small" /></Link>
                        </Toolbar>
                    </AppBar>
                </React.Fragment> 
        </div>
    )
    
}
export default NavBar