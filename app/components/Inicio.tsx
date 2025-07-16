"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Inicio = (props: Props) => {

  const handleButtonClick2 = () => {
    const membershipsSection = document.getElementById("app");
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonClickMemberships = () => {
    const membershipsSection = document.getElementById("memberships");
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen h-auto w-full bg-gradient-to-t from-[#29F2CD] via-[#243B55] to-[#141E30] bg-cover bg-center relative flex justify-center items-center overflow-hidden pt-[90px] md:pt-0">
      {/* Contenedor principal */}
      <div className="w-full h-full flex flex-wrap justify-center items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.5, 0.95] }}
          className="contenedor-inicio grid items-center max-w-[1240px] w-full gap-10 md:grid-cols-2"
        >
          {/* Columna izquierda con el título y subtítulo */}
          <div className="md:text-left">
            <h1 className="text-[#ffffff] text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Desarrollo Completo de
              <span className="text-[#D43EFF]"> Sitios Web</span>,
              <span className="text-[#C6FF00]"> Aplicaciones Móviles </span>
              <span className="text-white"> y </span>
              <span className="text-[#FF6F00]"> ChatBotAI </span> 
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Impulsamos tu negocio con sitios web y aplicaciones móviles de alto nivel, diseñados para innovar y escalar. Integramos ChatBots AI personalizados que optimizan la interacción con tus clientes, garantizando una presencia digital impactante, segura y optimizada para conversión.
            </p>

            {/* Botones debajo del texto */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">

                <button 
                onClick={handleButtonClickMemberships}
                className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold py-2 px-4 md:px-6 md:py-3 rounded-full hover:opacity-90 transition-all duration-200">
                  Sitios & Aplicaciónes
                </button>

              <button
                onClick={handleButtonClick2}
                className="border border-gray-500 text-white font-bold py-2 px-4 md:px-6 md:py-3 rounded-full hover:bg-gray-700 transition-all duration-200"
              >
                ChatBot AI
              </button>

            </div>
          </div>

          {/* Columna derecha con el círculo animado e imagen central */}
          <div className="flex justify-center items-center relative">
            <div className="relative z-1 flex items-center justify-center">
              {/* Círculo dinámico */}
              <motion.div
                className="absolute w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-[#D43EFF] via-[#C6FF00] to-[#243B55] blur-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              ></motion.div>

              {/* Imagen central */}
              <motion.div
                className="relative z-1 w-[320px] h-[330px] md:w-[400px] md:h-[400px] lg:w-[430px] lg:h-[430px] flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="https://i.postimg.cc/B6dyknK5/portada-03-Photo.png"
                  alt="Imagen central"
                  className="object-contain"
                  width={550}
                  height={550}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Inicio;
