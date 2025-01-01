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
    const params = new URLSearchParams(location.search);
    const verification = params.get("verification");

    if (verification !== "true") {
      window.location.href = "https://streamvibe06.vercel.app/auth";
      return;
    }

    const checkVerification = async () => {
      const intervalId = setInterval(async () => {
        await auth.currentUser?.reload();

        if (auth.currentUser && auth.currentUser.emailVerified) {
          const userDocRef = doc(firestore, "users", auth.currentUser.uid);
          await updateDoc(userDocRef, {
            emailVerified: true,
          });

          clearInterval(intervalId);
          setIsChecking(false);
          window.location.href = "https://streamvibe06.vercel.app/home";
        } else if (auth.currentUser) {
          console.log("Email not verified yet");
        }
      }, 1000);

      return () => clearInterval(intervalId);
    };

    checkVerification();
  }, [navigate, location.search]);

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
