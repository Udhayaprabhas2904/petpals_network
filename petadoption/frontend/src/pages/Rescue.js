import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

function Rescue() {
  const [petName, setPetName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPet = {
      id: Date.now(),
      petName,
      age,
      breed,
      description,
      image: previewImage,
      price: Math.floor(Math.random() * 1000) + 500, // ₹500–₹1500
      review: "Loving and calm nature. Needs a kind home.",
    };

    const existing = JSON.parse(localStorage.getItem("rescuedPets")) || [];
    localStorage.setItem("rescuedPets", JSON.stringify([...existing, newPet]));

    setSuccessMessage("✅ Rescue Request Submitted Successfully!");

    setTimeout(() => {
      setSuccessMessage("");
      navigate("/rescue-pets");
    }, 2000);

    setPetName("");
    setAge("");
    setBreed("");
    setDescription("");
    setPreviewImage(null);
  };

  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}></div>

      <div style={rightColumnStyle}>
        <h1 style={titleStyle}>🐾 Pet Rescue Application</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            placeholder="Pet Name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="text"
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            style={inputStyle}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ ...inputStyle, height: "100px" }}
            required
          />

          <div style={uploadBoxStyle} onClick={handleUploadClick}>
            {previewImage ? (
              <img src={previewImage} alt="Preview" style={previewImageStyle} />
            ) : (
              <>
                <FaCloudUploadAlt size={50} color="#00bfff" />
                <div style={{ color: "#999", marginTop: "10px" }}>
                  Click to upload a pet image
                </div>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>

          <button type="submit" style={buttonStyle}>Submit Rescue Request</button>

          {successMessage && (
            <div style={successMessage.includes("Success") ? successStyle : errorStyle}>
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

// Styles remain unchanged
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: "0 20px",
};

const leftColumnStyle = {
  flex: 1,
  backgroundImage: "url('https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s8255nvbyleds1ib.jpg')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
  borderRadius: "20px 0 0 20px",
};

const rightColumnStyle = {
  flex: 1,
  padding: "30px",
  backgroundColor: "#ffffff",
  borderRadius: "0 10px 10px 0",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#007bff",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const uploadBoxStyle = {
  border: "2px dashed #00bfff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  marginBottom: "20px",
  backgroundColor: "#f0f8ff",
  cursor: "pointer",
};

const previewImageStyle = {
  maxWidth: "40%",
  maxHeight: "100px",
  marginBottom: "10px",
  borderRadius: "5px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "green",
  color: "white",
  fontSize: "16px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const successStyle = {
  backgroundColor: "#28a745",
  color: "white",
  padding: "10px",
  marginTop: "15px",
  borderRadius: "5px",
  textAlign: "center",
};

const errorStyle = {
  backgroundColor: "#dc3545",
  color: "white",
  padding: "10px",
  marginTop: "15px",
  borderRadius: "5px",
  textAlign: "center",
};

export default Rescue;
