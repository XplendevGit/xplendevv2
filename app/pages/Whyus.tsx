"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import XplendevCards from "../components/custom/XplendevCards";

type Props = {};

const Whyus = (props: Props) => {
  // Datos de las tarjetas
  const projects = [
    {
      title: "Innovación Única",
      time: "Característica",
      eth: "Next.js + WordPress",
      image: "https://i.postimg.cc/65WFKVk8/icon-001.png",
      link: "#",
    },
    {
      title: "Diseño Profesional",
      time: "Característica",
      eth: "Responsivo y Atractivo",
      image: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
      link: "#",
    },
    {
      title: "Escalabilidad Garantizada",
      time: "Característica",
      eth: "100% Administrable",
      image: "https://i.postimg.cc/6QKWxbND/icon-003.png",
      link: "#",
    },
    {
      title: "Tecnología Vanguardista",
      time: "Característica",
      eth: "Next.js + WordPress",
      image: "https://cdn-icons-png.flaticon.com/512/6469/6469763.png",
      link: "#",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Rotación automática cada 5 segundos
    return () => clearInterval(interval);
  }, [projects.length]);

  const handleDragEnd = (_: any, info: any) => {
    const offsetX = info.offset.x;

    if (offsetX < -100) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    } else if (offsetX > 100) {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#243B55] via-[#141E30] to-[#243B55] py-20 px-6">
      {/* Título superior */}
      <div className="text-center mb-28">
        <motion.h1
          className="text-white text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¿Por Qué Elegir <span className="text-[#C6FF00]">Xplendev</span> <br /> para Implementar Tu{" "}
          <span className="text-[#D43EFF]">Sitio Web</span>?
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg md:text-xl mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transformamos ideas en sitios web impactantes, combinando diseño profesional y tecnologías de vanguardia.
        </motion.p>
      </div>

      {/* Contenedor principal */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        {/* Imagen central con círculo animado */}
        <div className="relative z-1 flex items-center justify-center mb-28">
          {/* Círculo dinámico */}
          <motion.div
            className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-r from-[#D43EFF] via-[#C6FF00] to-[#243B55] blur-lg"
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
            className="relative z-1 w-40 h-40 md:w-[250px] md:h-[250px] bg-[#141E30] rounded-full flex items-center justify-center shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://i.postimg.cc/gcq7ky4m/1-removebg-preview.png"
              alt="Imagen central"
              className="object-contain pt-4"
              width={220}
              height={220}
            />
          </motion.div>
        </div>

        {/* Contenedor de tarjetas */}
        <motion.div
          className="relative w-[320px] h-[500px] justify-center items-center flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => {
            const position =
              (index - activeIndex + projects.length) % projects.length;

            return (
              <XplendevCards
                key={index}
                project={project}
                position={position}
                activeIndex={activeIndex}
                totalProjects={projects.length}
                onDragEnd={handleDragEnd}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Whyus;
