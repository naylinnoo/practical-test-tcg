import { combineReducers, createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import cartSlice from '@/store/slices/cartSlice'

const reducer = {
	cart: cartSlice,
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
const store = configureStore({ middleware: [thunk], reducer: reducer })
export default store
