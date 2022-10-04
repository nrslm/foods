import { configureStore } from '@reduxjs/toolkit'
import GetFoods from '../features/GetFoods'
import Basket from '../features/Basket'
export const store = configureStore({
  reducer: {
    get: GetFoods,
    add: Basket
  },
})