// hooks/useRegister.js
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebase/config/firebase.js";

const useRegister = (handleSetMessage, resetForm, setFieldValue) => {
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

      await sendEmailVerification(user, {
        url: "https://streamvibe06.vercel.app/verified?verification=true",
        handleCodeInApp: true,
      });

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        username: user.displayName,
        emailVerified: user.emailVerified,
        phoneNumber: Number(phoneNumber) || "",
        photoURL: user.photoURL || "DEFAULT_PHOTO_URL",
      });

      handleSetMessage(
        "A verification email has been sent to your email address. Please check your inbox.",
        "success",
      );
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
