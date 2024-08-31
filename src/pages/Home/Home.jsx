import Explore from "../../Components/Home Component/Explore";
import Header from "../../Components/Home Component/Header";
import NavbarTitle from "../../Components/Home Component/NavbarTitle";
import Devices from "../../Components/Home Component/Devices";
import Preloader from "../../utils/Preloader";
import Faq from "../../Components/Home Component/Faq";
import Pricing from "../../Components/Home Component/Plan";
import Trial from "../../Components/Home Component/Trial";
import Footer from "../../utils/Footer";
import BackToTop from "../../utils/BackToTop";
import { useEffect, useState } from "react";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.title = "Home";
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <div>
      {!loaded ? (
        <Preloader />
      ) : (
        <div>
          <Header />
          <div className="others">
            <NavbarTitle />
            <Explore />

            <Devices />
            <Faq />
            <Pricing />
            <Trial />
            <Footer />
            <BackToTop />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
