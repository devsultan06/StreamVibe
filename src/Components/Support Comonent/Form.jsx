import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Form = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    number: "",
  });

  const handlePhoneNumberChange = (value) => {
    setState((prevValue) => ({
      ...prevValue,
      number: value,
    }));
  };

  const [errors, setErrors] = useState({
    email: "",
    checkbox: "",
  });
  const [touched, setTouched] = useState({
    email: false,
  });

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    if (name === "email") {
      if (!value.endsWith("@gmail.com")) {
        setErrors({
          email: "Please enter a valid email address ending with @gmail.com.",
        });
      } else {
        setErrors({
          email: "",
        });
      }
    }
  };

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
    if (!event.target.checked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        checkbox: "You must agree with the Terms of Use and Privacy Policy.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        checkbox: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isCheckboxChecked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        checkbox: "You must agree with the Terms of Use and Privacy Policy.",
      }));
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", state);

    setState({
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      message: "",
    });
    setErrors({
      message: "",
      email: "",
    });
    setTouched({
      email: false,
    });

    setIsCheckboxChecked(false);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-controls">
        <div className="form-control">
          <label htmlFor="firstname">First Name</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="firstname"
            id="firstname"
            value={state.firstname}
            required
            onChange={handleInputChange}
            placeholder="Enter your First Name"
          />
        </div>

        <div className="form-control">
          <label htmlFor="lastname">Last Name</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="lastname"
            id="lastname"
            value={state.lastname}
            required
            onChange={handleInputChange}
            placeholder="Enter your Last Name"
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={state.email}
            required
            onChange={handleInputChange}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            placeholder="Enter your Email"
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="number">Phone Number</label>
          <br />
          <div className="phone-input-wrapper">
            <PhoneInput
              international
              defaultCountry="US" // You can set the default country here
              value={state.number}
              onChange={handlePhoneNumberChange}
              placeholder="Enter phone number"
              className="PhoneInput"
              style={{ backgroundColor: "black" }}
            />
          </div>

          {touched.number && errors.number && (
            <p className="error">{errors.number}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="number">Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            onChange={handleInputChange}
            value={state.message}
            placeholder="Enter your Message"
            rows={4}
            required
          ></textarea>
        </div>
      </div>
      <div className="terms-and-submit">
        <div className="terms1">
          <div className="terms">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            <p>I agree with Terms of Use and Privacy Policy</p>
          </div>

          {errors.checkbox && <p className="error">{errors.checkbox}</p>}
        </div>

        <div className="send">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
