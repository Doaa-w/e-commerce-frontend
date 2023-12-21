/* eslint-disable prettier/prettier */
import AdminSideBar from '../components/AdminSideBar'
import { ProductsManager } from '../components/ProductsManager'

import { Toolbar } from '@mui/material';

const Admin = () =>{
  
  return (
  <div className='flex flex-wrap'> 
    <AdminSideBar/>
  <ProductsManager />
 
  </div>
)}
export default Admin
