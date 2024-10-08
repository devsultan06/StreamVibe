import Small_Play_Button from "/images/small-play-button.png"
const NavbarTitle = () => {
  const handleClick = () => {
    window.open("/movies", "_blank");
  };

  return (
    <div className="navbar_title text-white align-middle text-center bg-black10 relative ">
      <h1 className="text-xxl" data-aos="fade-down">
        The Best Streaming Experience
      </h1>
      <p className=" navbar-para" data-aos="fade-down">
        StreamVibe is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere. With StreamVibe, you can
        enjoy a wide variety of content, including the latest blockbusters,
        classic movies, popular TV shows, and more. You can also create your own
        watchlists, so you can easily find the content you want to watch.
      </p>

      <button
        data-aos="fade-down"
        onClick={handleClick}
        className="bg-red45 text-white small-play-button font-bold"
      >
        {" "}
        <img
          src={Small_Play_Button}
          alt=""
          className="small-play-button-image"
        />
        Start Watching Now
      </button>
    </div>
  );
};

export default NavbarTitle;
