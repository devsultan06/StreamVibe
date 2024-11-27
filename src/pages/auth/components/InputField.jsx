/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import EndAdorment from "./EndAdorment";

const InputField = ({
  label,
  name,
  type,
  id,
  value,
  handleInputChange,
  showPassword,
  setShowPassword,
  error,
  helperText,
  inputRef
}) => {
  return (
    <TextField
      type={name === "password" && showPassword ? "text" : type} // Toggle type based on showPassword
      label={label}
      variant="outlined"
      name={name}
      id={id}
      value={value} // Value of the input field
      onChange={handleInputChange}
      autoComplete="off" // Disable suggestions and autofill
      error={error}
      inputRef={inputRef}
      helperText={error ? helperText : ""} // Show error message if error is true
      InputProps={{
        endAdornment: name === "password" && (
          <EndAdorment
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        ),
      }}
      sx={{
        width: "100%", // Full width
        marginBottom: "16px", // Margin bottom (adjust as needed)
        "& .MuiOutlinedInput-root": {
          color: "white", // Text color in the input field
          "& fieldset": {
            borderColor: error ? "red" : "#5c5959", // Border color when not focused
          },
          "&:hover fieldset": {
            borderColor: error ? "red" : "#5c5959", // Border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "red" : "#5c5959", // Border color when focused
          },
        },
        "& .MuiInputLabel-root": {
          color: error ? "red" : "white", // Label color when not focused
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: error ? "red" : "white", // Label color when focused
        },
      }}
    />
  );
};

export default InputField;
