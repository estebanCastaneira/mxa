import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admins",
  initialState: [],
  reducers: {
    setAdmins(state, action) {
      return [...action.payload];
    },
    storeAdmin(state, action) {
      const { id, firstname, lastname, email, role } = action.payload;
      const admin = {
        id,
        firstname,
        lastname,
        email,
        role,
      };
      return [...state, admin];
    },
    updateAdmin(state, action) {
      const { id, firstname, lastname, email, role } = action.payload;
      const adminUpdate = {
        id,
        firstname,
        lastname,
        email,
        role,
      };
      return state.map((admin) => (admin.id !== id ? admin : adminUpdate));
    },
    deleteAdmin(state, action) {
      return state.filter((admin) => admin.id !== action.payload);
    },
    clearAdmins(state, action) {
      return (state = []);
    },
  },
});
export const { setAdmins, storeAdmin, updateAdmin, deleteAdmin, clearAdmins } =
  adminSlice.actions;
export default adminSlice.reducer;
