/* eslint-disable prettier/prettier */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  createProduct,
  deleteProduct,
  fetchProducts,
  searchProduct,
} from '../redux/slices/products/ProductSlice'
import { AppDispatch, RootState } from '../redux/store'
import { NewProductWrapper } from './NewProductWrapper'

import { Product } from '../Types'
import { TextField } from '@mui/material'

export function ProductsManager() {
 
    const {products,  searchTerm}= useSelector((state:RootState) =>
        state.productsR );
        const dispatch =useDispatch<AppDispatch> ();
        const [product, setProduct] = useState({
          title: '',
          description: '',
          image: ' ', 
          price: 0 ,
          category: '',
          quantity:'',
        })
      console.log(product)
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          setProduct((prevProduct)=>{
            return {...prevProduct ,[event.target.name]:event.target.value}
          })
        
        }
      
        const handleSubmit = async(e: FormEvent) => {
          e.preventDefault()
        const formData= new FormData()
        formData.append('title',product.title)
        formData.append('description' , product.description)
        formData.append('image' , product.image)
        formData.append('price' , String(product.price))
        formData.append('category' , product.category)
        formData.append('quantity' , product.quantity)

         dispatch(createProduct(formData))
         dispatch(fetchProducts())
       console.log("formdata",formData)
      
        }
        useEffect(() => {
         dispatch(fetchProducts())
        },[dispatch]); 
  
        const handelDelet=(slug :string)=>{
          dispatch(deleteProduct(slug))
          }

          const handelSearch = (event :ChangeEvent<HTMLInputElement>)=> {
            const searchKeyword= event.target.value;
            dispatch (searchProduct((searchKeyword)));
  
        }
    const theProducts =searchTerm?products.filter((product)=> 
    product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())):products;
    const inputStyle =
    'w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-400'
  const labelStyle = 'block text-sm font-medium text-gray-600'
  

  return (

    <div><TextField label="searching for .."  onChange={handelSearch} value={searchTerm}  /> 
    <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-8">
    <div>
         <h3 className="text-2xl font-bold">Add a new product </h3>
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label htmlFor="title" className={labelStyle}>
          title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={product.title}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className={labelStyle}>
          Image URL:
        </label>
        <input
          type="text"
          name="image"
          id="image"
          value={product.image}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className={labelStyle}>
          description:
        </label>
        <input
        type='text'
          name="description"
          id="description"
          value={product.description}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className={labelStyle}>
          category: (plesse provid the Category Id )
        </label>
        <input
          type="text"
          name="category"
          id="category"
          value={product.category}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className={labelStyle}>
          quantity:
        </label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          value={product.quantity}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className={labelStyle}>
          price:
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={product.price}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:border-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        Add Product
      </button>
    </form>
    </div>
      {/* <NewProductWrapper /> */}
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
