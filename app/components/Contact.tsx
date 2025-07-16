"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setResponseMessage("¡Mensaje enviado exitosamente!, Revisaremos tu Feedback.");
        setFormData({ nombre: "", mail: "", mensaje: "" });
      } else {
        setResponseMessage("Error al enviar el mensaje. Inténtalo nuevamente.");
      }
    } catch (error) {
      console.error("Error enviando el mensaje: ", error);
      setResponseMessage("Error al enviar el mensaje. Inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen h-auto w-full bg-gradient-to-b from-[#29F2CD] via-[#243B55] to-[#141E30] py-12 px-6 items-center justify-center flex flex-col pt-[80px] md:pt-0">
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1240px] mx-auto items-center">
        
        {/* Sección de información de contacto */}
        <div className="text-white flex flex-col justify-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-bold md:text-left">
            Contacta con <span className="text-[#C6FF00] md:text-[#D43EFF]">Nosotros</span>
          </h2>
          <p className="text-white md:text-gray-400 text-lg md:text-xl mt-6 md:text-left">
            Es muy importante para nosotros mantenernos en contacto contigo. Siempre estaremos
            listos para responder a cualquier pregunta que te interese. ¡Escríbenos!
          </p>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-[#1B1E32] p-8 rounded-lg shadow-lg flex flex-col justify-center w-full md:order-last border-[#1B1E32] border-2 hover:border-[#D43EFF] transition-all ease-in duration-150">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-md bg-[#243B55] text-gray-200 border border-gray-500 focus:outline-none focus:border-[#D43EFF] transition-all"
              required
            />
            <input
              type="email"
              placeholder="Tu Correo"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-md bg-[#243B55] text-gray-200 border border-gray-500 focus:outline-none focus:border-[#D43EFF] transition-all"
              required
            />
            <textarea
              placeholder="Comparte tus pensamientos"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              className="w-full py-3 px-4 rounded-md bg-[#243B55] text-gray-200 border border-gray-500 focus:outline-none focus:border-[#D43EFF] transition-all"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold hover:opacity-90 transition-all"
            >
              {isSubmitting ? "Enviando..." : "Enviar Feedback"}
            </button>
          </form>
          {responseMessage && (
            <p className="text-center text-white mt-4">{responseMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
