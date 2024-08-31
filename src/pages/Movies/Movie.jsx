/* eslint-disable react/no-unescaped-entities */
// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import Navbar from "../../utils/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import MovieBox from "../../Components/Movies Component/MovieBox";
import { useEffect } from "react";
import BackToTop from "../../utils/BackToTop";

const Movies = () => {
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
          nextEl: ".swipe-button-next",
          prevEl: ".swipe-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          className: "swiper-pagination-custom",
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slide1">
          <MovieBox />
        </SwiperSlide>

        <SwiperSlide className="slide2">
          <MovieBox />
        </SwiperSlide>

        <SwiperSlide className="slide3">
          <MovieBox />
        </SwiperSlide>

        <SwiperSlide className="slide4">
          <MovieBox />
        </SwiperSlide>
        <SwiperSlide className="slide5">
          <MovieBox />
        </SwiperSlide>

        <div className="swiper-pagination hidden-md-and-up"></div>
      </Swiper>
      <BackToTop /> {/* Add the BackToTop component here */}
    </section>
  );
};

export default Movies;
