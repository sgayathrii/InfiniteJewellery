import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch, Product } from "../types/types";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";


import { fetchProductData } from "../redux/thunks/productListThunk";
import ProductCard from "./ProductCard";

export default function NewCollections() {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector(
    (state: RootState) => state.products.products
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const newCollectionsProducts = productList.filter(
    (product: Product) => product.collections === "New"
  );

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
      {newCollectionsProducts.map((product: Product) => (
        <Grid item xs={12} sm={6} md={3} lg={2} key={product.designerId}>         
          <ProductCard product={product} isNewCollection={true}/>
        </Grid>
      ))}
    </Grid>
  );
}