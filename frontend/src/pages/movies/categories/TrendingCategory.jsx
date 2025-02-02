/* eslint-disable react/prop-types */
import timeicon from "/images/time.png";
import watchedicon from "/images/watchedicon.png";
import seasonicon from "/images/seasonicon.png";
const handleClick = () => {
  window.open("/movies", "_blank");
};
const TrendingCategory = ({ times, watched, images, season, isShow }) => {
  return (
    <div
      className="category mb-[60px] cursor-pointer rounded-[10px] bg-black15 p-[10px] max-800:rounded-[10px] max-800:p-[10px]"
      onClick={handleClick}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="4000"
    >
      <div className="image-box">
        <img
          src={!isShow ? images[0] : images[1]}
          alt="Movie"
          className="w-full"
        />{" "}
      </div>
      <div className="hover:cursor-pointe mt-2.5 flex justify-between rounded-md p-2.5 transition duration-300 ease-in hover:bg-[#1a1a1a]">
        <div className="time flex items-center rounded-[20px] border border-white/30 p-[7px]">
          <img src={timeicon} alt="" className="mr-[5px] w-[20px]" />
          <p>{!isShow ? times[0] : times[1]}</p>
        </div>

        <div className="likes flex items-center rounded-[20px] border border-white/30 p-[7px]">
          <img
            src={!isShow ? watchedicon : seasonicon}
            alt=""
            className="mr-[5px] w-[20px]"
          />
          <p>{!isShow ? watched : season}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCategory;
