import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const SubscriptionModal = ({ open, onClose, onVisited }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(open);

  useEffect(() => {
    if (open) {
      setIsDialogOpen(true); 
    } else {
      setIsDialogOpen(false); 
    }
  }, [open]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSubscribe = () => {
    if (!email) {
      setEmailError("Please enter a valid email.");
      return;
    }

    console.log("Subscribed with email:", email);
    onVisited();
    onClose();
  };

  const handleClose = () => {
    onVisited();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableScrollLock
      PaperProps={{
        style: {
          backgroundColor: "#1A1A1A",
          color: "#fff",
          transition: "opacity 0.3s ease-in-out", 
          opacity: isDialogOpen ? 1 : 0, 
        },
      }}
    >
      <DialogTitle style={{ color: "#fff" }}>
        Subscribe to Our Service!
      </DialogTitle>
      <DialogContent>
        <p style={{ color: "#fff" }} className="mb-[10px]">
          Enter your email below to receive updates and premium features:
        </p>

        <TextField
          label="Your Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          error={emailError !== ""}
          helperText={emailError}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          InputProps={{
            style: { color: "#fff", borderColor: "#fff" },
          }}
          FormHelperTextProps={{
            style: { color: "#fff" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#fff",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Close
        </Button>
        <Button color="primary" onClick={handleSubscribe}>
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubscriptionModal;
