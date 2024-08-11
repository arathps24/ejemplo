import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-cyan-500 text-xl font-medium leading-8 text-black shadow-lg shadow-slate-300">
      <div className="flex justify-between items-center  px-5 pt-2 pb-2">
        <div className="flex items-center justify-center gap-5 text-white text-2xl text-center ">
          <div className="my-auto text-5xl font-bolder">
            ACPM
          </div>
          <img
            src="/src/assets/output.png"
            className="w-16 h-16 hidden md:block"
            alt="Logo"
          />
        </div>
        <div className="md:hidden flex items-center justify-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex gap-5 justify-center items-center">
          <div className="self-stretch my-auto hover:text-gray-700 cursor-pointer text-white text-2xl">
            Inicio
          </div>
          <div
            className="self-stretch my-auto hover:text-gray-700 cursor-pointer text-white text-2xl"
            onClick={() => scrollToSection("services-section")}
          >
            Servicios de reparación
          </div>
          <div
            className="self-stretch my-auto hover:text-gray-700 cursor-pointer text-white text-2xl"
            onClick={() => scrollToSection("contactUs")}
          >
            Contacto
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4 items-center mt-4 md:hidden px-5 pb-5">
          <div className="w-full text-left hover:text-gray-700 cursor-pointer text-white">
            Inicio
          </div>
          <div
            className="w-full text-left hover:text-gray-700 cursor-pointer text-white"
            onClick={() => scrollToSection("services-section")}
          >
            Servicios de reparación
          </div>
          <div className="text-left w-full">
            <div
              className="w-full text-left hover:text-gray-700 cursor-pointer text-white "
              onClick={() => scrollToSection("contactUs")}
            >
            Contacto
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
