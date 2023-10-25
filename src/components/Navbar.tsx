/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { AppDispatch, RootState } from '../redux/store';
import {logout } from '../redux/slices/products/UserSlice';

const NavBar = () => {

    const {isLoggedIn }= useSelector((state:RootState) => state.usersR)
    const dispatch =useDispatch<AppDispatch> ();
    const navigate= useNavigate()

    const handelLogout= () =>{
        dispatch(logout(logout))
        navigate('/Login')
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