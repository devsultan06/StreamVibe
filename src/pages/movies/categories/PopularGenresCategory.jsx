/* eslint-disable react/prop-types */
import IconRight from "/images/Icon-right.png";
const handleClick = () => {
  window.open("/movies", "_blank");
};
const PopularGenresCategory = ({ title, image }) => {
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
      <button className="mt-3 rounded bg-red45 px-3 py-1 text-white">
        Top 10 in{" "}
      </button>
      <div className="category-title hover:cursor-pointe mt-2.5 flex justify-between rounded-md p-2.5 transition duration-300 ease-in hover:bg-[#1a1a1a]">
        <p>{title}</p>
        <button>
          <img
            src={IconRight}
            alt=""
            className="w-[30px] cursor-pointer transition duration-200 ease-in-out"
          />
        </button>
      </div>
    </div>
  );
};

export default PopularGenresCategory;
