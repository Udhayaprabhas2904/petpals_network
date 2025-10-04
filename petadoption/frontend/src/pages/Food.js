import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Food.css";
import foodData from "../data/foodData";

const Food = () => {
  const { addToCart, successMessage } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const filteredFood = foodData.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuantityChange = (foodId, value) => {
    const parsedValue = Number(value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodId]: parsedValue > 0 ? parsedValue : 1,
    }));
  };

  // NEW: handle adding to cart and then navigate
  const handleAddToCart = (food) => {
    addToCart({
      ...food,
      quantity: quantities[food.id] || 1,
    });
    navigate("/cart");  // Redirect to Cart page immediately after adding
  };

  return (
    <div className="food-container">
      <h1 className="food-title">Pet Food Ordering</h1>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="food-grid">
        {filteredFood.length > 0 ? (
          filteredFood.map((food) => (
            <div key={food.id} className="food-card">
              <img src={food.image} alt={food.name} className="food-image" />
              <h3>{food.name}</h3>
              <p><strong>Feeding Time:</strong> {food.feedingTime}</p>
              <p><strong>Quantity:</strong> {food.quantity}</p>

              <input
                type="number"
                min="1"
                placeholder="1"
                className="quantity-input"
                value={quantities[food.id] || ""}
                onChange={(e) => handleQuantityChange(food.id, e.target.value)}
              />

              <p><strong>Type:</strong> {food.type}</p>
              <p className="food-price">Price: ₹{food.price}</p>

              {/* UPDATED: Use new handleAddToCart */}
              <button
                onClick={() => handleAddToCart(food)}
                className="add-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No food items found.</p>
        )}
      </div>

      <div className="pagination">
        <button onClick={() => navigate("/accessories")} className="next-page-btn">
          Next Page →
        </button>
      </div>
    </div>
  );
};

export default Food;
