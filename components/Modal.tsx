// components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Asegúrate de incluir children aquí
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  onClick={onClose}
>
  <div
    className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
    onClick={(e) => e.stopPropagation()}
  >
    {children}
    <div className="flex justify-center mt-4"> {/* Contenedor centrado */}
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
</div>

  );
};

export default Modal;
