import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      {/* Logo & Brand Name */}
      <div className="brand">
        <h2 className="brand-name">
          PetPals <span>Network</span>
        </h2>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/pets">🐶 Pets</Link></li>
        <li><Link to="/medicine">💊 Medicine</Link></li>
        <li><Link to="/food">🍖 Food</Link></li>
        <li><Link to="/accessories">🛍️ Accessories</Link></li>
        <li><Link to="/disease">🩺 Disease</Link></li>
        <li><Link to="/services">🔧 Services</Link></li>
        <li><Link to="/register">📝 Register</Link></li>
        <li><Link to="/rescue">🐾 Rescue</Link></li>
        <li><Link to="/rescue-pets">📋 Rescued Pets</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart <span className="cart-count">{cartItems.length}</span>
          </Link>
        </li>
        <li><Link to="/checkout">✅ Checkout</Link></li>

        {/* ✅ User Account Icon */}
        <li>
          <Link to="/user-account" title="User Account">
            👤
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
