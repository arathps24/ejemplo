import React, { useState } from "react";
import AboutUs from "../componentes/AboutUs";
import Services from "../componentes/Services";
import Formulario from "../componentes/Formulario";
import Footer from "../componentes/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col ">
      <AboutUs />
      <Services />
      <Formulario />
      <Footer />
    </div>
  );
};

export default Home;
