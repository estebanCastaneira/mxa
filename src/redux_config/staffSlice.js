import { createSlice } from "@reduxjs/toolkit"

const staffSlice = createSlice({
  name: "staff",
  initialState: [],
  reducers: {
    setStaff(state, action) {
      const { accountants, administratives } = action.payload

      return [accountants, administratives]
    },
    storeStaff(state, action) {
      const {
        id,
        firstname,
        lastname,
        email,
        position_es,
        position_en,
        description_es,
        description_en,
        linkedin,
        image,
      } = action.payload
      const staff = {
        id,
        firstname,
        lastname,
        email,
        position_es,
        position_en,
        description_es,
        description_en,
        linkedin,
        image,
      }
      return [...state, staff]
    },
    updateStaff(state, action) {
      const {
        id,
        firstname,
        lastname,
        email,
        position_es,
        position_en,
        description_es,
        description_en,
        linkedin,
        image,
      } = action.payload
      const staffUpdate = {
        id,
        firstname,
        lastname,
        email,
        position_es,
        position_en,
        description_es,
        description_en,
        linkedin,
        image,
      }
      return state.map((staff) => (staff.id !== id ? staff : staffUpdate))
    },
    deleteStaff(state, action) {
      return state.filter((staff) => staff.id !== action.payload)
    },

    clearStaff(state, action) {
      return (state = [])
    },
  },
})
export const { setStaff, storeStaff, updateStaff, deleteStaff, clearStaff } =
  staffSlice.actions
export default staffSlice.reducer
