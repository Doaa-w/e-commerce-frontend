/* eslint-disable prettier/prettier */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  createProduct,
  deleteProduct,
  fetchProducts,
  searchProduct,
  updateThePorduct,
} from '../redux/slices/products/ProductSlice'
import { AppDispatch, RootState } from '../redux/store' 

import { Product } from '../Types'
import { TextField } from '@mui/material'
import { Button  } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function ProductsManager() {
 
    const {products,  searchTerm}= useSelector((state:RootState) =>
        state.productsR );
        const dispatch =useDispatch<AppDispatch> ();
        const [myProduct, setProduct] = useState({
          title: '',
          description: '',
          image: ' ', 
          price: 0 ,
          category: '',
          quantity:'',
        })
        const [updatedProduct , setUpdatedProduct]=useState({
          title: '',
          price: 0
        })
        const [isFormOpen ,setIsFormOpen]= useState(false)
        const [selectedProduct ,setSelectedProduct]= useState('')
        const handelFormOpen=(slug: string ,product:Product)=>{
          try {
            setIsFormOpen(!isFormOpen)
            setUpdatedProduct(product)
            setSelectedProduct(slug)
          } catch (error) {
            console.log(error)
          }
        }
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          setProduct((prevProduct)=>{
            return {...prevProduct ,[event.target.name]:event.target.value}
          })
        
        }
      const handelUpdate= async(event:FormEvent)=>{
        event.preventDefault()
        await updateThePorduct(selectedProduct,{
          title:updatedProduct.title,
          price: updatedProduct.price
        })
      }
        const handleSubmit = async(e: FormEvent) => {
          e.preventDefault()
        const formData= new FormData()
        formData.append('title',myProduct.title)
        formData.append('description' , myProduct.description)
        formData.append('image' , myProduct.image)
        formData.append('price' , String(myProduct.price))
        formData.append('category' , myProduct.category)
        formData.append('quantity' , myProduct.quantity)

         dispatch(createProduct(formData))
         dispatch(fetchProducts())
       console.log("formdata",formData)
      
        }
        useEffect(() => {
         dispatch(fetchProducts())
        },[dispatch]); 
  
        const handelDelet=(slug :string)=>{
          dispatch(deleteProduct(slug))
          toast.info("You have successflly deleted a Product ")
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
  
  const creacted=()=>{
    toast.info("You have successflly created a Product ")   
  }
  const updated=()=>{
    toast.info("You have successflly updated a Product ")   
  }
  return (
    <div >
 <TextField label="searching for .."  onChange={handelSearch} value={searchTerm} className='m-8' /> 
    <div className="flex flex-wrap m-6">   
    <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-8">
    <div  >
         <h3 className="text-2xl font-bold">Add a new product </h3>
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-4 flex flex-wrap">
        <label htmlFor="title" className={labelStyle}>
          title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={myProduct.title}
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
          value={myProduct.image}
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
          value={myProduct.description}
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
          value={myProduct.category}
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
          value={myProduct.quantity}
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
          value={myProduct.price}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:border-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600" onClick={creacted}>
        Add Product
      </button>
    </form>
    </div>
      <div className="  card grid gap-4">
        <ul>
          {theProducts.length >0 && theProducts.map((product:Product) => (
            <li key={product._id} className="flex items-center gap-4 text-2xl mb-2">
              <img src={`http://localhost:5050/${product.image}`} alt={product.title} width="70" />
              <span>{product.title}</span>
              <Button variant="outlined" size="small" 
                           onClick={() => handelFormOpen(product.slug , product)}>Edit</Button>

          <Button variant="outlined" size="small" startIcon={<DeleteIcon/>}
                           onClick={() => handelDelet(product.slug)} ></Button>
                           <div>
      {isFormOpen && selectedProduct === product.slug  &&(
        <div>
          <form action="" onSubmit={handelUpdate}>
            <input placeholder='title' name='title' value={updatedProduct.title}
             onChange={(event)=> {setUpdatedProduct({... updatedProduct , title:event.target.value})}}/>
             <input placeholder='price' name='title' value={updatedProduct.price}
             onChange={(event)=>{ setUpdatedProduct({... updatedProduct , price:Number(event.target.value)})}}/>
         <Button type='submit' onClick={updated}>update</Button>
          </form>
        </div>
   ) } 
    </div>
            </li>
          ))}
        </ul>
      </div>

      
    </div>

    </div>
    <ToastContainer position="top-right"/>
    </div>
  )
}
export default ProductsManager