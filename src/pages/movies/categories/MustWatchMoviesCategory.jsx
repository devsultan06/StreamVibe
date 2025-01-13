/* eslint-disable react/prop-types */
import timeicon from "/images/time.png";
import fullstar from "/images/fullstar.png";
import halfstar from "/images/halfstar.png";
import emptystar from "/images/emptystar.png";
const handleClick = () => {
  window.open("/movies", "_blank");
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <img key={i} src={fullstar} alt="Full Star" className="h-5 w-5" />,
      );
    } else if (rating > i - 1) {
      stars.push(
        <img key={i} src={halfstar} alt="Half Star" className="h-5 w-5" />,
      );
    } else {
      stars.push(
        <img key={i} src={emptystar} alt="Empty Star" className="h-5 w-5" />,
      );
    }
  }
  return stars;
};
const MustWatchMoviesCategory = ({ time, watched, image, star }) => {
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
      <div className=" mt-2.5 block rounded-md p-2.5">
        <div className="time mb-[10px] flex items-center justify-center rounded-[20px] border border-white/30 p-[7px] transition-colors duration-200 hover:border-white/50 hover:bg-[#1a1a1a]">
          <img src={timeicon} alt="" className="mr-[5px] w-[20px]" />
          <p>{time}</p>
        </div>

        <div className="likes flex items-center justify-center gap-2 rounded-[20px] border border-white/30 p-[7px] transition-colors duration-200 hover:border-white/50 hover:bg-[#1a1a1a]">
          <div className="flex items-center">
            <div className="mr-2 flex">{renderStars(star)}</div>
            <p>{watched}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustWatchMoviesCategory;
