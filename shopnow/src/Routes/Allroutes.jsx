import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/cart/pages/Cart"
import React from "react";
import Homepage from "../Pages/HomePage/HomePage"
import Products from "../Pages/ProductsPage/Products";
import Login from "./../Pages/Signup_Login/Login";
import Basepage from "../Pages/BasePage";
import PrivateRoute from "../Components/PrivateRoute";
import SingleProductPage from "../Pages/SingleProductPage";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/base" element={<Basepage />}></Route>
      <Route
        path="/products"
        element={
          <Products />
        }
      ></Route>
      <Route
        path="/products/:id"
        element={
          <SingleProductPage />
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
          <Cart/>
          </PrivateRoute>
        }
      ></Route>
      <Route path="/payment" element={
       <PrivateRoute>
      <PaymentPage />
      </PrivateRoute>
      }></Route>
    </Routes>
  );
};

export default Allroutes;
