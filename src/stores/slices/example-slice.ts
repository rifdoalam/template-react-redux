import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { DataState } from '@/types/example-type'


// Define the initial state using that type





const initialState: DataState = {
  data: [],

};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // Add your reducers here
    setData: (state, action: PayloadAction<DataState>) => {
      state.data = action.payload.data
    }
  },
})

export const { setData } = dataSlice.actions
export default dataSlice.reducer
