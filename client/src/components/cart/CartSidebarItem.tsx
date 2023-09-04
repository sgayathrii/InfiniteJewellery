import React from 'react'
import { Grid, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import {
    AppDispatch,
    CartSidebarItemProps,
    ProductWithQuantity,    
  } from "../../types/types";
import { cartActions } from '../../redux/slices/carts';


export default function CartSidebarItem({cartItem, selectedImageIndex}: CartSidebarItemProps) {

    const dispatch = useDispatch<AppDispatch>();

    const handleRemoveFromCart = (productId: string) => {
        dispatch(cartActions.removeFromCart(productId));
      };
    
      const handleDecreaseQuantity = (productId: string) => {
        dispatch(cartActions.decreaseQuantity(productId));
      };
      
      const handleIncreaseQuantity = (productId: string) => {
        dispatch(cartActions.increaseQuantity(productId));
      };

      const calculateItemPrice = (item: ProductWithQuantity) => {
        return item.quantity * item.price;
      };
     
    
  return (
    <div>
        <Grid container spacing={2} key={cartItem._id}>
           <Grid item xs={4}>
              <img
                src={cartItem.images[selectedImageIndex]}
                alt={`Product Image ${selectedImageIndex + 1}`}
                style={{ width: "100px" }}
              />
            </Grid>
            <Grid item xs={8}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="subtitle1">{cartItem.title}</Typography>
            <IconButton size="small" onClick={() => handleRemoveFromCart(cartItem._id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",  marginTop: "8px"}}>
            <Grid container spacing={1} alignItems="center">
            <div style={{ border: "1px solid #ccc", padding: "0.5px",  display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "space-around"}}>
              <Grid item>
                <IconButton size="small" onClick={() => handleDecreaseQuantity(cartItem._id)}>
                  <RemoveIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body2">{cartItem.quantity}</Typography>
              </Grid>
              <Grid item>
                <IconButton size="small" onClick={() => handleIncreaseQuantity(cartItem._id)}>
                  <AddIcon />
                </IconButton>
              </Grid>
              </div>
            </Grid>
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              ${calculateItemPrice(cartItem)}
            </Typography>
          </div>           
            </Grid>
          </Grid>
          <hr style={{ borderTop: "1px solid #ccc", marginBottom: "20px" }} />
    </div>

  )
}
