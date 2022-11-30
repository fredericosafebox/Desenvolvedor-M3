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
    (state.filteredList = state.filteredList.filter((prod) => {
      const fit = state.tags.prices.filter((tag) => {
        const [min, max] = tag.split(";");
        return prod.price >= Number(min) && prod.price <= Number(max);
      });
      return fit.length > 0;
    }));
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
          (result = result.filter((prod) => {
            const fit = state.tags.prices.filter((tag) => {
              const [min, max] = tag.split(";");
              return prod.price >= Number(min) && prod.price <= Number(max);
            });
            return fit.length > 0;
          }));
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
          (result = result.filter((prod) => {
            const fit = state.tags.prices.filter((tag) => {
              const [min, max] = tag.split(";");
              return prod.price >= Number(min) && prod.price <= Number(max);
            });
            return fit.length > 0;
          }));

        state.tags.colors.length > 0 &&
          (result = result.filter((prod) =>
            state.tags.colors.includes(prod.color.toLowerCase())
          ));
        state.filteredList = [...result];
      }
    },
    addPrice(state, action) {
      const [min, max] = action.payload.split(";");
      state.tags.prices = [...state.tags.prices, action.payload];
      if (state.tagCounter < 1) {
        const products = state.value.filter((prod) => {
          return prod.price >= Number(min) && prod.price <= Number(max);
        });
        state.filteredList = [...products];
        state.tagCounter += 1;
      } else {
        let result = state.value.filter((prod) => {
          const fit = state.tags.prices.filter((tag) => {
            const [min, max] = tag.split(";");
            return prod.price >= Number(min) && prod.price <= Number(max);
          });
          return fit.length > 0;
        });
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
      state.tags.prices = state.tags.prices.filter(
        (price) => price !== action.payload
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
    orderBy(state, action) {
      const filtered = [...state.filteredList];
      const vitrine = [...state.value];
      switch (action.payload) {
        case "date":
          filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
          vitrine.sort((a, b) => new Date(b.date) - new Date(a.date));
          state.filteredList = [...filtered];
          state.value = [...vitrine];
          break;
        case "high":
          filtered.sort((a, b) => b.price - a.price);
          vitrine.sort((a, b) => b.price - a.price);
          state.filteredList = [...filtered];
          state.value = [...vitrine];
          break;
        default:
          filtered.sort((a, b) => a.price - b.price);
          vitrine.sort((a, b) => a.price - b.price);
          state.filteredList = [...filtered];
          state.value = [...vitrine];
      }
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
  orderBy,
} = produceSlice.actions;
export default produceSlice.reducer;
