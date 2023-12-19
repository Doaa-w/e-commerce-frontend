/* eslint-disable prettier/prettier */
import { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  deleteProduct,
  fetchProducts,
  searchProduct,
} from '../redux/slices/products/ProductSlice'
import { AppDispatch, RootState } from '../redux/store'
import { NewProductWrapper } from './NewProductWrapper'

import { Product } from '../Types'
import { TextField } from '@mui/material'

export function ProductsManager() {
    const {products, isLoading ,error , searchTerm}= useSelector((state:RootState) =>
        state.productsR );
        const dispatch =useDispatch<AppDispatch> ();

        useEffect(() => {
         dispatch(fetchProducts())
        },[dispatch]); 
        if(isLoading){
          return <p> loading the Products now ..</p>
          }
         if (error){
          return <p>{error}</p>
         }
        const handelDelet=(slug :string)=>{
          dispatch(deleteProduct(slug))
          }

          const handelSearch = (event :ChangeEvent<HTMLInputElement>)=> {
            const searchKeyword= event.target.value;
            dispatch (searchProduct((searchKeyword)));
  
        }
    const theProducts =searchTerm?products.filter((product)=> 
    product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())):products;

  

  return (
    <div><TextField label="searching for .."  onChange={handelSearch} value={searchTerm}  /> 
    <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-8">
      
      <NewProductWrapper />
      <div className="card grid gap-4">
        <ul>
          {theProducts.length >0 && theProducts.map((product:Product) => (
            <li key={product._id} className="flex items-center gap-4 text-2xl mb-2">
              <img src={`http://localhost:5050/${product.image}`} alt={product.title} width="70" />
              <span>{product.title}</span>
              <button
                className=" text-red-400 text-xs"
                onClick={() => handelDelet(product.slug )}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}
