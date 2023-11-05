/* eslint-disable prettier/prettier */
import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { CategoryForm } from './CategortyForm'
import { addCategory } from '../redux/slices/products/CategorySlice'
import { AppDispatch } from '../redux/store'
import { Category } from '../Types'


const initialCategoriesState: Category = {
  id: 0,
  name: '',

}

export function AddNewCategory() {
  const dispatch = useDispatch<AppDispatch>()
  const [category, setCategory] = useState<Category>(initialCategoriesState)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    const isList = name === 'categories' || name === 'variants' || name === 'sizes'
    if (isList) {
      setCategory({
        ...category,
        [name]: value.split(',')
      })
      return
    }

    setCategory({
      ...category,
      [name]: value
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('New category data:', category)
    category.id = +new Date()
    console.log('Category:', category)

    dispatch(addCategory({ category}))

    setCategory(initialCategoriesState)
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">Add Category</h3>
      <CategoryForm handleSubmit={handleSubmit} handleChange={handleChange} category={category} />
    </div>
  )
}
