/* eslint-disable prettier/prettier */
import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { ProductForm } from './ProductForm'
import { AppDispatch } from '../redux/store'
import { Category} from '../Types'
import { addCategory } from '../redux/slices/products/CategorySlice'

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
    // Send the product data to your backend or in this case send it to Redux
    console.log('New category data:', category)
    // let's add Id property to the object (usually IDs are generated automatically on the backend)
    category.id = +new Date()
    console.log('Category:', category)

    dispatch(addCategory({ category}))
    // Reset the form
    setCategory(initialCategoriesState)
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">Add a new Category</h3>
      {/* makinga categoryform  */}
      {/* <categoryForm handleSubmit={handleSubmit} handleChange={handleChange} category={category} /> */}
    </div>
  )
}
