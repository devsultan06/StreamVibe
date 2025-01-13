/* eslint-disable react/no-unescaped-entities */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import Navbar from "../../components/layout/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { useContext, useEffect } from "react";
import BackToTop from "../../components/ui/BackToTop";
import Avengers from "./components/Avengers";
import MoviesSection from "./components/MovieSection";
import { AuthContext } from "../../contexts/AuthContext";
import "./styles/movies.css";

const Movies = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
    } else {
      console.log("User is not authenticated");
    }
  }, [user, isAuthenticated]);
  useEffect(() => {
    document.title = "Movies";
  }, []);
  console.log("Hello");
  return (
    <section className="movies relative">
      <Navbar />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".movies-swipe-button-next",
          prevEl: ".movies-swipe-button-prev",
        }}
        pagination={{
          el: ".movies-swiper-pagination",
          clickable: true,
          className: "swiper-pagination-custom",
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slide1">
          <Avengers />
        </SwiperSlide>

        <SwiperSlide className="slide2">
          <Avengers />
        </SwiperSlide>

        <SwiperSlide className="slide3">
          <Avengers />
        </SwiperSlide>

        <SwiperSlide className="slide4">
          <Avengers />
        </SwiperSlide>
        <SwiperSlide className="slide5">
          <Avengers />
        </SwiperSlide>
      </Swiper>
      <div className="movies-swiper-pagination mt-4 flex items-center justify-center"></div>
      <div className="moviesection">
        <MoviesSection />
      </div>
      <BackToTop />
    </section>
  );
};

export default Movies;
