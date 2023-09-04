import React from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "../types/types";
import { useSelector } from "react-redux";
import CartSidebarItem from "../components/cart/CartSidebarItem";

export default function ShoppingCart() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  const calculateTotalPrice = cartList.reduce<number>(
    (accumulator, current) => {
      const productTotal = current.price * current.quantity;
      return accumulator + productTotal;
    },
    0
  );

  function handleCheckOut() {
    if (!userDetail) {
      alert("Please log in to make an order.");
      return;
    }
    navigate("/shipping", { state: { cartList: cartList }});
  }

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <hr style={{ borderTop: "1px solid #ccc", marginBottom: "20px" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            My Bag
          </Typography>
        </div>
        <hr style={{ borderTop: "1px solid #ccc", marginBottom: "20px" }} />
        {cartList.length === 0 ? (
          <Typography variant="body1">Your bag is empty.</Typography>
        ) : (
          cartList.map((item) => (
            <CartSidebarItem
              key={item._id}
              cartItem={item}
              selectedImageIndex={0}
            />
          ))
        )}
      </div>
      <hr style={{ borderTop: "1px solid #ccc", marginBottom: "20px" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Shipping
        </Typography>
        <Typography variant="subtitle1">FREE</Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Total
        </Typography>
        <Typography variant="subtitle1">{calculateTotalPrice}</Typography>
      </div>
      <hr style={{ borderTop: "1px solid #ccc", marginBottom: "20px" }} />
      <div>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={handleCheckOut}
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
}
