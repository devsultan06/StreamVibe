import { useFormik } from "formik";
import * as yup from "yup";
import { getAuthSchema } from "./schemas/schema"; // Adjust the import path as needed
import { auth } from "../../firebase/config/firebase"; // Import your Firebase auth instance
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const validationSchema = yup.object().shape({
  email: getAuthSchema(false).fields.email,
});

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Attempt to send the password reset email
        await sendPasswordResetEmail(auth, values.email);
        setMessage("A password reset link has been sent to your email.");
      } catch (error) {
        console.error("Error sending reset email:", error.code, error.message); // Log error details
        let errorMessage = "An error occurred. Please try again.";

        // Check for specific Firebase error codes
        if (error.code === "auth/user-not-found") {
          errorMessage = "This email is not registered.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Please enter a valid email address.";
        }

        setMessage(errorMessage);
      } finally {
        setLoading(false);
      }

      formik.resetForm();
    },
  });

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black06">
      <h1 className="text-3xl mb-6 font-bold text-white">Forgot Password</h1>
      <p className="mb-6 text-center text-white">
        Enter the email address you use on StreamVibe. We&apos;ll send you a
        link to reset your password.
      </p>
      {message && (
        <p className="text-sm mb-4 text-center text-[red]">{message}</p>
      )}
      <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
        <div className="mb-6">
          <label
            className="text-sm mb-2 block font-medium text-white"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            style={{
              border:
                formik.touched.email && formik.errors.email
                  ? "3px solid red"
                  : "3px solid #ccc",
            }}
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm mt-2 text-[red]">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mb-[20px] w-full rounded border-none bg-red45 px-4 py-2 font-semibold text-white outline-none transition duration-100 ease-in-out hover:bg-[#b11a1a]"
          >
            {loading ? (
              <ClipLoader
                color="white"
                loading="true"
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Reset Password"
            )}
          </button>
          <a href="/auth" className="text-center text-white underline">
            Back to Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
