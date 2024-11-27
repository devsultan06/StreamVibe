/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Alert from "@mui/material/Alert";
import gsap from "gsap";

const AlertModal = ({ message, type }) => {
  const alertRef = useRef(null);

  useEffect(() => {
    if (alertRef.current && message) {
      // Animate the alert box from below when the errorMessage changes
      gsap.fromTo(
        alertRef.current,
        { opacity: 0, y: 50 }, // Start from transparent and 50px below
        {
          opacity: 1,
          y: 0, // Move to its original position
          duration: 0.5,
          ease: "power2.out", // Smooth easing for a subtle effect
        },
      );
    }
  }, [message]); // Trigger animation when the message changes

  if (!message) return null; // Don't render if there's no error

  return (
    <Alert ref={alertRef} variant="filled" severity={type} className="mt-3">
      {message}
    </Alert>
  );
};

export default AlertModal;
