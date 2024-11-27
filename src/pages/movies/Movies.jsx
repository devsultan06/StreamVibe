/* eslint-disable react/no-unescaped-entities */
// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import Navbar from "../../components/layout/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { useContext, useEffect } from "react";
import BackToTop from "../../components/ui/BackToTop";
import Avengers from "./components/Avengers";
import MoviesSection from "./components/MovieSection";
import { AuthContext } from "../../contexts/AuthContext";

const Movies = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
    } else {
      console.log("User is not authenticated");
    }
  }, [user, isAuthenticated]); // Depend on both user and isAuthenticated
  useEffect(() => {
    document.title = "Movies";
  }, []);
  return (
    <section className="movies relative">
      <Navbar />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".movies-swipe-button-next", // Unique selector
          prevEl: ".movies-swipe-button-prev", // Unique selector
        }}
        pagination={{
          el: ".movies-swiper-pagination", // Unique selector
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
      <div className="movies-swiper-pagination hidden-md-and-up"></div>
      <div className="moviesection">
        <MoviesSection />
      </div>
      <BackToTop /> {/* Add the BackToTop component here */}
    </section>
  );
};

export default Movies;
