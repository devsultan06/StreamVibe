// useLogout.js
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config/firebase";

const useLogOut = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Log the user out of Firebase
      navigate("/auth"); // Redirect to auth page after logging out
    } catch (error) {
      console.error("Error logging out: ", error); 
    }
  };
 
  return { handleLogout };
};

export default useLogOut;