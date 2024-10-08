/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import SwipeLeftImage from "/images/button-left.png";
import SwipeRightImage from "/images/button-right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import categories from "../../data/categories";
import Category from "./Category";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
const Movies = ({ user }) => {
  return (
    <div className="explore bg-black10 text-white">
      <div className="explore-header flex justify-between">
        <div className="explore-head" data-aos="fade-right">
          <h1 className="text-xl">Explore our wide variety of categories</h1>
          <p className="explore-para text-grey60">
            Whether you're looking for a comedy to make you laugh.
          </p>
        </div>
        {user && (
          <h2 style={{ color: "black", fontSize: "10px" }}>
            Welcome, {user.fullname}!
          </h2>
        )}{" "}
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
  );
};

export default Movies;
