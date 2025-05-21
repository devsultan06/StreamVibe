// hooks/useLogin.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config/firebase.js";
import { useState } from "react";

const useLogin = (handleSetMessage, resetForm) => {
  const navigate = useNavigate();
  const [loader, showLoader] = useState(false);
  const login = async (email, password, setLoading) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      if (user.email) {
        handleSetMessage("Logged in successfully", "success");
        resetForm({ values: { email: "", password: "" } });

        showLoader(true);

        setTimeout(() => {
          showLoader(false);
          navigate("/home");
        }, 3000);
      } else {
        handleSetMessage("Error logging in. Please try again.", "error");
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
