/* eslint-disable prettier/prettier */
import { Toolbar } from '@mui/material';
import UserSideBar from '../components/UserSideBar';


const UserProfile = ()=>{
    return(
        <div>
        <h2> this is your page </h2>
        <Toolbar>
        <UserSideBar />
        </Toolbar>
        </div>
    )
}
export default UserProfile