import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="overlay"></div> 

        <div className="hero-content">
          {/* Main Heading */}
          <h1 className="main-heading">Welcome to PetPals Network</h1>

          {/* Subheading */}
          <h2 className="sub-heading">🐶 Adopt, Love, Repeat 🐱</h2>

          {/* Description */}
          <p className="description">Transform a life, adopt a pet today and bring unconditional love into your home.</p>

          {/* Call-to-Action Button */}
          <button className="visit-btn" onClick={() => navigate("/login")}>
            Visit Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
