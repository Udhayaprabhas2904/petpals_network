import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "Gowri",
    phone: "9894032886",
    street: "1/50, Middle Street, Vadalivilai",
    city: "Puraiyoor Post, Thoothukudi",
    state: "Tamil Nadu",
    pincode: "628207",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 5);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
  });

  const handlePlaceOrder = () => {
    const orderData = {
      name: address.name,
      phone: address.phone,
      address: `${address.street}, ${address.city}, ${address.state} - ${address.pincode}`,
      items: cartItems.map((item) => item.name), // Store product names array
      total: totalPrice,
      paymentMethod: "Cash on Delivery (COD)",
    };

    const deliveryDetails = {
      address: orderData.address,
      phone: orderData.phone,
      status: `Expected by ${formattedDeliveryDate}`,
    };

    // Save to localStorage
    localStorage.setItem("checkoutInfo", JSON.stringify(orderData));
    localStorage.setItem("deliveryDetails", JSON.stringify(deliveryDetails));

    setOrderPlaced(true);
    clearCart();
  };

  const handleEditAddress = () => {
    setIsEditingAddress(true);
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    setIsEditingAddress(false);
  };

  const handleFeedbackSubmit = () => {
    if (!feedback) {
      alert("Please enter your feedback before submitting.");
      return;
    }
    alert("Feedback Submitted Successfully");
    setFeedbackSubmitted(true);
  };

  const handleGoToHomepage = () => {
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>REVIEW YOUR ORDER</h2>

      {!orderPlaced ? (
        <>
          <div className="order-summary">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="order-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <p>
                    Size: S &nbsp; Qty: {item.quantity || 1}
                  </p>
                  <p>All issue easy returns</p>
                  <p>
                    <b>Sold by:</b> Urban Kanya
                  </p>
                  <p>Free Delivery</p>
                </div>
              </div>
            ))}
          </div>

          <div className="delivery-info">
            <h3>📦 Delivery by {formattedDeliveryDate}</h3>

            {isEditingAddress ? (
              <form className="edit-address-form" onSubmit={handleSaveAddress}>
                <input
                  type="text"
                  value={address.name}
                  onChange={(e) => setAddress({ ...address, name: e.target.value })}
                />
                <input
                  type="text"
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                />
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                />
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                />
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                />
                <input
                  type="text"
                  value={address.pincode}
                  onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                />
                <button type="submit" className="save-btn">
                  Save
                </button>
              </form>
            ) : (
              <>
                <p>
                  <b>{address.name}</b> • {address.phone}
                </p>
                <p>
                  {address.street}, {address.city}, {address.state} - {address.pincode}
                </p>
                <button className="change-btn" onClick={handleEditAddress}>
                  Change
                </button>
              </>
            )}
          </div>

          <div className="price-details">
            <h3>Price Details</h3>
            <p>
              <b>Total:</b> ₹{totalPrice}
            </p>
            <p>
              <b>Payment Mode:</b> Cash on Delivery (COD) Only
            </p>
          </div>

          <div className="checkout-footer">
            <button onClick={handlePlaceOrder} className="place-order-btn">
              Place Order
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>🎉 Order Placed Successfully!</h2>

          {!feedbackSubmitted ? (
            <>
              <h3 style={{ textAlign: "center" }}>We Value Your Feedback!</h3>

              <textarea
                placeholder="Write your review..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="feedback-box"
              />
              <h3>Rate Your Experience</h3>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= rating ? "star selected" : "star"}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button className="submit-feedback-btn" onClick={handleFeedbackSubmit}>
                Submit Feedback
              </button>
            </>
          ) : (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h3>Thanks for your valuable feedback! 🙌</h3>
              <p>Your order will be delivered soon.</p>
              <button className="back-home-btn" onClick={handleGoToHomepage}>
                Go to Homepage
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
