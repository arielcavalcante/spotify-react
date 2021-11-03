
import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload
    },
    logout: (state, action) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserData, logout } = userReducer.actions

export default userReducer.reducer