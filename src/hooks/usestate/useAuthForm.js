// useAuthForm.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    number: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    email: "",
    number: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    number: false,
    password: false,
  });
  const [showSignUpSuccessAlert, setSignUpShowSuccessAlert] = useState(false);
  const [showLoginSuccessAlert, setLoginShowSuccessAlert] = useState(false);
  const [exist, setExist] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);
  const [passwordNotCorrect, setPasswordNotCorrect] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  useEffect(() => {
    document.title = isLogin ? "Auth | Login" : "Auth | Sign Up";
  }, [isLogin]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    if (name === "email") {
      if (!value.endsWith("@gmail.com")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email address ending with @gmail.com.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }

    if (name === "password") {
      if (value.trim().length < 11) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must be at least 11 characters.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "",
        }));
      }
    }
  };

  const handleClickSwitch = (event) => {
    event.preventDefault();
    setState({
      fullname: "",
      email: "",
      password: "",
      number: "",
    });
    setErrors({
      password: "",
      email: "",
      number: "",
    });
    setTouched({
      email: false,
      number: false,
      password: false,
    });
    setShowPassword(false);
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched({
      email: true,
      number: true,
      password: true,
    });

    if (!state.email.endsWith("@gmail.com")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address ending with @gmail.com.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    if (state.password.trim().length < 11) {
      return;
    }

    if (isLogin) {
      const storedUser = localStorage.getItem(state.email);
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === state.password && user.email === state.email) {
          setLoginShowSuccessAlert(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          setPasswordNotCorrect(true);
          const id = setTimeout(() => {
            setPasswordNotCorrect(false);
          }, 3000);
          setTimeoutId(id);
          return;
        }
      } else {
        setEmailNotFound(true);
        const id = setTimeout(() => {
          setEmailNotFound(false);
        }, 3000);
        setTimeoutId(id);
        return;
      }
    } else {
      if (localStorage.getItem(state.email)) {
        setExist(true);
        const id = setTimeout(() => {
          setExist(false);
        }, 5000);
        setTimeoutId(id);
        return;
      }

      setSignUpShowSuccessAlert(true);
      const id = setTimeout(() => {
        setSignUpShowSuccessAlert(false);
      }, 3000);
      setTimeoutId(id);

      const user = {
        fullname: state.fullname,
        email: state.email,
        password: state.password,
        number: state.number,
      };
      localStorage.setItem(state.email, JSON.stringify(user));

      setTimeout(() => {
        setIsLogin(true);
      }, 3000);
    }

    setState({
      fullname: "",
      email: "",
      password: "",
      number: "",
    });
    setErrors({
      password: "",
      email: "",
      number: "",
    });
    setTouched({
      email: false,
      number: false,
      password: false,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  

  return {
    showPassword,
    isLogin,
    state,
    errors,
    touched,
    showSignUpSuccessAlert,
    showLoginSuccessAlert,
    exist,
    emailNotFound,
    passwordNotCorrect,
    handleInputChange,
    handleClickSwitch,
    handleSubmit,
    handleClickShowPassword,
  };
};

export default useAuthForm;
