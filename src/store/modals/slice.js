// src/features/postsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    loginModal: false,
    cartModal: false,
    categoryModal: false,
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
    openCategoryModal: (state) => {
      state.categoryModal = true;
    },
    closeCategoryModal: (state) => {
      state.categoryModal = false;
    },
  },
});

export default modalSlice.reducer;
export const {
  openLoginModal,
  closeLoginModal,
  openCartModal,
  closeCartModal,
  openCategoryModal,
  closeCategoryModal,
} = modalSlice.actions;
