import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    region: "",
    zipCode: "",
    country: "Romania",
    petType: "",
    petName: "",
    petAge: "",
    petGender: "",
    queries: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adoption Details Submitted:", formData);

    try {
      // Store in localStorage under "petRegistration"
      localStorage.setItem("petRegistration", JSON.stringify(formData));

      // Send email notification
      sendEmail(formData);

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        navigate("/rescue"); // Navigate after hiding success message
      }, 3000);
    } catch (error) {
      console.error("Registration failed:", error.message);
      alert(`Registration failed: ${error.message || "Please try again."}`);
    }
  };

  const sendEmail = (data) => {
    const templateParams = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      petName: data.petName,
      petType: data.petType,
      petAge: data.petAge,
      petGender: data.petGender,
      queries: data.queries,
      address: `${data.address}, ${data.city}, ${data.region}, ${data.zipCode}, ${data.country}`,
      time: new Date().toLocaleString(),
      message: "New Pet Adoption Application",
    };

    emailjs
      .send(
        "service_bjlumbp", // your EmailJS service ID
        "template_tveeami", // your EmailJS template ID
        templateParams,
        "Gxumd0k67Vg7mJZWh" // your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="register-container">
      <h2>Paws & Claws Registry</h2>

      {submitted && (
        <p className="success-message">Adoption Details Submitted Successfully!</p>
      )}

      <form onSubmit={handleSubmit} className="register-form">
        <div className="name-fields">
          <label>Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="First"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          placeholder="### ### ####"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter a password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div className="address-fields">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="region"
            placeholder="Region"
            value={formData.region}
            onChange={handleChange}
          />
        </div>
        <div className="address-fields">
          <input
            type="text"
            name="zipCode"
            placeholder="Postal / Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="Romania">Romania</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <label>Type of Pet:</label>
        <div className="pet-type">
          <label>
            <input
              type="radio"
              name="petType"
              value="Dog"
              onChange={handleChange}
              required
            />{" "}
            Dog
          </label>
          <label>
            <input
              type="radio"
              name="petType"
              value="Cat"
              onChange={handleChange}
              required
            />{" "}
            Cat
          </label>
          <label>
            <input
              type="radio"
              name="petType"
              value="Birds"
              onChange={handleChange}
              required
            />{" "}
            Birds
          </label>
          <label>
            <input
              type="radio"
              name="petType"
              value="Fish"
              onChange={handleChange}
              required
            />{" "}
            Fish
          </label>
        </div>

        <label>Name of Pet You Are Applying For:</label>
        <input
          type="text"
          name="petName"
          placeholder="Enter pet name"
          value={formData.petName}
          onChange={handleChange}
          required
        />

        <label>Age of Pet:</label>
        <input
          type="number"
          name="petAge"
          placeholder="Enter pet age"
          value={formData.petAge}
          onChange={handleChange}
          required
          min="0"
        />

        <label>Gender of Pet:</label>
        <select
          name="petGender"
          value={formData.petGender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
        </select>

        <label>Any Queries:</label>
        <textarea
          name="queries"
          placeholder="Enter any queries you may have..."
          value={formData.queries}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
