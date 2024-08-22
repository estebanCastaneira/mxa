import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: document.getElementsByTagName("html")[0].lang,
  reducers: {
    setLang(state, action) {
      return action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
