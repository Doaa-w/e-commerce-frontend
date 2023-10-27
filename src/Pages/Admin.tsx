/* eslint-disable prettier/prettier */
import AdminSideBar from '../components/AdminSideBar'
import { ProductsManager } from '../components/ProductsManager'
import { Toolbar } from '@mui/material';

const Admin = () =>{
  
  return (
  <div >
    <h1 className='flex items-center' > You are in the Admin page</h1>
  <Toolbar>
  <AdminSideBar/>
  <ProductsManager />
  </Toolbar>
  </div>
)}
export default Admin
