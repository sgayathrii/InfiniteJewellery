import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product, ProductWithQuantity } from "../../types/types";

type InitialState = {
  products: Product[];
  isLoading: boolean;
  searchResult: Product[] | [];
  favoriteList: Product[];
  cartList: ProductWithQuantity[]; 
  randomProducts: Product[] | null;
  currentProductIndex: number;  
}

const initialState: InitialState = {
  products: [],
  isLoading: true,
  searchResult: [],
  favoriteList: [],
  cartList: [], 
  randomProducts: [], 
  currentProductIndex: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    searchProduct: (state, action: PayloadAction<string>) => {
      const result = state.products.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.searchResult = result;
    },
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const favoriteProducts = action.payload;
      state.favoriteList.push(favoriteProducts);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.favoriteList = state.favoriteList.filter(
        (product) => product._id !== productId
      );
    }, 
    setRandomProducts: (state, action: PayloadAction<Product[]>) => {
      state.randomProducts = action.payload;      
    },
    setRandomProductIndex: (state, action: PayloadAction<number>) => {
      state.currentProductIndex = action.payload;
    },    
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
