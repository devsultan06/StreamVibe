/* eslint-disable react/prop-types */
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const EndAdorment = ({ showPassword, setShowPassword }) => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword((prev) => !prev)}
        edge="end"
      >
        {showPassword ? (
          <VisibilityOffIcon style={{ color: "white" }} />
        ) : (
          <RemoveRedEyeIcon style={{ color: "white" }} />
        )}
      </IconButton>
    </InputAdornment>
  );
};

export default EndAdorment;