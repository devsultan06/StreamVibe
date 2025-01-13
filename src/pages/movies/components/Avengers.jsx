/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Small_Play_Button from "/images/small-play-button.png";
import Plus from "/images/plus.png";
import Thumbs from "/images/thumbs.png";
import Volume from "/images/volume.png";
import SwipeLeftImage from "/images/button-left.png";
import SwipeRightImage from "/images/button-right.png";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Button from "./Button";

const Avengers = () => {
  const handleClick = () => {
    window.open("/movieshow", "_blank");
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleLike = () => {
    setIsVisible(true);
    setTimer(
      setTimeout(() => {
        setIsVisible(false);
      }, 3000),
    );
  };

  return (
    <div className="avengers-container">
      <section
        className="avengers-box rounded-[10px] pt-[200px] text-white max-600:pt-[150px]"
        data-aos="fade-right"
      >
        <h1 className="text-[32px] font-extrabold brightness-[3]">
          Avengers : Endgame
        </h1>
        <p className="px-[200px] py-[10px] text-[20px] text-grey60 max-800:text-[18px] max-1075:px-[0px]">
          With the help of remaining allies, the Avengers must assemble once
          more in order to undo Thanos's actions and undo the chaos to the
          universe, no matter what consequences may be in store, and no matter
          who they face... Avenge the fallen.
        </p>

        <div className="flex items-center justify-center gap-[10px] max-600:block max-600:gap-[1px]">
          <button
            className="flex items-center justify-center gap-2 rounded bg-red45 px-4 py-2 font-bold text-white max-600:w-full"
            onClick={handleClick}
          >
            {" "}
            <img src={Small_Play_Button} />
            Play Now
          </button>
          <div className="flex items-center justify-center gap-[10px]">
            <Button>
              <img src={Plus} alt="" />
            </Button>
            <Button onClick={handleLike}>
              <img src={Thumbs} alt="" />
            </Button>
            <Button>
              <img src={Volume} alt="" />
            </Button>
          </div>
        </div>

        <div className="mt-[20px] flex items-center justify-between p-[10px] max-800:hidden">
          <button className="movies-swipe-button-prev bg-black10">
            <img src={SwipeLeftImage} alt="" />
          </button>

          <button className="movies-swipe-button-next bg-red45">
            <img src={SwipeRightImage} alt="" />
          </button>
        </div>
        {isVisible && (
          <Alert severity="success" className="success" data-aos="fade-up">
            Thank you for liking our video
          </Alert>
        )}
      </section>
    </div>
  );
};

export default Avengers;
