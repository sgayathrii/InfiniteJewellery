import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch, Product } from "../types/types";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchProductData } from "../redux/thunks/productListThunk";
import ProductCard from "./ProductCard";

export default function Sale() {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  // Filter products based on the discount
  const saleProducts = productList.filter((product: Product) => {
    if (product.discountPercentage != null) {
      return true; 
    } else if (product.salePrice != null) {
      return true; 
    } else {
      return false;
    }
  });

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
      {saleProducts.length > 0 ? (
        saleProducts.map((product: Product) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={product.designerId}>
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <div>No products on sale.</div>
      )}
    </Grid>
  );
}