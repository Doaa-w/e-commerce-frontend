/* eslint-disable prettier/prettier */
import { ChangeEvent, FormEvent } from 'react'
import { Product } from '../Types'

type ProductFormProps = {
  product: Product
  handleSubmit: (e: FormEvent) => void
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function ProductForm({ product, handleSubmit, handleChange }: ProductFormProps) {
  const inputStyle =
    'w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:border-blue-400'
  const labelStyle = 'block text-sm font-medium text-gray-600'

  return (
    <div>
         <h3 className="text-2xl font-bold">Add a new product 1</h3>
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
        <textarea
          name="description"
          id="description"
          value={product.description}
          onChange={handleChange}
          className={inputStyle}
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
          value={product.price }
          onChange={handleChange}
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
  )
}
