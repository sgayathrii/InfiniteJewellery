import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import { RootState, AppDispatch, Product } from "../../types/types";
import { fetchProductsByCategory } from "../../redux/thunks/category";
import ProductCard from "../../pages/ProductCard";
import { fetchProductData } from "../../redux/thunks/productListThunk";


export default function ProductListByCategory() {
  
    const dispatch = useDispatch<AppDispatch>();
    const productsByCategory = useSelector(
      (state: RootState) => state.category.productsByCategory
    );
    const isLoading = useSelector((state: RootState) => state.products.isLoading);
    const { category } = useParams<{category:string}>();

    useEffect(() => {
        dispatch(fetchProductData());
      }, [dispatch]);
  
    useEffect(() => {
      if (category) {
        dispatch(fetchProductsByCategory(category));
      }
    }, [category, dispatch]);
  
    if (isLoading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      );
    }

  return (
    <Grid container spacing={1} m={1}>
    {productsByCategory?.map((product: Product) => (
      <Grid item xs={12} sm={6} md={3} lg={2} key={product.designerId}>
        <ProductCard product={product} />
      </Grid>
    ))}
  </Grid>   
  )
}
