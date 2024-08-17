import { useEffect } from "react";
import "react-phone-number-input/style.css"; // Import the styles
import PhoneInput from "react-phone-number-input";

const Subscription = () => {
  useEffect(() => {
    document.title = "Subscription";
  }, []);
  return (
    <div>
      <div>
        <PhoneInput
          international
          defaultCountry="US" // You can set the default country here
          placeholder="Enter phone number"
        />
      </div>
    </div>
  );
};

export default Subscription;
