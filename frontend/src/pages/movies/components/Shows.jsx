import React from "react";
import Box from "@mui/material/Box";
import Genres from "./Genres";
import PopularGenres from "./PopularGenres";
import Trending from "./Trending";
import NewReleases from "./NewReleases";
import MustWatchMovies from "./MustWatchMovies";

const Shows = () => {
  return (
    <Box
      component="fieldset"
      sx={{
        border: "2px solid #333",
        borderRadius: "8px",
        padding: "16px",
        color: "#FFFFFF",
        position: "relative",
        marginTop: "60px",
        minWidth: "100%",
      }}
    >
      <Box
        component="legend"
        sx={{
          backgroundColor: "#E50000",
          color: "#FFFFFF",
          padding: "6px 15px",
          borderRadius: "4px",
          position: "absolute",
          top: "-12px",
          left: "16px",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Shows
      </Box>
      <Genres />
      <PopularGenres />
      <Trending isShow={true} />
      <NewReleases isShow={true} />
      <MustWatchMovies isShow={true} />
    </Box>
  );
};

export default Shows;
