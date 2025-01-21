/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import EndAdorment from "../../pages/auth/components/EndAdorment";

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
  inputRef,
  rows,
}) => {
  return (
    <TextField
      type={name === "password" && showPassword ? "text" : type}
      label={label}
      variant="outlined"
      name={name}
      id={id}
      value={value}
      onChange={handleInputChange}
      multiline={name === "message"}
      rows={rows}
      fullWidth={name === "message"}
      autoComplete="off"
      error={error}
      inputRef={inputRef}
      helperText={error ? helperText : ""}
      InputProps={{
        endAdornment: name === "password" && (
          <EndAdorment
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        ),
      }}
      sx={{
        width: "100%",
        marginBottom: "16px",
        "& .MuiOutlinedInput-root": {
          color: "white",
          "& fieldset": {
            borderColor: error ? "red" : "#5c5959",
          },
          "&:hover fieldset": {
            borderColor: error ? "red" : "#5c5959",
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "red" : "#5c5959",
          },
        },
        "& .MuiInputLabel-root": {
          color: error ? "red" : "white",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: error ? "red" : "white",
        },
      }}
    />
  );
};

export default InputField;
