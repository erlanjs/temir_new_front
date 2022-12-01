import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState = {
  basket: JSON.parse(localStorage.getItem('basket') as any) || [],
  error: '',
  isLoading: false
} as any

export const ReducerBasket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    basketFetching(state) {
      state.isLoading = true
    },
    basketSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false
      state.basket = JSON.parse(localStorage.getItem('basket') as any) || []
      state.basket = [...state.basket, action.payload]
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    basketError(state, action: PayloadAction<any>) {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default ReducerBasket.reducer