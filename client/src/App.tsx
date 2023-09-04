import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import ProductDetail from "./components/product/ProductDetail";
import AccountLoginForm from "./components/form/AccountLoginForm";
import NewCollections from "./pages/NewCollections";
import About from "./pages/About";
import Sale from "./pages/Sale";
import AccountRegisterForm from "./components/form/AccountRegisterForm";
import UserInformation from "./pages/UserInformation";
import OrderHistory from "./components/user/OrderHistory";
import ShippingPage from "./components/order/ShippingPage";
import FavoriteList from './pages/FavoriteList';
import Footer from "./components/footer/Footer";
import ProductListByCategory from "./components/product/ProductListByCategory";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Stores from "./pages/Stores";
import ShoppingCart from "./pages/ShoppingCart";
import ShippingOrder from "./components/order/ShippingOrder";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/new" element={<NewCollections />}></Route>
        <Route path="/login" element={<AccountLoginForm />}></Route>
        <Route path="/register" element={<AccountRegisterForm />}></Route>        
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/sale" element={<Sale />}></Route>
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/ship-order" element={<ShippingOrder />} />
        <Route path="/user-profile" element={<UserInformation />} />
        <Route path="/favorites" element={<FavoriteList />} />
        <Route path="/:category" element={<ProductListByCategory />} /> 
        <Route path="/order-details/:id" element={<ProductListByCategory />} />            
        <Route path="/stores" element={<Stores />} />   
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />           
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
