/* eslint-disable react/no-unknown-property */
import video from "/images/Avengers Endgame _ The Big Three Fight Scenes.mp4";
import Navbar from "../../utils/Navbar";
import { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    document.title = "Support";
  }, []);
  return (
    <div className="bg-black10">
      <Navbar />
      <div className="vid-tag">
        <video autoPlay controls="true">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Support;
