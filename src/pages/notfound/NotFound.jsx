import { useEffect } from "react";
import Image404 from "/images/404.jpg";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  });
  return (
    <div className="not-found">
      <div className="in">
        <img src={Image404} alt="" />
        <h1>404</h1>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
