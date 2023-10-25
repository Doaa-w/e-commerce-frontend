/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import { AppDispatch, RootState } from '../redux/store';
import { logout } from '../redux/slices/products/UserSlice';

const NavBar = () => {

    const {isLoggedIn ,userData}= useSelector((state:RootState) => state.usersR)
    const dispatch =useDispatch<AppDispatch> ();

    const handelLogout= () =>{
        dispatch(logout())
        // Navigate('/')
    }
    return (
        <div className='nav' >
            <ul>
                { isLoggedIn ? ( 
                    <>

                    <li>
                <Link to='/Logout' onClick={handelLogout}>Logout</Link>
                </li>

                <li>
                <Link to={'/${userData.role}'}>User Profile</Link>
                </li>
                  </>
                ):
                <li>
                <Link to='/Login'>Login</Link>
                </li>
                }

                <li>
                    <Link to='/'>Home</Link>
                </li>
                
                <li>
                <Link to='/Categories'>Categories</Link>
                </li>
                <li>
                <Link to='/Products'>Products</Link>
                </li>
                
                
                
            </ul>
        </div>
    )
    
}
export default NavBar