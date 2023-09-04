import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import UserProfile from "../components/user/UserProfile";
import OrderHistory from "../components/user/OrderHistory";
import AddressBook from "../components/user/AddressBook";
import { BASE_URL } from "../api";
import { useSelector } from "react-redux";
import { RootState } from "../types/types";
import axios from "axios";

export default function UserInformation() {
  const [activeTab, setActiveTab] = useState("profile");

  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );
  const cartItems = useSelector((state: RootState) => state.cart.cartList);
  const navigate = useNavigate();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
    navigate(`/user-information/${newValue}`);
  };

  const handleOrderHistoryClick = () => {
    setActiveTab("order-history");       
    navigate("/orders");
  };
  return (
    <div>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Profile" value="profile" />
        <Tab
          label="Order History"
          value="order-history"
          onClick={handleOrderHistoryClick}
        />
        <Tab label="Address Book" value="address-book" />
      </Tabs>

      {activeTab === "profile" && <UserProfile />}
      {activeTab === "order-history" && <OrderHistory />}
      {activeTab === "address-book" && <AddressBook />}
    </div>
  );
}
