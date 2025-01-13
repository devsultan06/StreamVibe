import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Explore from "./components/Explore";
import Header from "./components/Header";
import NavbarTitle from "./components/NavbarTitle";
import Devices from "./components/Devices";
import Preloader from "../../components/ui/Preloader";
import Faq from "../../components/layout/Faq";
import Trial from "../../components/layout/Trial";
import Footer from "../../components/layout/Footer";
import BackToTop from "../../components/ui/BackToTop";
import Plan from "../../components/layout/Plan";
import "./styles/home.css"

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const { user, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    isAuthenticated
      ? console.log(user)
      : console.log("User is not authenticated");
  }, [user, isAuthenticated]);

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
            <Plan />
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
