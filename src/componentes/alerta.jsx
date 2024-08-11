import React from "react";

export default function Alerta({ message, isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-gray-300 rounded-lg p-8 z-10 transform transition-transform shadow-lg max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-4">Notificacion</h3>
        <p>{message}</p>
        <button
          className="mt-6 px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 focus:outline-none"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
