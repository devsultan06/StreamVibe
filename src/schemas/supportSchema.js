import * as yup from "yup";

// Define the schema for the support form
export const getSupportSchema = () => {
  return yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^[0-9]{11}$/,
        "Phone number must be exactly 11 digits and numeric",
      ),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
    agreeToTerms: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions"),
  });
};
