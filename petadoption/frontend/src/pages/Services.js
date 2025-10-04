import React, { useState } from "react";
import servicesData from "../data/ServicesData";
import "./Services.css";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [breedName, setBreedName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [petType, setPetType] = useState("");

  const defaultDate = "22-05-2025";
  const defaultTime = "10:00 AM - 11:00 AM";
  const defaultVenue = "PetPals Network, Tirunelveli";

  const handleBookNow = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowSuccessMessage(false);
    setSelectedService("");
    setBreedName("");
    setAge("");
    setGender("");
    setPetType("");
  };

  const handleRegister = (e) => {
    if (e) e.preventDefault();

    const newBooking = {
      serviceName: selectedService,  // Store service name here
      breedName,
      age,
      gender,
      petType,
      date: defaultDate,
      time: defaultTime,
      venue: defaultVenue,
    };

    // Save to localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookedServices")) || [];
    existingBookings.push(newBooking);
    localStorage.setItem("bookedServices", JSON.stringify(existingBookings));

    setShowSuccessMessage(true);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <div className="services-container">
      <h2 className="services-header">Our Services</h2>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button
              type="button"
              className="book-now-btn"
              onClick={() => handleBookNow(service.title)} // Pass service title here
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button type="button" className="close-btn" onClick={closeModal}>
              ✖
            </button>
            <h2>Book An Appointment for: <em>{selectedService}</em></h2>

            <input
              type="text"
              placeholder="Breed Name"
              value={breedName}
              onChange={(e) => setBreedName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select value={petType} onChange={(e) => setPetType(e.target.value)} required>
              <option value="">Select Pet Type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Fish">Fish</option>
            </select>

            <input type="text" value={defaultDate} disabled />
            <input type="text" value={defaultTime} disabled />
            <input type="text" value={defaultVenue} disabled />

            <div className="modal-buttons">
              <button type="button" className="submit-btn" onClick={handleRegister}>
                Register
              </button>
              <button type="button" className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>

            {showSuccessMessage && (
              <p className="success-message">✅ Appointment Booked Successfully!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
