import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalSlice.reducer";
import productsReducer from "./reducers/productsSlice.reducer";
import cartReducer from "./reducers/cartSlice.reducer";
import viewReducer from "./reducers/viewSlice.reducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productsReducer,
    cart: cartReducer,
    view: viewReducer,
  },
});

export default store;
