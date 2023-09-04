import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductWithQuantity, Product } from "../../types/types";

type InitialState = {
  cartList: ProductWithQuantity[]
}

const initialState: InitialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductWithQuantity>) => {
      const toCartproducts = action.payload;
      const existingProduct = state.cartList.find(
        (item) => item._id === toCartproducts._id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartList.push({ ...toCartproducts, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const removeProductId = action.payload;
      state.cartList = state.cartList.filter(
        (product) => product._id !== removeProductId
      );
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingProduct = state.cartList.find(
        (item) => item._id === productId
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingProduct = state.cartList.find(
        (item) => item._id === productId
      );

      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    clearCart: (state) => {
      state.cartList = [];
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
