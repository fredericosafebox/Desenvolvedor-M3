import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  view: "",
  fClass: "",
  oClass: "",
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
      state.fClass = "inactive";
      state.oClass = "inactive";
    },
    toggleFilter(state) {
      if (state.view === "filter") {
        state.fClass = "active";
      } else {
        state.fClass = "inactive";
      }
    },
    toggleOrder(state) {
      if (state.view === "order") {
        state.oClass = "active";
      } else {
        state.oClass = "inactive";
      }
    },
  },
});

export const { open, close, toggleFilter, toggleOrder } = modalSlice.actions;
export default modalSlice.reducer;
