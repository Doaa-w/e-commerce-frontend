/* eslint-disable prettier/prettier */
import AdminSideBar from '../components/AdminSideBar'
import { ProductsManager } from '../components/ProductsManager'

import { Toolbar } from '@mui/material';

const Admin = () =>{
  
  return (
  <div className='flex flex-wrap'> 
    <AdminSideBar/>
    {/* <h1  className="flex  justify-center mt-4 mb-4">All The Products</h1>  <Toolbar> */}
  <ProductsManager />
 
 
  </div>
)}
export default Admin
