import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alerta from "./alerta";

export default function Formulario() {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const formData = new FormData(form.current);
    const nombre = formData.get("nombre");
    const correo = formData.get("correo");
    const telefono = formData.get("telefono");
    const mensaje = formData.get("mensaje");

    const newErrors = {};

    if (!nombre) {
      newErrors.nombre = "Tienes que ingresar nombre";
    }

    if (!correo) {
      newErrors.correo = "Tienes que ingresar un correo";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(correo)) {
      newErrors.correo = "El correo debe ser una dirección @gmail.com";
    }

    if (!telefono) {
      newErrors.telefono = "Tienes que ingresar un número de teléfono";
    } else if (!/^\d{10}$/.test(telefono)) {
      newErrors.telefono = "El teléfono debe ser un número de 10 dígitos";
    }

    if (!mensaje) {
      newErrors.mensaje =
        "Debes dejar una descripción del servicio en el que estás interesado";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    emailjs
      .sendForm("service_w1b0gb7", "template_8az30it", form.current, {
        publicKey: "SMfql0MZS3JwxK3vR",
      })
      .then(
        () => {
          setModalMessage("¡Mensaje enviado exitosamente!");
          setIsModalOpen(true);
          form.current.reset();
        },
        (error) => {
          setModalMessage(`Error al enviar mensaje: ${error.text}`);
          setIsModalOpen(true);
        }
      );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="h-100 flex items-center justify-center mt-10 mb-10"
      id="contactUs"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-96 bg-cyan-400 p-8 rounded-lg shadow-lg">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-white mb-6">Formulario</h2>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block text-white font-semibold">Nombre</label>
              <input
                type="text"
                name="nombre"
                className="mt-1 block w-full px-3 py-2 text-black border border-gray-400 rounded-md focus:outline-none "
              />
              {errors.nombre && (
                <p className="text-red-500 ">{errors.nombre}</p>
              )}
            </div>
            <div>
              <label className="block text-white font-semibold">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="correo"
                className="mt-1 block w-full px-3 py-2 text-black border border-gray-400 rounded-md focus:outline-none "
              />
              {errors.correo && (
                <p className="text-red-500 ">{errors.correo}</p>
              )}
            </div>
            <div>
              <label className="block text-white font-semibold">Teléfono</label>
              <input
                type="phone"
                name="telefono"
                className="mt-1 block w-full px-3 py-2 text-black border border-gray-400 rounded-md focus:outline-none "
              />
              {errors.telefono && (
                <p className="text-red-500 ">{errors.telefono}</p>
              )}
            </div>
            <div>
              <label className="block text-white font-semibold">Mensaje</label>
              <textarea
                name="mensaje"
                className="mt-1 block w-full px-3 py-2 text-black border border-gray-400 rounded-md focus:outline-none"
                rows={4}
              ></textarea>
              {errors.mensaje && (
                <p className="text-red-500 ">{errors.mensaje}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-sky-600 text-white rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 font-semibold"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Alerta
        message={modalMessage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
