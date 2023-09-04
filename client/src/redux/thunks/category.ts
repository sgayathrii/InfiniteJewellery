import axios from "axios";
import {BASE_URL} from "../../api";
import { AppDispatch, Category, Product } from "../../types/types";
import { categoryActions } from "../slices/category";

export function fetchCategoryList() {
  const categoryUrl = `${BASE_URL}/categories`;
    
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<Category[]>(categoryUrl);
      const categoryList = response.data;
      dispatch(categoryActions.setCategories(categoryList));
    } catch (error) {
      console.error("Error in fetching category list: ", error);
    }
  };
}

export function fetchProductsByCategory(category: string) {
  const productUrl = `${BASE_URL}/categories/${category}`;
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<Product[]>(productUrl);
      const productsByCategory = await response.data;
      console.log("Products by Category:", productsByCategory);
      dispatch(categoryActions.setProductsByCategory(productsByCategory));
    } catch (error) {
      console.error("Error in fetching products by category: ", error);
    }
  };
}
