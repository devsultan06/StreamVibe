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
  const [selectedId, setSelectedId] = useState(null); // State to hold the selected ID

  useEffect(() => {
    document.title = "Subscription";
  }, []);

  const handleOpenModal = (id) => {
    console.log("Pay button clicked", id);
    setSelectedId(id); // Store the ID in the state
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedId(null); // Clear the selected ID when closing the modal
    document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
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
        {/* Pass the selected ID to PaymentForm */}
      </Modal>
    </div>
  );
};

export default Subscription;
