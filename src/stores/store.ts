import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '@/stores/slices/example-slice'

export const store = configureStore({
  reducer: {
    data: dataSlice,
    // Add your reducers here
    // For example, if you have a user slice:
    // user: userReducer,
    // you can add it like this:
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
