import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const produceSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadList(state, action) {
      state.value = [...action.payload];
    },
    cleanList(state) {
      state.value = [];
    },
  },
});

export const { loadList, cleanList } = produceSlice.actions;
export default produceSlice.reducer;
