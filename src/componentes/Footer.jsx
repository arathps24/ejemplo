import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-white mt-auto">
    <div className="container mx-auto py-2 px-2 flex flex-col md:flex-row justify-center items-center">
      <div className="mb-4 md:mb-0">
        <h1 className="text-lg font-semibold text-center">Mi Sitio Web</h1>
        <p className="text-sm">© 2024 Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
  );
}
