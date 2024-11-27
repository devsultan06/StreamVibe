/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import SwipeLeftImage from "/images/button-left.png";
import SwipeRightImage from "/images/button-right.png";
import categories from "./../../../data/categories";
import { SwiperSlide } from "swiper/react";
import Category from "./../../home/components/Category";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const MoviesSection = () => {
  return (
    <Box
      component="fieldset"
      sx={{
        border: "2px solid #333", // Dark border for the fieldset
        borderRadius: "8px",
        padding: "16px",

        color: "#FFFFFF",
        position: "relative",
        marginTop: "60px",
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
      <div className=" bg-black10 text-white">
        <div className="explore-header flex justify-between">
          <div className="explore-head" data-aos="fade-right">
            <h1 className="text-xl">Explore our wide variety of categories</h1>
            <p className="explore-para text-grey60">
              Whether youre looking for a comedy to make you laugh.
            </p>
          </div>
          <div
            className="swipe flex justify-between items-center gap-20 bg-black06"
            data-aos="fade-right"
          >
            <button className="swipe-button-prev bg-black10">
              <img src={SwipeLeftImage} alt="" />
            </button>
            <button className="swipe-button-next bg-black10">
              <img src={SwipeRightImage} alt="" />
            </button>
          </div>
        </div>
        <div className="categories">
          <Swiper
            className="swiper-container"
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            breakpoints={{
              1094: {
                slidesPerView: 4.7,
              },

              800: {
                slidesPerView: 2.7,
              },

              300: {
                slidesPerView: 1.7,
                pagination: {
                  clickable: true,
                },
              },
            }}
            navigation={{
              nextEl: ".swipe-button-next",
              prevEl: ".swipe-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              className: "swiper-pagination-custom",
            }}
          >
            {categories.map((categories) => (
              <SwiperSlide key={categories.title}>
                <Category {...categories} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination hidden-md-and-up"></div>
          </Swiper>
        </div>
      </div>
    </Box>
  );
};

export default MoviesSection;
