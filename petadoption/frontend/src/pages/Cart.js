import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateCartQuantity,
    getTotalPrice,
    successMessage,
  } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1 className="cart-heading">🛒 Your Cart</h1>

      {successMessage && <p className="success-message">{successMessage}</p>}

      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.name || item.petName}
                  className="cart-image"
                />
                <div className="cart-details">
                  <h3>{item.name || item.petName}</h3>
                  <p>Price: ₹{item.price}</p>

                  <label htmlFor={`quantity-${index}`}>Quantity: </label>
                  <input
                    id={`quantity-${index}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => {
                      const newQty = parseInt(e.target.value, 10);
                      if (!isNaN(newQty) && newQty > 0) {
                        updateCartQuantity(index, newQty);
                      }
                    }}
                    className="quantity-input"
                  />

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total Price: ₹{getTotalPrice()}</h2>

            <Link to="/checkout">
              <button className="buy-now-btn">✅ Buy Now</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
