/* eslint-disable prettier/prettier */
import { ChangeEvent, FormEvent} from 'react'


import { Category } from '../Types'
import { Button } from '@mui/material'

type categoryFormProps = {
    category: Category
  handleSubmit: (e: FormEvent) => void
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function CategoryForm({ category, handleSubmit, handleChange }: categoryFormProps) {
  const inputStyle =
    'w-40 px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-400 bg-blue-500'
  const labelStyle = 'block text-sm font-medium text-gray-600'

 
  return (
    <form onSubmit={handleSubmit} className="p-1 bg-gray-5 rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className={labelStyle}> Name: </label>
        <input type="text" name="name" id="name"
          value={category.name}
          onChange={handleChange}
          className={inputStyle}  />
      </div>
      <div className="mb-4">
        <label htmlFor="id" className={labelStyle}>  id: </label>
        <input  type="number"  name="id" id="id"
          value={category.id}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>
        <Button variant="contained" size="small" color="success" type="submit"> Add Category</Button> 
    </form> 
)}
