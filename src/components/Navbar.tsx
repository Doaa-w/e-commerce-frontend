/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { AppDispatch, RootState } from '../redux/store';
import {logout } from '../redux/slices/products/UserSlice';
import { AppBar, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';


const NavBar = () => {

    const {isLoggedIn }= useSelector((state:RootState) => state.usersR)
    const dispatch =useDispatch<AppDispatch> ();
    const navigate= useNavigate()

    const handelLogout= () =>{
        dispatch(logout(logout))
        navigate('/Login')
     } 
    return (
        <div className="nav mb-28 mt-18" >

               <React.Fragment>
                    <AppBar position="fixed" className='flex items-center'>
                    <header >
              <h1 className=" w-100 mb-2">welcome to my store!!</h1>
              </header>
                        <Toolbar className='flex space-x-8'>
                        { isLoggedIn ? ( 
                    <>
                   <Link to='/' onClick={handelLogout}>Logout <LogoutIcon fontSize="small" /></Link>

                <Link to={`/UserProfile`}>User Profile</Link>
                  </>
                ):
                <>
                <Link to='/Login'>Login <LoginIcon fontSize="small" /></Link>
                <Link to='/Rejister'>Rejister</Link>
                </>
                }
                <Link to='/Products'>Products</Link>
                <Link to='/'> <HomeIcon fontSize="small" /></Link>
                        </Toolbar>
                    </AppBar>
                </React.Fragment> 
        </div>
    )
    
}
export default NavBar