/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/products/productSlice'
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


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
