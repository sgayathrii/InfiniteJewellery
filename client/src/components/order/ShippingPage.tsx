import React from "react";
import { useLocation } from "react-router-dom";

import ShippingForm from "../form/ShippingForm";
import CurrentOrder from "./CurrentOrder";

export default function ShippingPage() {
  const location = useLocation();

  const cartList = location.state?.cartList || [];

  return (
    <div className="shipping-page-container">
      <div className="shipping-form-container">
        <ShippingForm />
      </div>
      <div className="current-order-container">
        <CurrentOrder cartList={cartList} />
      </div>
    </div>
  );
}
