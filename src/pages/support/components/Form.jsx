import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useFormSupport from "../hooks/useFormSupport";

const Form = () => {
  const {
    state,
    errors,
    touched,
    isCheckboxChecked,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    handlePhoneNumberChange,
    handleBlur,
  } = useFormSupport();

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
            onBlur={handleBlur}
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
              defaultCountry="US" 
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
