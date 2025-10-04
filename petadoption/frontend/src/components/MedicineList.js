import React, { useState } from "react";
import medicineData from "../data/medicineData";

const MedicineList = ({ addToCart }) => {
  const [search, setSearch] = useState("");

  // Filter medicines based on search query
  const filteredMedicines = medicineData.filter((medicine) =>
    medicine.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="medicine-list">
      <h2>🩺 Pet Medicines</h2>
      <input
        type="text"
        placeholder="Search medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="medicine-container">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="medicine-card">
              <img src={medicine.image} alt={medicine.name} />
              <h3>{medicine.name}</h3>
              <p>For: {medicine.for}</p>
              <p>💲 {medicine.price}</p>
              <p>Disease: {medicine.diseases.join(", ")}</p>

              <button onClick={() => addToCart(medicine)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No medicine found.</p>
        )}
      </div>
    </div>
  );
};

export default MedicineList;
