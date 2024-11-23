import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subTotal: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { item } = action.payload;
      const items = state.items;
      const existingItem = items.find((i) => i.id === item.id);
      if (existingItem && item?.quantity) {
        state.items = items.map((i) => {
          if (i.id === existingItem.id) i.quantity = item.quantity;
          return i;
        });
      } else if (existingItem) {
        state.items = items.map((i) => {
          if (i.id === item.id) i.quantity += 1;
          return i;
        });
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      // state.subTotal = state.items.reduce((total, item) => {
      //   console.log(total, item);
      // }, 0);
      state.subTotal = state.items.reduce(
        (total, item) =>
          total + Math.round(parseFloat(item?.price.slice(1)) * item?.quantity),
        0
      );
      state.total = state.subTotal + 100;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === id) item.quantity = quantity;
        return item;
      });
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItem, updateQuantity } = cartSlice.actions;
