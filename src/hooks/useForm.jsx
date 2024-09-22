import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import bcrypt from "bcryptjs"; // Import bcryptjs
const useForm = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [state, setState] = useState({
    username: "",
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
      username: "",
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

    const trimmedState = {
      username: state.username.trim(),
      email: state.email.trim(),
      password: state.password.trim(),
      number: state.number.trim(),
    };

    // Validation checks
    if (!trimmedState.email.endsWith("@gmail.com")) {
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

    if (trimmedState.password.length < 11) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 11 characters.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }

    if (isLogin) {
      const storedUser = localStorage.getItem(trimmedState.email);
      if (storedUser) {
        const user = JSON.parse(storedUser);

        // Compare the hashed password
        const passwordMatch = await bcrypt.compare(
          trimmedState.password,
          user.password
        );

        if (passwordMatch) {
          setLoginShowSuccessAlert(true);
          login(user);
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        } else {
          setPasswordNotCorrect(true);
          const id = setTimeout(() => {
            setPasswordNotCorrect(false);
          }, 3000);
          setTimeoutId(id);
        }
      } else {
        setEmailNotFound(true);
        const id = setTimeout(() => {
          setEmailNotFound(false);
        }, 3000);
        setTimeoutId(id);
      }
    } else {
      if (localStorage.getItem(trimmedState.email)) {
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

      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(trimmedState.password, 10);

      const user = {
        username: trimmedState.username,
        email: trimmedState.email,
        password: hashedPassword, // Store hashed password
        number: trimmedState.number,
      };
      localStorage.setItem(trimmedState.email, JSON.stringify(user));
      localStorage.setItem("currentUser", JSON.stringify(user));

      localStorage.setItem("showCongratsAlert", "true");

      setTimeout(() => {
        setIsLogin(true);
      }, 3000);
    }

    setState({
      username: "",
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
    state,
    errors,
    touched,
    showPassword,
    isLogin,
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

export default useForm;
