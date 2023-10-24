/* eslint-disable prettier/prettier */
export type Product = {
    id: number
    name: string
    image: string
    description: string
    categories: number[]
    variants: string[]
     sizes: string[]
     price:number
  }
  
  export type ProductState = {
    products: Product[]
    error: null | string
    isLoading: boolean
    searchTerm: string
    SingleProduct:string|null
}
export type CategoryState= {
categories:Category[]
error:null|string
isLoading:boolean

}

export type Category ={
  id : number
  name:string

}
export type User ={
  id:number
  firstName:string
  lastName:string
  email:string
  password:string
  role:string
}
export type UsersState ={
  users:User[]
  error:null|string
  isLoading:boolean
  isLoggedIn:boolean
  isLoggedOut:boolean
  userData:User |null
}

export type searchProduct={
  payload: number;
  type: "products/searchProduct";
  
}