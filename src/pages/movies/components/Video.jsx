/* eslint-disable react/no-unknown-property */
import video from "../../../public/videos/Avengers Endgame _ The Big Three Fight Scenes.mp4";
import Navbar from "../../../components/ui/Navbar";
import { useEffect } from "react";

const Video = () => {
  useEffect(() => {
    document.title = "Video";
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

export default Video;
