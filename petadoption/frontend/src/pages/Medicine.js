import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import "./Medicine.css";
import medicineData from "../data/medicineData";

const Medicine = () => {
  const { addToCart, successMessage } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredMedicines = medicineData.filter((medicine) =>
    medicine.name.toLowerCase().includes(search.toLowerCase())
  );

  // New function to add medicine to cart and then navigate to cart page
  const handleAddToCart = (medicine) => {
    addToCart(medicine);
    navigate("/cart");
  };

  return (
    <div className="medicine-container">
      <h1 className="vet-cure-heading">VetCure Hub</h1>
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      <input
        type="text"
        placeholder="Search medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="medicine-grid">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="medicine-card">
              <img src={medicine.image} alt={medicine.name} className="medicine-image" />
              <h3>{medicine.name}</h3>
              <p>Disease: {medicine.diseases.join(", ")}</p>
              <p className="medicine-price">Price: ₹{medicine.price}</p>
              {/* Use the new handleAddToCart function */}
              <button onClick={() => handleAddToCart(medicine)} className="add-cart-btn">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No medicine found. Try another search.</p>
        )}
      </div>

      <div className="pagination">
        <button onClick={() => navigate("/food")} className="next-page-btn">
          Next Page →
        </button>
      </div>
    </div>
  );
};

export default Medicine;
