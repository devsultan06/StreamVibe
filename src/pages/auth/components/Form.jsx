/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, useContext } from "react";
import { useFormik } from "formik";
import InputField from "../../../components/ui/InputField.jsx";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import ClipLoader from "react-spinners/ClipLoader";
import AlertModal from "./Alert.jsx";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import { ThreeDots } from "react-loader-spinner";
import useLogin from "../hooks/useLogin.js";
import useRegister from "../hooks/useRegister.js";
import useGoogleAuth from "../hooks/useGoogleAuth.js";
import { getAuthSchema } from "../../../schemas/authSchema.js";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ message: "", type: "" });
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const validationSchema = getAuthSchema(isLogin);

  const handleSetMessage = (message, type) => {
    setMessage({ message, type });
  };

  const onSubmit = async (values) => {
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password.trim(),
      username: !isLogin ? values.username.trim() : undefined,
      phoneNumber: !isLogin ? values.phoneNumber : undefined,
    };

    if (isLogin) {
      await login(trimmedValues.email, trimmedValues.password, setLoading);
    } else {
      await register(
        trimmedValues.username,
        trimmedValues.email,
        trimmedValues.password,
        setLoading,
      );
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setTouched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit,
  });

  const { login, loader } = useLogin(handleSetMessage, resetForm);
  const register = useRegister(handleSetMessage, resetForm, setFieldValue);
  const signInWithGoogle = useGoogleAuth(handleSetMessage);

  useEffect(() => {
    document.title = isLogin ? "Auth | Login" : "Auth | Sign Up";
  }, [isLogin]);
  useEffect(() => {
    if (isAuthenticated) {
      setPageLoading(false);
      if (isLogin) {
        setFieldValue("email", user.email || "");
      }
    }
  }, [user, isLogin, setFieldValue, isAuthenticated]);

  const handleClickSwitch = (event) => {
    event.preventDefault();
    setIsLogin((prev) => !prev);
    setMessage("");
    resetForm();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setMessage({ message: "", type: "" });
    setTouched({
      username: true,
      email: true,
      password: true,
    });
    handleSubmit(event);

    setTimeout(() => {
      if (!isLogin && errors.username) {
        usernameRef.current.focus();
      } else if (errors.email) {
        emailRef.current.focus();
      } else if (errors.password) {
        passwordRef.current.focus();
      } else if (!isLogin && errors.phoneNumber) {
        phoneNumberRef.current.focus();
      }
    }, 0);
  };

  return (
    <>
      {loader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black06 bg-opacity-50">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#FF0000"
            ariaLabel="three-dots-loading"
          />
        </div>
      )}
      <form
        onSubmit={handleFormSubmit}
        className="w-[450px] rounded-[10px] bg-[#0f0f0f] p-[25px]"
      >
        <AlertModal message={message.message} type={message.type} />
        <h1 className="mb-[40px] mt-[10px] text-[30px] font-bold">
          {isLogin ? "Login" : "Register"}
        </h1>
        {!isLogin && (
          <InputField
            type="text"
            label="Username"
            name="username"
            id="username"
            value={values.username}
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            error={!!(errors.username && touched.username)}
            helperText={errors.username}
            inputRef={usernameRef}
          />
        )}
        <InputField
          label="Email"
          type="email"
          name="email"
          id="email"
          value={values.email}
          handleInputChange={handleChange}
          handleBlur={handleBlur}
          error={!!(errors.email && touched.email)}
          helperText={errors.email}
          inputRef={emailRef}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          id="password"
          value={values.password}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          handleInputChange={handleChange}
          handleBlur={handleBlur}
          error={!!(errors.password && touched.password)}
          helperText={errors.password}
          inputRef={passwordRef}
        />
        {!isLogin && (
          <InputField
            label="Phone Number"
            type="phoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            value={values.phoneNumber}
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            error={!!(errors.phoneNumber && touched.phoneNumber)}
            helperText={errors.phoneNumber}
            inputRef={phoneNumberRef}
          />
        )}
        <div className="mb-[10px]">
          <a
            href="/forgot-password"
            className="text-[15px] text-[white] underline"
          >
            {isLogin && "Forgot Password?"}
          </a>
        </div>
        <div className="form-actions">
          <button
            type="submit"
            className="w-full cursor-pointer rounded border-none bg-red45 px-4 py-2 font-semibold text-white outline-none transition duration-100 ease-in-out hover:bg-[#b11a1a]"
            disabled={loading}
          >
            {loading ? (
              <ClipLoader
                color="white"
                loading="true"
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : isLogin ? (
              "Login"
            ) : (
              "Register"
            )}
          </button>
          {!isLogin && (
            <div className="mt-[20px]">
              <p className="pb-[10px] text-center text-white">Or</p>
              <Button
                variant="contained"
                startIcon={<FcGoogle />}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100%",
                  padding: "0.5rem 1rem",
                  "&:hover": {
                    backgroundColor: "#b11a1a",
                  },
                }}
                onClick={signInWithGoogle}
              >
                Sign Up with Google
              </Button>
            </div>
          )}
        </div>
        <div className="existing mt-[20px] flex items-end justify-end text-white underline">
          <a href="#!" onClick={handleClickSwitch} className="text-[white]">
            {isLogin
              ? "First time using StreamVibe? Register"
              : "Already have an account? Login"}
          </a>
        </div>
      </form>
    </>
  );
};

export default Form;
