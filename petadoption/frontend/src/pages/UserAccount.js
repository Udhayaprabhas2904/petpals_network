import React, { useEffect, useState } from "react";
import "./UserAccount.css";

const UserAccount = () => {
  const [userData, setUserData] = useState({
    login: {},
    services: [],
    petRegistration: {},
    checkout: {},
    delivery: {},
  });

  useEffect(() => {
    // Load data from localStorage or fallback to defaults
    const login = JSON.parse(localStorage.getItem("loginDetails")) || {
      username: "guest@example.com",
      name: "Guest User",
    };
    const services = JSON.parse(localStorage.getItem("bookedServices")) || [];
    const petRegistration = JSON.parse(localStorage.getItem("petRegistration")) || {};
    const checkout = JSON.parse(localStorage.getItem("checkoutInfo")) || {};
    const delivery = JSON.parse(localStorage.getItem("deliveryDetails")) || {};

    setUserData({ login, services, petRegistration, checkout, delivery });
  }, []);

  return (
    <div className="user-account">
      <h2>👤 User Account Overview</h2>

      {/* Login Details */}
      <section className="section-card">
        <h3>🔐 Login Details</h3>
        <p><strong>Name:</strong> {userData.login.name}</p>
        <p><strong>Email:</strong> {userData.login.username}</p>
      </section>

      {/* Booked Services */}
      <section className="section-card">
        <h3>📅 Booked Services</h3>
        {userData.services.length > 0 ? (
          <ul>
            {userData.services.map((service, index) => (
              <li key={index}>
                <strong>Service:</strong> {service.serviceName || "N/A"} <br />
                Pet: {service.petType} ({service.breedName}), Age: {service.age}, Gender: {service.gender} <br />
                Appointment: {service.date} at {service.time} <br />
                Venue: {service.venue}
              </li>
            ))}
          </ul>
        ) : (
          <p>No service bookings.</p>
        )}
      </section>

      {/* Pet Registration */}
      <section className="section-card">
        <h3>🐾 Pet Registration</h3>
        {userData.petRegistration.petName ? (
          <>
            <p><strong>Owner:</strong> {userData.petRegistration.firstName} {userData.petRegistration.lastName}</p>
            <p><strong>Pet Name:</strong> {userData.petRegistration.petName}</p>
            <p><strong>Type:</strong> {userData.petRegistration.petType}</p>
            <p><strong>Age:</strong> {userData.petRegistration.petAge}</p>
            <p><strong>Gender:</strong> {userData.petRegistration.petGender}</p>
            <p><strong>Queries:</strong> {userData.petRegistration.queries || "None"}</p>
          </>
        ) : (
          <p>No pet registered yet.</p>
        )}
      </section>

      {/* Checkout Summary */}
      <section className="section-card">
        <h3>✅ Checkout Summary</h3>
        {userData.checkout.total ? (
          <>
            <p><strong>Total Amount:</strong> ₹{userData.checkout.total}</p>
            <p>
              <strong>Items Ordered:</strong>{" "}
              {userData.checkout.items && Array.isArray(userData.checkout.items)
                ? userData.checkout.items.join(", ")
                : userData.checkout.items}
            </p>
            <p><strong>Payment Method:</strong> {userData.checkout.paymentMethod}</p>
          </>
        ) : (
          <p>No checkout history found.</p>
        )}
      </section>

      {/* Delivery Info */}
      <section className="section-card">
        <h3>🚚 Delivery Information</h3>
        {userData.delivery.address ? (
          <>
            <p><strong>Address:</strong> {userData.delivery.address}</p>
            <p><strong>Phone:</strong> {userData.delivery.phone}</p>
            <p><strong>Status:</strong> {userData.delivery.status}</p>
          </>
        ) : (
          <p>No delivery details available.</p>
        )}
      </section>
    </div>
  );
};

export default UserAccount;
