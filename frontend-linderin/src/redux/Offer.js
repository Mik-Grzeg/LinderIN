import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { incrementByAmount } = counterSlice.actions

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer
