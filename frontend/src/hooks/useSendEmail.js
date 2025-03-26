import { useState } from "react";
import emailjs from "emailjs-com";

const useSendEmail = (resetForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (templateParams) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;

      await emailjs.send(serviceId, templateId, templateParams, userId);

      setIsSuccess(true);
      resetForm({
        values: {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          message: "",
          email: "",
          agreeToTerms: false,
        },
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetStatus = () => {
    setIsSuccess(false);
    setError(null);
    
  };

  return {
    sendEmail,
    isLoading,
    isSuccess,
    error,
    resetStatus,
  };
};

export default useSendEmail;
