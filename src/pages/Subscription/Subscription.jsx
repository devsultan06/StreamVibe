import { useEffect } from "react";
import Navbar from "../../utils/Navbar";
import Plan from "../../Components/Home Component/Plan";
import Trial from "../../Components/Home Component/Trial";
import Footer from "../../utils/Footer";

const Subscription = () => {
  useEffect(() => {
    document.title = "Subscription";
  }, []);
  return (
    <div className="subscription">
      <Navbar />
      <div className="space"></div>
      <Plan />
      <Trial />
      <Footer />
    </div>
  );
};

export default Subscription;
