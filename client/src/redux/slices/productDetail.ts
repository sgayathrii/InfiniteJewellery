import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";

type InitialState = {
  loading: boolean;
  productDetail: Product | null;
};

const initialState: InitialState = {
  loading: true,
  productDetail: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetail: (state, action: PayloadAction<Product>) => {
      state.productDetail = action.payload;
      state.loading = false;
    },
  },
});

export const productDetailActions = productDetailSlice.actions;
const productDetailReducer = productDetailSlice.reducer;
export default productDetailReducer;