import { useEffect } from "react";
import Image404 from "/images/404.jpg";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  });
  return (
    <div className="not-found align-center inline-flex h-screen w-full justify-center bg-[#1a1a1a] text-center text-[30px] text-white">
      <div className="in align-center flex justify-center gap-[1rem]">
        <img src={Image404} alt="" />
        <h1>404</h1>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
