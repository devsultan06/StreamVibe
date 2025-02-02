import Small_Play_Button from "/images/small-play-button.png";
const NavbarTitle = () => {
  const handleClick = () => {
    window.open("/movies", "_blank");
  };

  return (
    <div className="relative h-[370px] bg-black10 p-5 text-center align-middle text-white">
      <h1 className="text-xl" data-aos="fade-down">
        The Best Streaming Experience
      </h1>
      <p
        className="mb-[10px] mt-[10px] px-[150px] text-[20px] max-860:px-0 max-1075:px-[0px]"
        data-aos="fade-down"
      >
        StreamVibe is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere.
      </p>

      <button
        data-aos="fade-down"
        onClick={handleClick}
        className="text-base relative z-50 mt-5 inline-flex items-center justify-center gap-1.5 rounded-md bg-red45 p-2.5 font-bold text-white outline-none transition duration-500 ease-in-out hover:bg-[#1a1a1a]"
      >
        {" "}
        <img src={Small_Play_Button} alt="" className="w-5 outline-none" />
        Start Watching Now
      </button>
    </div>
  );
};

export default NavbarTitle;
