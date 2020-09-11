import { configureStore } from '@reduxjs/toolkit'
import ExampleReducer from './slices/exampleSlice'

export default configureStore({
  reducer: {
    example: ExampleReducer
  },
  devTools: true,
})
