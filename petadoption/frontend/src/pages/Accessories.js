import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import accessoriesData from "../data/accessoriesData";
import "./Accessories.css";

const Accessories = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  // Handle quantity input for each accessory
  const handleQuantityChange = (accessoryId, value) => {
    const parsed = Number(value);
    setQuantities((prev) => ({
      ...prev,
      [accessoryId]: parsed > 0 ? parsed : 1,
    }));
  };

  // Add item to cart and navigate to cart page
  const handleAddToCart = (accessory) => {
    const quantity = quantities[accessory.id] || 1;
    addToCart({ ...accessory, quantity });
    navigate("/cart");
  };

  // Filter accessories based on search input
  const filteredAccessories = (items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(search.trim().toLowerCase())
    );

  return (
    <div className="accessories-container">
      <h2 className="accessories-title">🐾 Pet Accessories</h2>

      <input
        type="text"
        placeholder="Search for accessories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="accessories-grid">
        {Object.entries(accessoriesData).map(([petType, items]) => {
          const filtered = filteredAccessories(items);
          if (filtered.length === 0) return null;

          return (
            <div key={petType} className="pet-type-section">
              <h3>{petType}</h3>
              <div className="accessories-list">
                {filtered.map((accessory) => (
                  <div key={accessory.id} className="accessory-card">
                    <img
                      src={accessory.image || "https://via.placeholder.com/150"}
                      alt={accessory.name}
                      className="accessory-image"
                    />
                    <p className="accessory-name">{accessory.name}</p>
                    <p className="accessory-price">Price: ₹{accessory.price}</p>

                    <input
                      type="number"
                      min="1"
                      className="quantity-input"
                      placeholder="1"
                      value={quantities[accessory.id] || ""}
                      onChange={(e) =>
                        handleQuantityChange(accessory.id, e.target.value)
                      }
                    />

                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(accessory)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pagination">
        <button onClick={() => navigate("/disease")} className="next-page-btn">
          Next Page →
        </button>
      </div>
    </div>
  );
};

export default Accessories;
