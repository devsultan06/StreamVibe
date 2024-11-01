/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import Alert from "@mui/material/Alert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useForm from "../../hooks/useForm";

const Form = () => {
  const {
    state,
    errors,
    touched,
    showPassword,
    isLogin,
    exist,
    emailNotFound,
    passwordNotCorrect,
    showSignUpSuccessAlert,
    showLoginSuccessAlert,
    handleInputChange,
    handleSubmit,
    handleClickShowPassword,
    handleClickSwitch,
    setTouched,
  } = useForm();
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
            First time using StreamVibe? Sign Up
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
