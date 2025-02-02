/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
