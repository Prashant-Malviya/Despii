import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLanguage: "French",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state) => state.language.selectedLanguage;

export default languageSlice.reducer;
