import { useEffect } from "react";
import Navbar from "../../utils/Navbar";
import Plan from "../../Components/Home Component/Plan";
import Trial from "../../Components/Home Component/Trial";
import Footer from "../../utils/Footer";
import BackToTop from "../../utils/BackToTop";
import PricingTable from "../../Components/Subscription Component/PricingTable";

const Subscription = () => {
  useEffect(() => {
    document.title = "Subscription";
  }, []);
  return (
    <div className="subscription">
      <Navbar />
      <div className="space"></div>
      <Plan />
      <PricingTable />
      <Trial />
      <Footer />
      <BackToTop /> {/* Add the BackToTop component here */}
    </div>
  );
};

export default Subscription;
