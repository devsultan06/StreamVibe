import { useState, useEffect } from "react";
import { VscFoldUp } from "react-icons/vsc";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          data-aos="fade-up"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#e50000",
            color: "#fff",
            padding: "15px",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <VscFoldUp
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          />
        </div>
      )}
    </>
  );
};

export default BackToTop;
