import React from "react";
import PetCard from "./PetCard";
import petsData from "../data/petsData";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const PetList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="pet-list">
      {petsData.map((pet) => {
        const { price } = pet; // Destructure price from pet object
        return <PetCard key={pet.id} pet={pet} price={price} addToCart={addToCart} />; // Pass price and addToCart to PetCard

      })}
    </div>
  );
};

export default PetList;
