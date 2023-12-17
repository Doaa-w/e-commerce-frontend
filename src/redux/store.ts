/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/products/ProductSlice'
import CategoryReducer from './slices/products/CategorySlice'
import UsersReducer from './slices/products/UserSlice'
import OrdersReducer from './slices/products/OrdersSlice'
import cartReducer from './slices/products/cartSlice'

export const store = configureStore({
  reducer: {
    productsR: productsReducer,
    categoriesR: CategoryReducer,
    usersR: UsersReducer,
    ordersR: OrdersReducer,
    cartR: cartReducer,
  }
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
