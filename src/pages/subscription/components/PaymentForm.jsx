/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentForm = ({ id }) => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Payment Submitted", state);
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "") // Remove all non-digit characters
      .replace(/(\d{4})(?=\d)/g, "$1 "); // Add a space after every 4 digits
  };

  const formatExpiryDate = (value) => {
    return value
      .replace(/\D/g, "") // Remove all non-digit characters
      .replace(/(\d{2})(?=\d)/g, "$1/"); // Add a slash after every 2 digits
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (name === "number") {
      const formattedValue = formatCardNumber(value);
      setState((prev) => ({ ...prev, [name]: formattedValue }));
    } else if (name === "expiry") {
      const formattedValue = formatExpiryDate(value);
      setState((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="payment">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />

      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name on Card</label>
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Name on Card"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
            maxLength="19" // 16 digits + 3 spaces
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              maxLength="5" // 2 digits + '/' + 2 digits
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="password"
              name="cvc"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              maxLength="3"
              placeholder="CVV"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            className="amount"
            type="text"
            name="amount"
            disabled
            placeholder={
              id === 1
                ? "$9.99"
                : id === 2
                ? "$12.99"
                : id === 3
                ? "$14.99"
                : id === 4
                ? "$1250.88"
                : id === 5
                ? "$1565.88"
                : id === 6
                ? "$1779.88"
                : "$2009.88"
            }
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
