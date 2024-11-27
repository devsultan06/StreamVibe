/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ThreeDots } from "react-loader-spinner";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black06 bg-opacity-50">
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
    ); // Or return a loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />; // Redirect to login if not authenticated
  }

  return element; // Render protected route if authenticated
};

export default ProtectedRoute;
