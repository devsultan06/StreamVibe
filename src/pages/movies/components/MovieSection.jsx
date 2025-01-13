/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import SwipeLeftImage from "/images/button-left.png";
import SwipeRightImage from "/images/button-right.png";
import categories from "./../../../data/categories";
import { SwiperSlide } from "swiper/react";
import Category from "./../../home/components/Category";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Genres from "./Genres";
import PopularGenres from "./PopularGenres";
import Trending from "./Trending";
import NewReleases from "./NewReleases";
import MustWatchMovies from "./MustWatchMovies";

const MoviesSection = () => {
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
        Movies
      </Box>
      <Genres />
      <PopularGenres />
      <Trending />
      <NewReleases />
      <MustWatchMovies />
    </Box>
  );
};

export default MoviesSection;
