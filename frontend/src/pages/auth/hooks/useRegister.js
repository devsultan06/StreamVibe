// hooks/useRegister.js
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebase/config/firebase.js";
import { useNavigate } from "react-router-dom";

const useRegister = (handleSetMessage, resetForm, setFieldValue) => {
  const navigate = useNavigate();

  const register = async (
    username,
    email,
    password,
    phoneNumber,
    setLoading,
  ) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        username: user.displayName,
        phoneNumber: Number(phoneNumber) || "",
        photoURL: user.photoURL || "DEFAULT_PHOTO_URL",
      });

      handleSetMessage("Registration Successful!.Redirecting....", "success");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      resetForm({
        values: { username: "", email: "", password: "", phoneNumber: "" },
      });
    } catch (error) {
      let errorMessage = "An unexpected error occurred. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage =
          "This email is already in use. Please try another email.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "The email address is not valid.";
      }
      handleSetMessage(errorMessage, "error");
      setFieldValue("email", "");
    } finally {
      setLoading(false);
    }
  };

  return register;
};

export default useRegister;
