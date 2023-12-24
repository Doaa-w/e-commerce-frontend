/* eslint-disable prettier/prettier */
import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { createCategories } from '../redux/slices/products/CategorySlice'
import { AppDispatch } from '../redux/store'

import { Button } from '@mui/material'
import SendIcon from "@mui/icons-material/Send";

export function AddNewCategory() {
  const dispatch = useDispatch<AppDispatch>()
  const [category, setCategory] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
   setCategory(event?.target.value)
  }
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(createCategories(category))
    setCategory('') 
  }
    const inputStyle =
    'w-600 px-3 py-2 text-black border rounded-lg border-blue-400  '
  const labelStyle = 'block text-sm font-medium text-gray-600'
  return (
    <div className='flex'>
    <form onSubmit={handleSubmit} className="p-1 bg-gray-5 rounded-lg">
      <div className="mb-4">
        <input type="text" name="name" id="name"
          value={category}
          onChange={handleChange}
          className={inputStyle} required />
              {/* <Button variant="outlined" size="small" startIcon={<SendIcon/>} type="submit"> Add Category</Button>  */}
              
      </div>
      <Button variant="outlined" size="small" startIcon={<SendIcon/>} type="submit"> Create Category</Button>
    </form> 

    </div>
  )
}
