import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { auth, firestore } from "../../../firebase/config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ThreeDots } from "react-loader-spinner";

const VerifiedPage = () => {
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const verification = params.get("verification");

    if (verification !== "true") {
      console.log("Verification query parameter missing or invalid.");
      window.location.href = "https://streamvibe06.vercel.app/auth";
      return;
    }

    const checkVerification = async () => {
      const intervalId = setInterval(async () => {
        try {
          if (auth.currentUser) {
            await auth.currentUser.reload();
            console.log("Reloading user...");

            if (auth.currentUser.emailVerified) {
              console.log("User email is verified.");
              const userDocRef = doc(firestore, "users", auth.currentUser.uid);
              await updateDoc(userDocRef, {
                emailVerified: true,
              });

              clearInterval(intervalId);
              setIsChecking(false);
              window.location.href = "https://streamvibe06.vercel.app/home";
            } else {
              console.log("Email not verified yet.");
            }
          } else {
            console.log("No current user. Waiting for Firebase auth...");
          }
        } catch (error) {
          console.error("Error while checking verification:", error);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    };

    checkVerification();
  }, [location.search]);

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
