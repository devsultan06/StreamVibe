/* eslint-disable react/prop-types */
// components/ProtectedRoute.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  // If user is not logged in, redirect to authentication page
  if (!user) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
