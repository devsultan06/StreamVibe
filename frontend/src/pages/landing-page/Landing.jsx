import React from "react";
import Logo from "/images/Logo.png";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex h-screen flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: 'url("/images/StreamVibe-Home-Background.png")',
      }}
    >
      <div className="bg-black absolute left-0 top-0 mt-[15px] flex w-full items-center justify-between bg-opacity-50 p-[1.5rem] px-[5rem] max-1075:p-[10px]">
        <NavLink to="/">
          <img src={Logo} alt="StreamVibe Logo" className="max-800:w-[170px]" />
        </NavLink>
        <button
          className="text-lg rounded-md bg-red45 px-6 py-2 font-semibold hover:bg-black10"
          onClick={() => {
            navigate("/auth");
          }}
        >
          Register
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1
          className="md:text-8xl text-[50px] font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-red-500 to-yellow-400 text-transparent block bg-clip-text">
            Welcome To Stream
          </span>
          <motion.span
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-transparent block bg-clip-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            Vibe
          </motion.span>
        </motion.h1>
        <motion.p
          className="md:text-2xl text-gray-300 mt-4 text-[20px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Your ultimate destination for streaming the latest movies and TV
          shows.
        </motion.p>
        <button
          className="text-lg mt-[20px] rounded-md bg-red45 px-6 py-2 font-semibold hover:bg-black10"
          onClick={() => {
            navigate("/auth");
          }}
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
