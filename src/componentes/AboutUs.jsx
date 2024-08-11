import React, { useState } from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="self-center mt-14 w-full max-w-[1314px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-6 text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                Acerca de
              </div>
              <div className="mt-6 text-2xl font-extrabold leading-9 text-zinc-500 max-md:max-w-full">
                ACPM
              </div>
              <div className="mt-6 text-xl font-medium leading-8 max-md:max-w-full">
                Empresa dedicada a ofrecer soluciones integrales a equipos de
                lavanderías industriales y de autoservicio. Proporcionando
                servicios de alta calidad y eficiencia que aseguran el
                funcionamiento óptimo de los equipos y instalaciones de nuestros
                clientes. Nuestra empresa se caracteriza por dar soluciones a
                las problemáticas inmediatas con nuestros técnicos alta mente
                calificados y experimentados.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full pr-5">
            <img
              loading="lazy"
              srcSet="/src/imagenes/8.jpeg"
              className="w-full aspect-square max-md:mt-10 max-md:max-w-full rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
