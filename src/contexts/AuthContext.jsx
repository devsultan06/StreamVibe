/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config/firebase";
import { ThreeDots } from "react-loader-spinner";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    username: null,
    emailVerified: null,
    photoURL: null,
    password: null,
  });

  const [loading, setLoading] = useState(true); 
  const isAuthenticated = !!user.email && !!user.emailVerified;

  useEffect(() => {
    const observer = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({
          email: currentUser?.email,
          username: currentUser?.displayName,
          emailVerified: currentUser?.emailVerified,
          photoURL: currentUser?.photoURL || "DEFAULT_PHOTO_URL",
          password:
            currentUser?.reloadUserInfo?.passwordHash || "Google Password",
        });
      } else {
        setUser({
          email: null,
          username: null,
          emailVerified: null,
          photoURL: null,
          password: null,
        });
      }
      setLoading(false);
    });

    return () => observer();
  }, []);

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
