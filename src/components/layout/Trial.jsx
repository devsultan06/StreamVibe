/* eslint-disable react/no-unescaped-entities */
import "./styles/layout.css";
const Trial = () => {
  const handleClick = () => {
    window.open("/subscription", "_blank");
  };

  return (
    <div
      className="flex justify-between bg-[#1a1a1a] px-[70px] pb-[100px] pt-[50px] max-590:px-[10px] max-590:pb-[100px] max-600:block max-600:text-center max-860:px-[20px] max-860:pb-[100px]"
      id="trial"
    >
      <div
        className="max-600:p[60px] h-[30vh] w-full items-center rounded-lg bg-[url('/images/trialbg.png')] bg-cover bg-center p-12 text-white max-600:h-[40vh] max-1075:px-[20px] max-1075:marker:py-[30px]"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="4000"
      >
        <div className="flex justify-between max-600:block max-600:text-center">
          <div data-aos="fade-right">
            <h1 className="text-xl">Start your free trial today!</h1>
            <p className="text-grey60">
              This is a clear call to action that encourages users to sign up
              for a free trial of StreamVibe.
            </p>
          </div>

          <div>
            <button
              className="mt-[10px] rounded-md bg-red45 p-[10px] font-bold transition duration-300 ease-in-out hover:bg-[#0f0f0f]"
              onClick={handleClick}
            >
              Start a Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
