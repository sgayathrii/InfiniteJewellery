import axios from "axios";
import {BASE_URL} from "../../api";
import { AppDispatch, Product } from "../../types/types";
import { productActions } from "../slices/productList";

export function fetchProductData() {
  const productUrl = `${BASE_URL}/products`;
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(productUrl);
      const productData = await response.data;

      const randomProducts: Product[] = [];
      for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * productData.length);
        randomProducts.push(productData[randomIndex]);
      }
      dispatch(productActions.getProductData(productData));
      dispatch(productActions.setRandomProducts(randomProducts));
    } catch (error) {
      console.error("Error in fetching product data: ", error);
    }
  };
}
