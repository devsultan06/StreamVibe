import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useFormik } from "formik";

import { getSupportSchema } from "../../../schemas/supportSchema";

const Form = () => {
  const validationSchema = getSupportSchema();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setTouched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      agreeToTerms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      const trimmedValues = {
        ...values,
        email: values.email.trim(),
        phoneNumber: values.phoneNumber.trim(),
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        message: values.message.trim(),
        agreeToTerms: values.agreeToTerms,
      };

      console.log(trimmedValues);
    },
  });
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
            required
            placeholder="Enter your Email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="number">Phone Number</label>
          <br />
          <div className="phone-input-wrapper">
            <PhoneInput
              international
              defaultCountry="US"
              placeholder="Enter phone number"
              className="PhoneInput"
              style={{ backgroundColor: "black" }}
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="number">Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder="Enter your Message"
            rows={4}
            required
          ></textarea>
        </div>
      </div>
      <div className="terms-and-submit">
        <div className="terms1">
          <div className="terms">
            <input type="checkbox" name="terms" id="terms" />
            <p>I agree with Terms of Use and Privacy Policy</p>
          </div>
        </div>

        <div className="send">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
