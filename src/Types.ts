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
    Product:[]
    error: null | string
    isLoading: boolean
    searchTerm: string
    SingleProduct:Product
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
  userData:User |null
}

 export type searchProduct={
  payload: number;
  type: "products/searchProduct";
  
}
// type fetchProductsPending=ReturnType<typeof fetchProducts.pending>;
// type fetchProductsfulfilled=ReturnType<typeof fetchProducts.fulfilled>;
// type fetchProductsRejected=ReturnType<typeof fetchProducts.rejected>;

// type fetchProductPending=ReturnType<typeof fetchProduct.pending>;
// type fetchProductfulfilled=ReturnType<typeof fetchProduct.fulfilled>;
// type fetchProductRejected=ReturnType<typeof fetchProduct.rejected>;

// export type productsActions=
// |fetchProductsPending
// |fetchProductsfulfilled
// |fetchProductsRejected
// |fetchProductPending
// |fetchProductfulfilled
// |fetchProductRejected

// export type AppsDispatch= ThunkDispatch<RootState,void,productsActions>