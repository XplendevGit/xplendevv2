"use client";
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

const Contact = (props: Props) => {
  const [message, setMessage] = useState(false);

  const handleClickSubmit = () => {
    setMessage(true);
    alert("Tu mensaje será enviado, te responderemos lo antes posible!. Se redireccionará la página automaticamente al presionar ACEPTAR");
  };

  return (
    <div className="min-h-screen h-auto w-full bg-gradient-to-b from-[#29F2CD] via-[#243B55] to-[#141E30] py-12 px-6 items-center justify-center flex flex-col pt-[80px] md:pt-0">
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1240px] mx-auto items-center">
        
        {/* Sección de información de contacto */}
        <div className="text-white flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
            Contacta con <span className="text-[#C6FF00] md:text-[#D43EFF]">Nosotros</span>
          </h2>
          <p className="text-white md:text-gray-400 text-lg md:text-xl mt-6 text-center md:text-left">
            Es muy importante para nosotros mantenernos en contacto contigo. Siempre estaremos
            listos para responder a cualquier pregunta que te interese. ¡Escríbenos!
          </p>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-[#1B1E32] p-8 rounded-lg shadow-lg flex flex-col justify-center w-full md:order-last">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Contáctanos</h2>
          <form 
            action="https://formsubmit.co/ca48646714845b36c95f666f850a0954" 
            method="POST"
            className="space-y-4">
            <input
              type="text"
              placeholder="Tu Nombre"
              name="nombre" 
              className="w-full py-3 px-4 rounded-md bg-[#243B55] text-gray-200 border border-gray-500 focus:outline-none focus:border-[#D43EFF] transition-all"
            />
            <input
              type="email"
              placeholder="Tu Correo"
              name="mail"
              className="w-full py-3 px-4 rounded-md bg-[#243B55] text-gray-200 border border-gray-500 focus:outline-none focus:border-[#D43EFF] transition-all"
            />
            <textarea
              placeholder="Comparte tus pensamientos"
              name="mensaje"
              rows={4}
              className="w-full py-3 px-4 rounded-md bg-[#243B55] text-gray-200 border border-gray-500 focus:outline-none focus:border-[#D43EFF] transition-all"
            />
            <button
              type="submit"
              onClick={handleClickSubmit}
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold hover:opacity-90 transition-all"
            >
              Enviar Feedback
            </button>
            <input type="hidden" name="_next" value="https://xplendev.com/"/>
            <input type="hidden" name="_captcha" value="false"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
