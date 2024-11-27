import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth, firestore } from "../../../firebase/config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ThreeDots } from "react-loader-spinner";

const VerifiedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if the "verification" query parameter exists
    const params = new URLSearchParams(location.search);
    const verification = params.get("verification");

    if (verification !== "true") {
      // Redirect to home page if the query parameter is not present or not correct
      navigate("/auth");
      return;
    }

    const checkVerification = async () => {
      const intervalId = setInterval(async () => {
        await auth.currentUser?.reload(); // Reload user to get the latest verification status

        // Check if user is populated and email is verified
        if (auth.currentUser && auth.currentUser.emailVerified) {
          // Update emailVerified status in Firestore
          const userDocRef = doc(firestore, "users", auth.currentUser.uid);
          await updateDoc(userDocRef, {
            emailVerified: true,
          });

          clearInterval(intervalId); // Stop the interval when verified
          setIsChecking(false); // Stop checking
          navigate("/home"); // Redirect to homepage
        } else if (auth.currentUser) {
          console.log("Email not verified yet"); // For debugging purposes
        }
      }, 1000); // Retry every second

      return () => clearInterval(intervalId); // Cleanup on unmount
    };

    checkVerification();
  }, [navigate, location.search]); // Add location.search to dependencies so it updates when the query param changes

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black06">
      {isChecking && (
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
      )}
    </div>
  );
};

export default VerifiedPage;
