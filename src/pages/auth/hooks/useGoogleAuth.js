// hooks/useGoogleAuth.js
import { signInWithPopup, sendEmailVerification } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, googleProvider, db } from "../../../firebase/config/firebase.js";

const useGoogleAuth = (handleSetMessage) => {
  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      await sendEmailVerification(user, {
        url: "https://streamvibe06.vercel.app/verified?verification=true",
        handleCodeInApp: true,
      });

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        username: user.displayName,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL || "DEFAULT_PHOTO_URL",
      });
      handleSetMessage(
        "A verification email has been sent to your email address. Please check your inbox.",
        "success",
      );
    } catch (error) {
      handleSetMessage(
        "An unexpected error occurred. Please try again.",
        "error",
      );
    }
  };

  return signInWithGoogle;
};

export default useGoogleAuth;
