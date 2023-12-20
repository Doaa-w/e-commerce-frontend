/* eslint-disable prettier/prettier */
import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { createCategories } from '../redux/slices/products/CategorySlice'
import { AppDispatch } from '../redux/store'
import { Button } from '@mui/material'




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
    'w-40 px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-400 bg-blue-500'
  const labelStyle = 'block text-sm font-medium text-gray-600'
  return (
    <div>
      <h3 className="text-2xl font-bold">Add Category</h3>
    <form onSubmit={handleSubmit} className="p-1 bg-gray-5 rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className={labelStyle}> Name: </label>
        <input type="text" name="name" id="name"
          value={category}
          onChange={handleChange}
          className={inputStyle} required />
      </div>
        <Button variant="contained" size="small" color="success" type="submit"> Add Category</Button> 
    </form> 

    </div>
  )
}
