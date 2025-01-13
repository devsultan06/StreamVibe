import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Plan from "../../components/layout/Plan";
import Trial from "../../components/layout/Trial";
import Footer from "../../components/layout/Footer";
import BackToTop from "../../components/ui/BackToTop";
import PricingTable from "./components/PricingTable";
import Modal from "./components/Modal";
import PaymentForm from "./components/PaymentForm";

const Subscription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null); 

  useEffect(() => {
    document.title = "Subscription";
  }, []);

  const handleOpenModal = (id) => {
    console.log("Pay button clicked", id);
    setSelectedId(id);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedId(null); 
    document.body.style.overflow = "auto";
  };

  return (
    <div className="subscription">
      <Navbar />
      <div className="space"></div>
      <Plan onPayClick={handleOpenModal} />
      <PricingTable />
      <Trial />
      <Footer />
      <BackToTop />
      <Modal show={isModalOpen} handleClose={handleCloseModal}>
        <PaymentForm id={selectedId} />
      </Modal>
    </div>
  );
};

export default Subscription;
