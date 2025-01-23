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
import "./styles/home.css";
import SubscriptionModal from "./components/SubscriptionModal";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

    const isFirstVisit = localStorage.getItem("visited");

    if (!isFirstVisit) {
      setTimeout(() => {
        setShowModal(true);
      }, 6000);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const markAsVisited = () => {
    localStorage.setItem("visited", "true");
  };

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

      {showModal && (
        <SubscriptionModal
          open={showModal}
          onClose={closeModal}
          onVisited={markAsVisited}
        />
      )}
    </div>
  );
};

export default Home;
