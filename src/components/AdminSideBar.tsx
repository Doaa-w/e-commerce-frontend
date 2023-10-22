/* eslint-disable prettier/prettier */
import {Link} from 'react-router-dom';


const AdminSideBar = () =>{

    return (
        
            <aside className="AdminSideBar">
                <div className="AdminInfo">
                <h2>Admin name</h2>
                <p>Admin E-mail</p>
                 </div>
                 <ul>
                <li>
                 <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/Content'>content</Link>
                <li>
                <Link to='/Orders'>Orders</Link>
                </li>
                </li>
            </ul>
        </aside>
    )
}
export default AdminSideBar