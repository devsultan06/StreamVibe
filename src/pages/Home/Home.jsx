import Explore from "../../components/home/Explore";
import Header from "../../components/home/Header";
import NavbarTitle from "../../components/home/NavbarTitle";
import Devices from "../../components/home/Devices";
import Preloader from "../../utils/Preloader";
import Faq from "../../components/home/Faq";
import Pricing from "../../components/home/Plan";
import Trial from "../../components/home/Trial";
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
