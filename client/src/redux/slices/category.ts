import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Product } from "../../types/types";

interface CategoryState {
  productsByCategory: Product[];
  categories: Category[];  
}

const initialState: CategoryState = {
  productsByCategory: [],
  categories: [],   
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
    setProductsByCategory(state, action: PayloadAction<Product[]>) {
      state.productsByCategory = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
const categoryReducer = categorySlice.reducer;
export default categoryReducer;