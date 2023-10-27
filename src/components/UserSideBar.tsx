/* eslint-disable prettier/prettier */
import {Link} from 'react-router-dom';


const UserSideBar = () =>{

    return (
        
            <aside className="UserSideBar">
                 <ul>
                <li>
                 <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/UserOrders'>UserOrders</Link>
                </li>
                
            </ul>
        </aside>
    )
}
export default UserSideBar