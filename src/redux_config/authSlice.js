import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "token",
  initialState: {},
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return (state = { token: null });
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
