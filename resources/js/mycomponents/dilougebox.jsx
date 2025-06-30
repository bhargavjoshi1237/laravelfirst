import React from 'react';

const DialogueBox = ({ show, onClose, title, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#232323] rounded-lg shadow-lg p-6 min-w-[300px] max-w-[90vw]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button
            className="text-white text-xl px-2 hover:text-red-400"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DialogueBox;
