// src/features/postsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    loginModal: false,
    cartModal: false,
  },
  reducers: {
    openLoginModal: (state) => {
      state.loginModal = true;
    },
    closeLoginModal: (state) => {
      state.loginModal = false;
    },
    openCartModal: (state) => {
      state.cartModal = true;
    },
    closeCartModal: (state) => {
      state.cartModal = false;
    },
  },
});

export default modalSlice.reducer;
export const { openLoginModal, closeLoginModal, openCartModal, closeCartModal } =
  modalSlice.actions;
