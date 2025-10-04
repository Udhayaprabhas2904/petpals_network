import React, { useState } from "react";
import "./Disease.css"; // Import CSS for styling
import DiseaseData from "../data/DiseaseData"; // Importing Disease Data

const Disease = () => {
  const [formData, setFormData] = useState({
    petName: "",
    age: "",
    petType: "",
    disease: "",
    foodTaken: "",
    startDate: "",
    endDate: "",
    additionalInfo: "",
  });

  const [result, setResult] = useState(null); // Store search results

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle search function
  const handleSearch = (e) => {
    e.preventDefault();
    
    const diseaseInfo = DiseaseData.find((item) =>
      item.disease.toLowerCase() === formData.disease.toLowerCase()
    );

    if (diseaseInfo) {
      setResult(diseaseInfo);
    } else {
      setResult({ disease: formData.disease, message: "No data found for this disease." });
    }
  };

  return (
    <div className="disease-container">
      <h2>Pet Disease Diagnosis</h2>

      <form onSubmit={handleSearch} className="disease-form">
        {/* Pet Details */}
        <label>Pet Name:</label>
        <input type="text" name="petName" value={formData.petName} onChange={handleChange} required />

        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>Type of Pet:</label>
        <select name="petType" value={formData.petType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="Fish">Fish</option>
        </select>

        {/* Disease Input */}
        <label>Disease Name:</label>
        <input type="text" name="disease" value={formData.disease} onChange={handleChange} required />

        {/* Additional Information */}
        <label>Food Taken:</label>
        <input type="text" name="foodTaken" value={formData.foodTaken} onChange={handleChange} required />

        <label>Disease Start Date:</label>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />

        <label>Disease End Date:</label>
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />

        <label>Additional Information:</label>
        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}></textarea>

        {/* Search Button */}
        <button type="submit" className="search-btn">Search</button>
      </form>

      {/* Display Results */}
      {result && (
        <div className="result-section">
          <h3>Diagnosis Result</h3>
          {result.message ? (
            <p>{result.message}</p>
          ) : (
            <>
              <p><strong>Disease:</strong> {result.disease}</p>
              <p><strong>Recommended Medicine:</strong> {result.medicine}</p>
              <p><strong>Vaccination:</strong> {result.vaccination}</p>
              <p><strong>Nearest Doctor:</strong> {result.doctor.name} ({result.doctor.location})</p>
              <p><strong>Phone Number:</strong> {result.doctor.phone}</p>
              <p><strong>Website:</strong> <a href={result.doctor.website}>{result.doctor.website}</a></p>

            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Disease;
