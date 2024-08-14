/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Navbar from "../../utils/Navbar";
import { useEffect, useState } from "react";
import SupportImage from "../../../public/images/support-img.png";

const Support = () => {
  useEffect(() => {
    document.title = "Support";
  }, []);

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    number: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    number: false,
    password: false,
  });

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
  return (
    <div className="bg-black10 support">
      <Navbar />
      <div className="support-box">
        <div className="left">
          <h1 className="text-xl">Welcome to our support page!</h1>
          <p className="text-grey60">
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <img src={SupportImage} alt="" />
        </div>
        <div className="right">
          <form action="">
            <div className="form-controls">
              <div className="form-control">
                <label htmlFor="fullname">First Name</label>
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
                <label htmlFor="fullname">Last Name</label>
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
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, email: true }))
                  }
                  placeholder="Enter your Email"
                />
                {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="number">Phone Number</label>
                <br />
                <input
                  type="tel"
                  name="number"
                  autoComplete="off"
                  id="number"
                  value={state.number}
                  maxLength={11}
                  minLength={11}
                  required
                  onChange={handleInputChange}
                  placeholder="Enter your Phone Number"
                />
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
                ></textarea>
              </div>
            </div>
            <div className="terms-and-submit">
              <div className="terms">
                <input type="checkbox" name="" id="" />
                <p>I agree with Terms of Use and Privacy Policy</p>
              </div>

              <div className="send">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
