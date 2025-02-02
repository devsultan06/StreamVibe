/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Navbar from "../../components/layout/Navbar";
import { useEffect } from "react";
import SupportImage from "/images/support-img.png";
import Form from "./components/Form";
import Faq from "../../components/layout/Faq";
import Trial from "../../components/layout/Trial";
import Footer from "../../components/layout/Footer";
import BackToTop from "../../components/ui/BackToTop";
import "./styles/support.css";

const Support = () => {
  useEffect(() => {
    document.title = "Support";
  }, []);

  return (
    <div className="support bg-black10 text-white">
      <Navbar />
      <div
        className="support-box flex items-start justify-between gap-[10px] p-[150px_70px_100px_70px] max-990:block max-1075:p-[150px_10px_100px_10px]"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="4000"
      >
        <div className="left">
          <h1 className="text-xl">Welcome to our support page!</h1>
          <p className="text-[14px] text-grey60">
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <img src={SupportImage} alt="" className="mt-[40px] h-[400px]" />
        </div>
        <div className="right">
          <Form />
        </div>
      </div>
      <Faq />
      <Trial />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Support;
