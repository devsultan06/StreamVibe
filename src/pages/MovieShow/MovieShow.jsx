/* eslint-disable react/no-unknown-property */
import video from "/videos/Avengers Endgame _ The Big Three Fight Scenes.mp4";
import { useEffect } from "react";

const MovieShow = () => {
  useEffect(() => {
    document.title = "MovieShow";
  }, []);
  return (
    <div className="bg-black10">
      <div className="vid-tag">
        <video autoPlay controls="true">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MovieShow;
