// hooks/useLogin.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config/firebase.js";
import { useState } from "react";

const useLogin = (handleSetMessage, resetForm) => {
  const navigate = useNavigate();
  const [loader, showLoader] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const login = async (email, password, setLoading) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      if (user.emailVerified) {
        handleSetMessage("Logged in successfully", "success");
        resetForm({ values: { email: "", password: "" } });

        // Show the loader
        showLoader(true);

        // After 3 seconds, navigate to home and hide the loader
        setTimeout(() => {
          showLoader(false);
          navigate("/home");
        }, 3000);
      } else {
        handleSetMessage(
          "Please verify your email address to continue.",
          "error",
        );
      }
    } catch (error) {
      let errorMessage = "An unexpected error occurred. Please try again.";
      if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid credentials";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      }
      handleSetMessage(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  return { login, loader };
};

export default useLogin;
