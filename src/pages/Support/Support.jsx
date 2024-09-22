/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Navbar from "../../utils/Navbar";
import { useEffect } from "react";
import SupportImage from "/images/support-img.png";
import Form from "../../Components/Support Component/Form";
import Faq from "../../Components/Home Component/Faq";
import Trial from "../../Components/Home Component/Trial";
import Footer from "../../utils/Footer";
import BackToTop from "../../utils/BackToTop";

const Support = () => {
  useEffect(() => {
    document.title = "Support";
  }, []);

  return (
    <div className="bg-black10 support">
      <Navbar />
      <div
        className="support-box"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="4000"
      >
        <div className="left">
          <h1 className="text-xl">Welcome to our support page!</h1>
          <p className="text-grey60">
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <img src={SupportImage} alt="" />
        </div>
        <div className="right">
          <Form />
        </div>
      </div>
      <Faq />
      <Trial />
      <Footer />
      <BackToTop /> {/* Add the BackToTop component here */}
    </div>
  );
};

export default Support;
