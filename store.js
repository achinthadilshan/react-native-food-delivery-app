import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './src/frontend/slices/CartSlice'
import restaurantSlice from './src/frontend/slices/RestaurantSlice'

export const store = configureStore({
   reducer: {
      cart: cartSlice,
      restaurant: restaurantSlice,
   },
})
