/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import Logo from "/images/Logo.png";
import Toggle from "/images/toggle.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import Links from "../../data/Links";
import Aos from "aos";
import "aos/dist/aos.css";
import AccountMenu from "../../utils/AccountMenu";
import "./styles/layout.css";
import { IoIosCloseCircle } from "react-icons/io";
import Notification from "../../utils/Notification";

const Navbar = () => {
  const navRef = useRef(null);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // const [showCongratsAlert, setShowCongratsAlert] = useState(false);

  // useEffect(() => {
  //   const showAlert = localStorage.getItem("showCongratsAlert") === "true";
  //   if (showAlert) {
  //     setShowCongratsAlert(true);
  //   }
  // }, []);

  const [, setIsLoading] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleNotificationsClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  useLayoutEffect(() => {
    const animation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsLoading(false);
    };
    animation();
  }, []);

  const handleCloseMenus = () => {
    setIsNotificationsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        handleCloseMenus();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="navbar fixed left-0 right-0 top-[10px] z-[1000] mt-[15px] flex justify-between p-[1.5rem] px-[5rem] max-1075:p-[10px]"
      data-aos="fade-up"
    >
      <div className="logo">
        <NavLink to="/">
          <motion.img
            className="max-800:w-[170px]"
            src={Logo}
            alt=""
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </NavLink>
      </div>

      <nav
        className="nav-links ml-[-80px] flex items-center rounded-lg border border-[#5c5959] bg-[#0f0f0f] p-2 text-[#bfbfbf] max-920:fixed max-920:bottom-0 max-920:left-0 max-920:top-[-30px] max-920:z-[1000] max-920:mx-0 max-920:ml-0 max-920:flex max-920:h-screen max-920:w-full max-920:-translate-y-full max-920:transform max-920:flex-col max-920:items-center max-920:justify-center max-920:rounded-none max-920:bg-[#0f0f0f] max-920:p-0 max-920:text-[#bfbfbf]"
        ref={navRef}
      >
        <ul className="flex space-x-3 max-920:m-0 max-920:flex max-920:flex-col max-920:items-center max-920:justify-center max-920:p-0">
          {Links.map((link, index) => (
            <NavLink
              to={link.href}
              key={index}
              target={link.label !== "Home" ? "_blank" : "_self"}
              className={({ isActive }) =>
                isActive ? "active-link rounded-[10px]" : undefined
              }
            >
              <li className="p-[10px] text-[17.5px] transition-all duration-200 ease-in-out hover:rounded-[10px] hover:bg-[#5c5959] max-920:mt-[20px] max-920:text-[15px] max-920:transition-all max-920:duration-200 max-920:ease-in-out">
                {link.label}
              </li>
            </NavLink>
          ))}

          <button onClick={showNavbar}>
            <IoIosCloseCircle className="fixed right-5 top-5 hidden cursor-pointer text-[30px] text-grey max-920:block" />
          </button>
        </ul>
      </nav>

      <div className="right_bar flex items-center space-x-5">
        <div className="relative">
          <IoIosNotificationsOutline
            className="notification-icon cursor-pointer text-white"
            onClick={handleNotificationsClick}
          />
          {isNotificationsOpen && <Notification />}
        </div>

        <AccountMenu />
      </div>

      <div className="hidden max-920:block" onClick={showNavbar}>
        <img src={Toggle} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
