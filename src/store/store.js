import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice.reducer";
import modalReducer from "./reducers/modalSlice.reducer";
import productsReducer from "./reducers/productsSlice.reducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    products: productsReducer,
  },
});

export default store;
