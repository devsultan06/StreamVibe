/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import video from "/videos/Avengers Endgame _ The Big Three Fight Scenes.mp4";
import { useEffect } from "react";
import Explore from "../home/components/Explore";

const MovieShow = () => {
  useEffect(() => {
    document.title = "MovieShow";
  }, []);
  return (
    <div>
      <Explore />
    </div>
  );
};

export default MovieShow;
