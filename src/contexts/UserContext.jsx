  /* eslint-disable react/prop-types */
  // UserContext.js
  import { createContext, useState, useEffect } from "react";

  const UserContext = createContext();

  const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
      // Check if user data exists in localStorage
      const storedUser = localStorage.getItem("currentUser");
      return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (userData) => {
      setUser(userData);
      console.log(userData);
      // Store user data in localStorage
      localStorage.setItem("currentUser", JSON.stringify(userData));
    };

    const logout = () => {
      setUser(null);
      // Remove user data from localStorage
      localStorage.removeItem("currentUser");
    };

    useEffect(() => {
      // Sync with localStorage when user changes
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        localStorage.removeItem("currentUser");
      }
    }, [user]);

    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  };

  export { UserContext, UserProvider };
