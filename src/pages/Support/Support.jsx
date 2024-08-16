/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Navbar from "../../utils/Navbar";
import { useEffect} from "react";
import SupportImage from "/images/support-img.png";
import Form from "../../Components/Support Comonent/Form";

const Support = () => {
  useEffect(() => {
    document.title = "Support";
  }, []);

  
  return (
    <div className="bg-black10 support">
      <Navbar />
      <div className="support-box">
        <div className="left">
          <h1 className="text-xl">Welcome to our support page!</h1>
          <p className="text-grey60">
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <img src={SupportImage} alt="" />
        </div>
        <div className="right">
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Support;
