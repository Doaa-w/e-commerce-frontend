import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/products/productSlice'
import CategoryReducer from './slices/products/CategorySlice'
import UsersReducer from './slices/products/UserSlice'

export const store = configureStore({
  reducer: {
    productsR: productsReducer,
    categoriesR: CategoryReducer,
    usersR: UsersReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
