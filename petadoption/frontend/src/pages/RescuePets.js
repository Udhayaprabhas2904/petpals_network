import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function RescuePets() {
  const [rescuedPets, setRescuedPets] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const storedPets = JSON.parse(localStorage.getItem("rescuedPets")) || [];
    setRescuedPets(storedPets);
  }, []);

  const handleAddToCart = (pet) => {
    addToCart(pet);
    alert(`${pet.petName} added to cart!`);
  };

  // ⭐ Generate star rating from description keywords
  const generateRatingFromDescription = (description) => {
    if (!description) return "⭐";

    const positiveWords = ["friendly", "loyal", "playful", "sweet", "calm", "loving", "adorable"];
    const negativeWords = ["aggressive", "nervous", "shy", "anxious", "noisy", "messy"];

    const descLower = description.toLowerCase();

    let score = 3; // neutral starting point

    positiveWords.forEach((word) => {
      if (descLower.includes(word)) score += 1;
    });

    negativeWords.forEach((word) => {
      if (descLower.includes(word)) score -= 1;
    });

    score = Math.max(1, Math.min(5, score)); // clamp between 1 and 5

    return "⭐".repeat(score);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🐶 Rescued Pets</h2>
      <div style={cardContainer}>
        {rescuedPets.length === 0 ? (
          <p>No pets rescued yet.</p>
        ) : (
          rescuedPets.map((pet) => (
            <div key={pet.id} style={cardStyle}>
              <img src={pet.image} alt={pet.petName} style={imageStyle} />
              <div style={textContainer}>
                <p><strong>Name:</strong> {pet.petName}</p>
                <p><strong>Age:</strong> {pet.age}</p>
                <p><strong>Breed:</strong> {pet.breed}</p>
                <p><strong>Description:</strong> {pet.description}</p>
                <p><strong>Review:</strong> {generateRatingFromDescription(pet.description)}</p>
                <p><strong>Price:</strong> ₹{pet.price}</p>
              </div>
              <button onClick={() => handleAddToCart(pet)} style={btnStyle}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// CSS styles
const containerStyle = {
  padding: "20px",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const cardContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  borderRadius: "8px",
  width: "250px",
  backgroundColor: "#fffaf0",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  textAlign: "left",
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "5px",
  marginBottom: "10px",
};

const textContainer = {
  marginBottom: "10px",
};

const btnStyle = {
  backgroundColor: "green",
  color: "white",
  border: "none",
  padding: "8px",
  width: "100%",
  cursor: "pointer",
  borderRadius: "5px",
};

export default RescuePets;
