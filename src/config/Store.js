import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../store/RootReducer'

export const Store = configureStore({
    reducer: rootReducer,
})