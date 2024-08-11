import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tarjetas from "../datos/Tarjetas";

export default function Services() {
  const [grupode3, setGrupode3] = useState(window.innerWidth >= 1024 ? 3 : 1);

  useEffect(() => {
    const handleResize = () => {
      setGrupode3(window.innerWidth >= 1024 ? 3 : 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "slick-dots custom-dots",
    prevArrow: null,
    nextArrow: null,
  };

  const grupotarjetas = [];
  for (let i = 0; i < Tarjetas.length; i += grupode3) {
    grupotarjetas.push(Tarjetas.slice(i, i + grupode3));
  }

  return (
    <div
      id="services-section"
      className="overflow-hidden mt-5 bg-cyan-400 shadow-lg shadow-slate-300 transition-all duration-500"
    >
      <div className="text-center mt-3 text-6xl font-bold tracking-tighter text-white max-md:max-w-full max-md:text-4xl">
        Servicios de reparación
      </div>
      <div className="py-4 pl-1 mt-1 w-full max-md:max-w-full">
        <Slider {...settings} className="w-full mx-auto">
          {grupotarjetas.map((group, index) => (
            <div key={index} className="p-4 flex justify-center">
              <div
                className={`grid grid-cols-1 ${
                  grupode3 === 3 ? "md:grid-cols-3" : ""
                } gap-4`}
              >
                {group.map((tarjeta, tarjetaIndex) => (
                  <div
                    key={tarjetaIndex}
                    className="p-4 rounded flex flex-col items-center"
                  >
                    <div className="flex items-center justify-center mb-4 w-full">
                      <img
                        src={tarjeta.imagen}
                        alt={tarjeta.titulo}
                        className="rounded w-[450px] h-[450px] object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-black text-center">
                      {tarjeta.titulo}
                    </h2>
                    <p className="text-center text-black">
                      {tarjeta.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
