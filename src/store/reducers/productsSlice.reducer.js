import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  filteredList: [],
  tagCounter: 0,
  tags: {
    colors: [],
    sizes: [],
    prices: [],
  },
  range: 3,
  rebase: 0,
};

const updateFilteredList = (state) => {
  state.filteredList = [...state.value];
  state.tags.colors.length > 0 &&
    (state.filteredList = state.filteredList.filter((prod) =>
      state.tags.colors.includes(prod.color.toLowerCase())
    ));
  state.tags.sizes.length > 0 &&
    (state.filteredList = state.filteredList.filter(
      (prod) =>
        prod.size.filter((size) => state.tags.sizes.includes(size)).length > 0
    ));

  state.tags.prices.length > 0 &&
    (state.filteredList = state.filteredList.filter(
      (prod) =>
        prod.price >= Math.min(...state.tags.prices) &&
        prod.price <= Math.max(...state.tags.prices)
    ));
};

export const produceSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadList(state, action) {
      state.value = [...action.payload];
    },
    resetFilters(state) {
      state.filteredList = [];
      state.tags.colors = [];
      state.tags.prices = [];
      state.tags.sizes = [];
      state.tagCounter = 0;
      state.rebase += 1;
    },
    addColor(state, action) {
      state.tags.colors = [...state.tags.colors, action.payload.toLowerCase()];
      state.tagCounter += 1;
      if (state.tagCounter == 1) {
        state.filteredList = state.value.filter(
          (prod) => prod.color.toLowerCase() === action.payload.toLowerCase()
        );
      } else {
        let result = state.value.filter((prod) =>
          state.tags.colors.includes(prod.color.toLowerCase())
        );
        state.tags.sizes.length > 0 &&
          (result = result.filter(
            (prod) =>
              prod.size.filter((size) => state.tags.sizes.includes(size))
                .length > 0
          ));

        state.tags.prices.length > 0 &&
          (result = result.filter(
            (prod) =>
              prod.price >= Math.min(...state.tags.prices) &&
              prod.price <= Math.max(...state.tags.prices)
          ));
        state.filteredList = [...result];
      }
    },
    addSize(state, action) {
      state.tags.sizes = [...state.tags.sizes, action.payload];
      state.tagCounter += 1;
      if (state.tagCounter == 1) {
        const products = state.value.filter((prod) =>
          prod.size.includes(action.payload)
        );
        state.filteredList = [...products];
      } else {
        let result = state.value.filter(
          (prod) =>
            prod.size.filter((size) => state.tags.sizes.includes(size)).length >
            0
          //state.tags.sizes.includes(prod.size)
        );
        state.tags.prices.length > 0 &&
          (result = result.filter(
            (prod) =>
              prod.price >= Math.min(...state.tags.prices) &&
              prod.price <= Math.max(...state.tags.prices)
          ));

        state.tags.colors.length > 0 &&
          (result = result.filter((prod) =>
            state.tags.colors.includes(prod.color.toLowerCase())
          ));
        state.filteredList = [...result];
      }
    },
    addPrice(state, action) {
      //hash min;max => split => armazenar no reducer
      const [min, max] = action.payload.split(";");
      state.tags.prices = [...state.tags.prices, Number(min), Number(max)];

      if (state.tagCounter < 1) {
        const products = state.value.filter(
          (prod) => prod.price >= Number(min) && prod.price <= Number(max)
        );
        state.filteredList = [...products];
        state.tagCounter += 1;
      } else {
        let result = state.value.filter(
          (prod) =>
            prod.price >= Math.min(...state.tags.prices) &&
            prod.price <= Math.max(...state.tags.prices)
        );
        state.tags.sizes.length > 0 &&
          (result = result.filter(
            (prod) =>
              prod.size.filter((size) => state.tags.sizes.includes(size))
                .length > 0
          ));

        state.tags.colors.length > 0 &&
          (result = result.filter((prod) =>
            state.tags.colors.includes(prod.color.toLowerCase())
          ));
        state.filteredList = [...result];
        state.tagCounter += 1;
      }
    },
    removeColor(state, action) {
      state.tags.colors = state.tags.colors.filter(
        (color) => color !== action.payload.toLowerCase()
      );
      state.tagCounter -= 1;
      if (state.tagCounter == 0) {
        state.filteredList = [];
      } else {
        updateFilteredList(state);
      }
    },
    removeSize(state, action) {
      state.tags.sizes = state.tags.sizes.filter(
        (size) => size !== action.payload
      );
      state.tagCounter -= 1;
      if (state.tagCounter == 0) {
        state.filteredList = [];
      } else {
        updateFilteredList(state);
      }
    },
    removePrice(state, action) {
      const [min, max] = action.payload.split(";");
      state.tags.prices = state.tags.prices.filter(
        (price) => price !== Number(min) && price !== Number(max)
      );
      state.tagCounter -= 1;
      if (state.tagCounter == 0) {
        state.filteredList = [];
      } else {
        updateFilteredList(state);
      }
    },
    loadMore(state) {
      state.range += 3;
    },
  },
});

export const {
  loadList,
  resetFilters,
  addColor,
  addPrice,
  addSize,
  removeColor,
  removePrice,
  removeSize,
  loadMore,
} = produceSlice.actions;
export default produceSlice.reducer;
