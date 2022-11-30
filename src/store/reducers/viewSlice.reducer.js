import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
  breakpoint: 768,
  width: 0,
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setWidth(state, action) {
      state.width = action.payload;
      if (state.breakpoint < state.width) {
        state.isMobile = false;
      } else {
        state.isMobile = true;
      }
    },
  },
});

export const { setWidth } = viewSlice.actions;
export default viewSlice.reducer;
