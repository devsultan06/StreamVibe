/* eslint-disable no-unused-vars */
import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/layout/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
// import useProfile from "./hooks/useProfile";

const Input = styled("input")({
  display: "none",
});

export default function ProfilePage() {
  // const { user, profileImage, handleImageChange } = useProfile();

  const {
    user: { username, email },
  } = useContext(AuthContext);

  return (
    <div className="profile">
      <Navbar />
      <div className="gap"></div>
      <Container
        className="profile-container"
        maxWidth="lg"
        sx={{ bgcolor: "#1A1A1A" }}
        style={{ borderRadius: "20px" }}
      >
        <h1 className="text-xl" style={{ color: "white", paddingTop: "10px" }}>
          My Profile
        </h1>
        <Paper
          sx={{
            p: 4,
            backgroundColor: "transparent",
            color: "#EAEAEA",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Grid container spacing={4} alignItems="center" className="det">
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              display="flex"
              justifyContent="center"
            >
              <Avatar
                sx={{
                  width: { xs: 100, sm: 120, md: 150 },
                  height: { xs: 100, sm: 120, md: 150 },
                  bgcolor: "#E50000",
                }}
                // src={profileImage || ""}
              >
                {username ? username[0] : "U"}
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  "@media (max-width: 880px)": {
                    justifyContent: "center",
                    textAlign: "center",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {username || "User"}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#888",
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {email || "user@example.com"}
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <label htmlFor="upload-button">
                    <Input
                      accept="image/*"
                      id="upload-button"
                      type="file"
                      // onChange={handleImageChange}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera sx={{ color: "#EAEAEA" }} />
                    </IconButton>
                  </label>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              display={{ xs: "flex", sm: "none" }}
              justifyContent="center"
            >
              <label htmlFor="upload-button">
                <Input
                  accept="image/*"
                  id="upload-button"
                  type="file"
                  // onChange={handleImageChange}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera sx={{ color: "#EAEAEA" }} />
                </IconButton>
              </label>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ color: "#EAEAEA" }}>
                {email || "user@example.com"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Phone Number
              </Typography>
              <Typography variant="body1" sx={{ color: "#EAEAEA" }}>
                {/* {user?.number || "+234"} */}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Username
              </Typography>
              <Typography variant="body1" sx={{ color: "#EAEAEA" }}>
                {username || "user123"}
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              sx={{
                bgcolor: "#E50000",
                "&:hover": {
                  bgcolor: "#C40000",
                },
              }}
              variant="contained"
              onClick={() => alert("Edit Profile functionality coming soon!")}
            >
              Edit Profile
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
