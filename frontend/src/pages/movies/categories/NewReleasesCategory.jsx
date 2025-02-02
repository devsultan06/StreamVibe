/* eslint-disable react/prop-types */
const handleClick = () => {
  window.open("/movies", "_blank");
};
const NewReleasesCategory = ({ released, images, isShow }) => {
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
          alt="Show"
          className="w-full"
        />{" "}
      </div>
      <div className="category-title hover:cursor-pointe mt-2.5 flex justify-between rounded-md p-2.5 transition duration-300 ease-in hover:bg-[#1a1a1a]">
        <div className="flex w-full items-center justify-center rounded-[20px] border border-white/30 p-[7px]">
          <p className="text-[14px]">
            Released at {!isShow ? released[0] : released[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewReleasesCategory;
