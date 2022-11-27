import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  view: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action) => {
      state.value = true;
      state.view = action.payload;
    },
    close: (state) => {
      state.value = false;
      state.view = "";
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
