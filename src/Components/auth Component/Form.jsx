/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import bcrypt from "bcryptjs"; // Import bcryptjs
import Alert from "@mui/material/Alert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
const Form = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
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

  return (
    <form onSubmit={handleSubmit}>
      {showSignUpSuccessAlert && !isLogin && (
        <Alert severity="success">
          Registration successful, kindly wait and login...
        </Alert>
      )}
      {showLoginSuccessAlert && isLogin && (
        <Alert severity="success">Log In Successful, Please wait......</Alert>
      )}
      {exist && !isLogin && (
        <Alert severity="error">Email already registered. Kindly login</Alert>
      )}
      {emailNotFound && isLogin && (
        <Alert severity="error">Email is not registered. Please sign up.</Alert>
      )}

      {passwordNotCorrect && isLogin && (
        <Alert severity="error">Incorrect Password.</Alert>
      )}

      {isLogin ? <h1>Login</h1> : <h1>Register</h1>}
      {!isLogin && (
        <div>
          <div className="form-control">
            <label htmlFor="username">UserName</label>
            <br />
            <input
              type="text"
              autoComplete="off"
              name="username"
              id="username"
              value={state.username}
              required
              onChange={handleInputChange}
              placeholder="Enter your Username"
            />
          </div>
          <div className="form-control">
            <label htmlFor="number">Phone Number</label>
            <br />
            <input
              type="tel"
              name="number"
              autoComplete="off"
              id="number"
              value={state.number}
              maxLength={11}
              minLength={11}
              required
              onChange={handleInputChange}
              placeholder="Enter your Phone Number"
            />
            {touched.number && errors.number && (
              <p className="error">{errors.number}</p>
            )}
          </div>
        </div>
      )}
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          value={state.email}
          required
          onChange={handleInputChange}
          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          placeholder="Enter your Email"
        />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <br />
        <div className="password">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="off"
            id="password"
            value={state.password}
            required
            onChange={handleInputChange}
            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            placeholder="Enter your Password"
          />
          <div
            className="password-icon"
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" className="submit">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </div>
      {isLogin ? (
        <div className="existing">
          <a href="#!" onClick={handleClickSwitch}>
            Don't yet have an account? Sign Up
          </a>
        </div>
      ) : (
        <div className="existing">
          <a href="#!" onClick={handleClickSwitch}>
            Already have an account? Login
          </a>
        </div>
      )}
    </form>
  );
};

export default Form;
