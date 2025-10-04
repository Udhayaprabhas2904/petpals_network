import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Import CartContext
import "./Pets.css";
import petsData from "../data/petsData"; // Import pet data

const Pets = () => {
  const navigate = useNavigate(); // Initialize navigate
  const { addToCart } = useContext(CartContext); // Access addToCart from context
  const [search, setSearch] = useState(""); // Search state
  const [message, setMessage] = useState(""); // State to show success message

  // Function to handle adding to cart
  const handleAddToCart = (pet) => {
    addToCart(pet);
    setMessage(`${pet.name} has been added to the cart successfully!`);

    // Auto-hide message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);

    // Redirect to Cart page
    navigate("/cart");
  };

  // Filter pets based on search input
  const filteredPets = petsData.filter((pet) =>
    pet.breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pets-container">
      {/* Header */}
      <header className="header"></header>
      <h1 className="paw-palace-heading">PawPalace</h1> {/* Added heading */}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by breed (Dog, Cat, Fish, Bird)..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Display Success Message */}
      {message && <div className="success-message">{message}</div>}

      {/* Pet Grid */}
      <div className="pets-grid">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.image} alt={pet.name} className="pet-image" />
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <p className="pet-price">Price: ₹{pet.price}</p>

              {/* Add to Cart Button */}
              <button className="add-to-cart" onClick={() => handleAddToCart(pet)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No pets found. Try another breed.</p>
        )}
      </div>

      {/* Next Page Button */}
      <footer className="footer">
        <button className="next-page" onClick={() => navigate("/medicine")}>
          Next Page →
        </button>
      </footer>
    </div>
  );
};

export default Pets;
