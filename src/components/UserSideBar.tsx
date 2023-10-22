/* eslint-disable prettier/prettier */
import {Link} from 'react-router-dom';


const UserSideBar = () =>{

    return (
        
            <aside className="UserSideBar">
                <div className="UserInfo">
                <h2>User name</h2>
                <p>User E-mail</p>
                 </div>
                 <ul>
                <li>
                 <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/Content'>content</Link>
                </li> 
                <li>
                <Link to='/UserOrders'>UserOrders</Link>
                </li>
                
            </ul>
        </aside>
    )
}
export default UserSideBar