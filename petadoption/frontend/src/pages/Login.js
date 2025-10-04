import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    const userDetails = {
      name: name,
      username: email,
    };

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("loginDetails", JSON.stringify(userDetails));

    alert("Login Successful!");
    navigate("/pets");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to PetPals Network</h2>

        <div className="social-login">
          <button className="facebook-btn">Facebook</button>
          <button className="google-btn">Google</button>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="login-input"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button onClick={handleLogin} className="login-button">Sign In</button>

        <p className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p className="register-link">
          New to our site? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
