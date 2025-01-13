import { useState } from "react";
const useFormSupport = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    number: "",
  });

  const handlePhoneNumberChange = (value) => {
    setState((prevValue) => ({
      ...prevValue,
      number: value,
    }));
  };

  const [errors, setErrors] = useState({
    email: "",
    checkbox: "",
  });
  const [touched, setTouched] = useState({
    email: false,
  });

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    if (name === "email") {
      if (!value.endsWith("@gmail.com")) {
        setErrors({
          email: "Please enter a valid email address ending with @gmail.com.",
        });
      } else {
        setErrors({
          email: "",
        });
      }
    }
  };

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
    if (!event.target.checked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        checkbox: "You must agree with the Terms of Use and Privacy Policy.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        checkbox: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isCheckboxChecked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        checkbox: "You must agree with the Terms of Use and Privacy Policy.",
      }));
      return;
    }

    console.log("Form submitted:", state);

    setState({
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      message: "",
    });
    setErrors({
      message: "",
      email: "",
    });
    setTouched({
      email: false,
    });

    setIsCheckboxChecked(false);
  };

  const handleBlur = () => {
    setTouched((prev) => ({ ...prev, email: true }));
  };
  return {
    state,
    errors,
    touched,
    isCheckboxChecked,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    handlePhoneNumberChange,
    handleBlur,
  };
};

export default useFormSupport;
