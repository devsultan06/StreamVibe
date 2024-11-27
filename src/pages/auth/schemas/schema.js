import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

export const getAuthSchema = (isLogin) => {
  return yup.object().shape({
    username: !isLogin
      ? yup.string().required("Username is required")
      : yup.string(),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: !isLogin
      ? yup
          .string()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters")
          .matches(
            passwordRules,
            "Password must contain at least one uppercase letter, one lowercase letter, and one numeric digit",
          )
      : yup.string().required("Password is required"),
  });
};
