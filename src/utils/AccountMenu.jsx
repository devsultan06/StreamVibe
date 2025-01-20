import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function AccountMenu() {
  const {
    user: { username},
  } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    setOpenModal(true);
    handleClose();
  };

  const handleLogoutConfirm = () => {
    setOpenModal(false);
    navigate("/");
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleProfileClick = () => {
    navigate("/profile");
    handleClose();
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            sx={{ p: 0 }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#E50000",
                fontWeight: 600,
              }}
            >
              {username[0]}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        disableScrollLock
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              backgroundColor: "#1A1A1A",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                backgroundColor: "#1A1A1A",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ color: "#EAEAEA", mb: 1 }}>{username}</MenuItem>
        <MenuItem sx={{ color: "#EAEAEA", mb: 1 }} onClick={handleProfileClick}>
          <Avatar /> Profile
        </MenuItem>

        <MenuItem sx={{ color: "#EAEAEA", mb: 1 }}>
          <ListItemIcon>
            <PersonAdd fontSize="small" sx={{ color: "#EAEAEA" }} />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem sx={{ color: "#EAEAEA", mb: 1 }}>
          <ListItemIcon>
            <Settings fontSize="small" sx={{ color: "#EAEAEA" }} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogoutClick} sx={{ color: "#EAEAEA", mb: 1 }}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "#EAEAEA" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="logout-modal-title"
        aria-describedby="logout-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 200,
            bgcolor: "#1A1A1A",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            color: "#EAEAEA",
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography
            id="logout-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 1, p: 1 }}
          >
            Are you sure you want to log out?
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-around" }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleLogoutConfirm}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              style={{ borderColor: "#EAEAEA", color: "#EAEAEA" }}
              onClick={handleModalClose}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
