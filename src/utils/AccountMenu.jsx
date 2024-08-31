import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function AccountMenu() {
  const { user, logout } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to authentication page
  };

  const usernameInitial = user?.username ? user.username[0] : "U";
  const displayUsername = user?.username ? user.username : "User";

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
            <Avatar sx={{ width: 32, height: 32, bgcolor: "#E50000", fontWeight:600 }}>
              {usernameInitial}
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
        <MenuItem sx={{ color: "#EAEAEA", mb: 1 }}>{displayUsername}</MenuItem>
        <MenuItem sx={{ color: "#EAEAEA", mb: 1 }}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem sx={{ color: "#EAEAEA", mb: 1 }}>
          <Avatar /> My Account
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
        <MenuItem onClick={handleLogout} sx={{ color: "#EAEAEA", mb: 1 }}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "#EAEAEA" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
