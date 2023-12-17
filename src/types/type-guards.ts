import { DecodedUser } from '../redux/slices/products/ProductSlice'

export function isDecodedUser(obj: unknown): obj is DecodedUser {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'username' in obj &&
    'role' in obj &&
    'user_id' in obj
  )
}
