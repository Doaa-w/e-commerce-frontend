/* eslint-disable prettier/prettier */
export type Product = {
    _id: string
    slug:string
    title: string
    image: string
    description: string
    category: string
    quantity: string
    price:number
  }
  
  export type cartState={
    cartItems:Product[]
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
  _id : number
  name:string

}
export type OrdersState= {
  orders:Order[]
  error:null|string
  isLoading:boolean
  
  }
  
  export type Order ={
    id : number
    productId: number
    userId: number
    purchasedAt: number
  
  }
export type User ={
  _id:string
  first_name:string
  last_name:string
  email:string
  password:string
  phone:string
  address: string
  isAdmin:boolean;
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