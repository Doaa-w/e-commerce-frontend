/* eslint-disable prettier/prettier */
export type Product = {
    id: number
    name: string
    image: string
    description: string
    categories: number[]
    variants: string[]
     sizes: string[]
  }
  
  export type ProductState = {
    items: Product[]
    error: null | string
    isLoading: boolean
    searchTerm: string;
    SingleProduct:string|null
}

type searchProduct={
  payload: number;
  type: "products/searchProduct";
  
}