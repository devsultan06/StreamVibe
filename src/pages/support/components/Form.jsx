import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useFormik } from "formik";
import { getSupportSchema } from "../../../schemas/supportSchema";
import { TextField } from "@mui/material";
import InputField from "../../auth/components/InputField";

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
          <InputField
            type="text"
            label="First Name"
            name="firstName"
            id="firstName"
            value={values.firstName}
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            error={!!(errors.firstName && touched.firstName)}
            helperText={errors.firstName}
          />
        </div>
        <div className="form-control">
          <InputField
            type="text"
            label="Last Name"
            name="lastName"
            id="lastName"
            value={values.lastName}
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            error={!!(errors.lastName && touched.lastName)}
            helperText={errors.lastName}
          />
        </div>

        <div className="form-control">
          <InputField
            label="Email"
            type="email"
            name="email"
            id="email"
            value={values.email}
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            error={!!(errors.email && touched.email)}
            helperText={errors.email}
          />
        </div>
        <div className="form-control">
          <InputField
            label="Phone Number"
            type="phoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            value={values.phoneNumber}
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            error={!!(errors.phoneNumber && touched.phoneNumber)}
            helperText={errors.phoneNumber}
          />
        </div>
        <div className="form-control">
          <InputField
            label="Message"
            type="text"
            name="message"
            id="message"
            value={values.message}
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            error={!!(errors.message && touched.message)}
            helperText={errors.message}
            rows={4}
          />
        </div>
      </div>
      <div className="terms-and-submit">
        <div className="terms1">
          <div className="terms">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              checked={values.agreeToTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>I agree with Terms of Use and Privacy Policy</p>
          </div>
          {errors.agreeToTerms && touched.agreeToTerms && (
            <p className="text-sm mt-1 text-red45">{errors.agreeToTerms}</p>
          )}
        </div>

        <div className="send">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
