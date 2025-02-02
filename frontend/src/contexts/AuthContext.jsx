/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ThreeDots } from "react-loader-spinner";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    username: null,
    emailVerified: null,
    phoneNumber: null,
    photoURL: null,
    password: null,
  });

  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!user.email && !!user.emailVerified;

  const db = getFirestore();

  useEffect(() => {
    const observer = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const newUser = {
          email: currentUser.email,
          username: currentUser.displayName,
          emailVerified: currentUser.emailVerified,
          phoneNumber: currentUser.phoneNumber,
          photoURL: currentUser.photoURL || "DEFAULT_PHOTO_URL",
          password:
            currentUser?.reloadUserInfo?.passwordHash || "Google Password",
        };

        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const firestoreData = userDoc.data();
            newUser.phoneNumber =
              firestoreData.phoneNumber || newUser.phoneNumber;
          }
        } catch (error) {
          console.error("Error fetching user data from Firestore:", error);
        }

        setUser(newUser);
      } else {
        setUser({
          email: null,
          username: null,
          emailVerified: null,
          phoneNumber: null,
          photoURL: null,
          password: null,
        });
      }

      setLoading(false);
    });

    return () => observer();
  }, [db]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black06">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#FF0000"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
