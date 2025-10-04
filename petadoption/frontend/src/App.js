import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Medicine from "./pages/Medicine";
import PetDetails from "./pages/PetDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Disease from "./pages/Disease";
import Food from "./pages/Food";
import Cart from "./pages/Cart";
import Accessories from "./pages/Accessories";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import Rescue from "./pages/Rescue";
import RescuePets from "./pages/RescuePets";
import UserAccount from "./pages/UserAccount"; // ✅ NEW

import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/food" element={<Food />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/rescue" element={<Rescue />} />
          <Route path="/rescue-pets" element={<RescuePets />} />
          <Route path="/user-account" element={<UserAccount />} /> {/* ✅ NEW Route */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
