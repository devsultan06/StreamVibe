/* eslint-disable react/prop-types */
import PlayButton from "/images/Play-Video-Button-2.png";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Navbar from "../../../components/layout/Navbar";
const Header = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });
  return (
    <div className="relative mx-auto h-screen w-full bg-navbar-head-image bg-cover p-4">
      <motion.div
        className="fixed bottom-0 left-0 right-0 top-0 z-[1000] h-[5px] origin-left bg-red45"
        style={{ scaleX }}
      />
      <Navbar />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <img
          src={PlayButton}
          alt=""
          className="w-[350px] mx-auto cursor-pointer"
        />
      </div>
    </div> 
  );
};

export default Header;
