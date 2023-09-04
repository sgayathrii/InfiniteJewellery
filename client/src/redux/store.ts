import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/productList";
import productDetailReducer from "./slices/productDetail";
import userReducer from "./slices/user";
import cartReducer from "./slices/carts";
import orderReducer from "./slices/orders";
import categoryReducer from "./slices/category"

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
    users: userReducer,
    cart: cartReducer,
    order: orderReducer,
    category: categoryReducer
  },
});

export default store;
