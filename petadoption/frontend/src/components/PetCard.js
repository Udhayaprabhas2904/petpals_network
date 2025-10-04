import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PetCard = ({ pet, price, addToCart }) => {
  const history = useHistory();

  return (
    <div className="pet-card card">
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p> {/* Updated to display age only once */}
      <p>Status: {pet.adoptionStatus}</p>
      <p>Price: ${price}</p> {/* Display the price */}
      <Link to={`/pets/${pet.id}`}>View Details</Link> {/* Link to Pet Details */}
      <button className="add-to-cart" onClick={() => {
        addToCart({ id: pet.id, name: pet.name, price });
        history.push("/cart"); // Redirect to Cart page
      }}>Add to Cart</button>
    </div>
  );
};

export default PetCard;
