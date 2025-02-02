import * as yup from "yup";

export const getQuestionSchema = () => {
  return yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    question: yup
      .string()
      .required("Question is required")
      .min(10, "Question must be at least 10 characters"),
  });
};
