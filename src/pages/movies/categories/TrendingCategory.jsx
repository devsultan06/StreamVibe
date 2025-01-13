/* eslint-disable react/prop-types */
import timeicon from "/images/time.png";
import watchedicon from "/images/watchedicon.png";
const handleClick = () => {
  window.open("/movies", "_blank");
};
const TrendingCategory = ({ time, watched, image }) => {
  return (
    <div
      className="category mb-[60px] cursor-pointer rounded-[10px] bg-black15 p-[10px] max-800:rounded-[10px] max-800:p-[10px]"
      onClick={handleClick}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="4000"
    >
      <div className="image-box">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="hover:cursor-pointe mt-2.5 flex justify-between rounded-md p-2.5 transition duration-300 ease-in hover:bg-[#1a1a1a]">
        <div className="time flex items-center rounded-[20px] border border-white/30 p-[7px]">
          <img src={timeicon} alt="" className="mr-[5px] w-[20px]" />
          <p>{time}</p>
        </div>

        <div className="likes flex items-center rounded-[20px] border border-white/30 p-[7px]">
          <img src={watchedicon} alt="" className="mr-[5px] w-[20px]" />
          <p>{watched}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCategory;
