import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itens: [],
  qtd: 0,
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id } = action.payload;
      const index = state.itens.findIndex((item) => item.id === id);
      if (index != -1) {
        state.itens[index].qtd += 1;
        state.qtd += 1;
        state.subtotal += state.itens[index].price;
      } else {
        const newProduct = { ...action.payload, qtd: 1 };
        state.itens = [...state.itens, newProduct];
        state.qtd += 1;
        state.subtotal += newProduct.price;
      }
    },
    clearCart: (state) => {
      state.qtd = 0;
      state.subtotal = 0;
      state.itens = [];
    },
  },
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
