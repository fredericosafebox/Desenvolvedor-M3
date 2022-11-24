import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.value = action.payload;
    },
    resetName: (state) => {
      state.value = "";
    },
  },
});

export const { updateName, resetName } = nameSlice.actions;
export default nameSlice.reducer;
