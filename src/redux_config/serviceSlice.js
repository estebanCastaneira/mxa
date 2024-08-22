import { createSlice } from "@reduxjs/toolkit"

const serviceSlice = createSlice({
  name: "serivces",
  initialState: [],
  reducers: {
    setServices(state, action) {
      return [...action.payload.services]
    },
  },
})
export const { setServices } = serviceSlice.actions
export default serviceSlice.reducer
