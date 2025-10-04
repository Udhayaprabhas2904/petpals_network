import React from "react";
import { useParams } from "react-router-dom"; // Importing useParams for routing

import petsData from "../data/petsData";

const PetDetails = () => {
  const { id } = useParams();
  const pet = petsData.find((p) => p.id === parseInt(id));

  if (!pet) return <div>No Pet Found</div>;

  return (
    <div className="pet-details">
      <img src={pet.image} alt={pet.name} />

      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <p>Status: {pet.adoptionStatus}</p>
      <p>Price: ${pet.price}</p> {/* Display the price */}
      <p>Description: {pet.description}</p> {/* Add description */}
      <button>Adopt Now</button>
    </div>
  );
};

export default PetDetails;
