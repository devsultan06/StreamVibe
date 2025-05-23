import { SwiperSlide } from "swiper/react";
import SwipeLeftImage from "/images/button-left.png";
import SwipeRightImage from "/images/button-right.png";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import NewReleasesCategory from "../categories/NewReleasesCategory";
import newreleases from "../../../data/newreleases";

const NewReleases = ({ isShow }) => {
  return (
    <div className="mt-[30px] bg-black10 px-[30px] text-white max-590:px-[10px] max-860:px-[10px]">
      <div className="flex justify-between">
        <div >
          <h1 className="text-xl">
            {!isShow ? "New Releases" : "New Released Shows"}
          </h1>
        </div>
        <div
          className="flex h-[60px] items-center justify-between gap-20 rounded-lg bg-black06 px-2.5 max-800:hidden"
        >
          <button className="nr-swipe-button-prev cursor-pointer rounded-[5px] border-0 bg-black10 p-[8px] outline-none transition duration-300 ease-in hover:bg-red45">
            <img src={SwipeLeftImage} alt="" />
          </button>
          <button className="nr-swipe-button-next cursor-pointer rounded-[5px] border-0 bg-black10 p-2 outline-none transition duration-300 ease-in hover:bg-red45">
            <img src={SwipeRightImage} alt="" />
          </button>
        </div>
      </div>
      <div className="relative mt-[30px]">
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
            nextEl: ".nr-swipe-button-next",
            prevEl: ".nr-swipe-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            className: "swiper-pagination-custom",
          }}
        >
          {newreleases.map((categories) => (
            <SwiperSlide key={categories.released}>
              <NewReleasesCategory {...categories} isShow={isShow} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mx-auto text-center max-800:block"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default NewReleases;
