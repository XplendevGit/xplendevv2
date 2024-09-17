"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Inicio = (props: Props) => {

  const handleButtonClick = () => {
    const membershipsSection = document.getElementById('hero');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick2 = () => {
    const membershipsSection = document.getElementById('app');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen h-auto w-full bg-gradient-to-t from-[#29F2CD] via-[#243B55] to-[#141E30] bg-cover bg-center relative flex justify-center items-center overflow-hidden">
      {/* Contenedor principal */}
      <div className="w-full h-full flex justify-center items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.5, 0.95] }}
          className="contenedor-inicio grid items-center max-w-[1240px] w-full"
        >
          {/* Columna izquierda con el título y subtítulo */}
          <div className="col-span-1 text-white">
            <h1 className="text-[#ffffff] text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Desarrollo Completo de
              <span className="text-[#D43EFF]"> Sitios Web</span> y
              <span className="text-[#C6FF00]"> Aplicaciones Móviles </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Desarrollamos sitios web y aplicaciones móviles avanzadas que
              empoderan a las empresas para innovar y crecer. Nuestro enfoque
              basado en la tecnología garantiza que tu presencia digital no solo
              sea atractiva, sino también altamente funcional, segura y
              administrable.
            </p>

            {/* Botones debajo del texto */}
            <div className="mt-8 flex space-x-4 justify-center items-center md:justify-start md:items-start">
              <button
              onClick={handleButtonClick} 
              className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold py-2 px-4 md:px-6 md:py-3 rounded-full hover:opacity-90 transition-all duration-200">
                Sitios Web
              </button>
              <button 
              onClick={handleButtonClick2} 
              className="border border-gray-500 text-white font-bold py-2 px-4 md:px-6 md:py-3 rounded-full hover:bg-gray-700 transition-all duration-200">
                Aplicaciónes Android
              </button>
            </div>
          </div>

          {/* Columna derecha con la imagen gráfica */}
          <div className="col-span-1 flex justify-center md:justify-end items-center">
            <img
              src="https://i.postimg.cc/Qxdqgtz7/image-portada-1-rtransparent.png" // Cambia la ruta según la ubicación de tu imagen
              alt="Graphic Illustration"
              className="w-[80%] md:w-[90%] mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Inicio;
