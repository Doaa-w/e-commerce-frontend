/* eslint-disable prettier/prettier */
import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/UserProfile'>User Profile</Link>
                </li>
                <li>
                <Link to='/Categories'>Categories</Link>
                </li>
                
            </ul>
        </div>
    )
    
}
export default NavBar