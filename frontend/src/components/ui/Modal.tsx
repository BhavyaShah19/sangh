import React from "react";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded shadow-lg min-w-[320px] max-w-[90vw]">
        <button
          className="absolute text-3xl top-2 right-4 text-black hover:text-red-500"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-xl text-black font-bold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal; 