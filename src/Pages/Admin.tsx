/* eslint-disable prettier/prettier */
import AdminSideBar from '../components/AdminSideBar'
import { ProductsManager } from '../components/ProductsManager'
import { Toolbar } from '@mui/material';

const Admin = () =>{
  
  return (
  <div>
    <h3> you are in the admin page</h3>
  <Toolbar>
  <AdminSideBar/>
  <ProductsManager />
  </Toolbar>
  </div>
)}
export default Admin
