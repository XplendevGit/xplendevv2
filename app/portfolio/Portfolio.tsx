// app/Portfolio.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import XplendevCard from "../components/custom/XplendevCards";

const Portfolio = () => {
  const projects = [
    {
      title: "Abogados",
      time: "Sitio Web",
      eth: "NextJS 14",
      image: "https://i.postimg.cc/7hk8B9gp/law5.png",
      link: "https://lawyersv2.vercel.app/",
    },
    {
      title: "Horizon Property",
      time: "Sitio Web",
      eth: "NextJS 14",
      image: "https://i.postimg.cc/rFF2xXdX/horizon1.png",
      link: "https://horizon-property-webpage.vercel.app/",
    },
    {
      title: "Portafolio Profesional",
      time: "Sitio Web",
      eth: "NextJS 14",
      image: "https://i.postimg.cc/1t0YzQqj/portfolio1.png",
      link: "https://portafolioluisrivera.vercel.app/",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [focusMode, setFocusMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
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

  const handleFocusMode = () => {
    setFocusMode(true);
    setTimeout(() => {
      setFocusMode(false);
    }, 400);
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          className={`relative flex items-center justify-center`}
          animate={{
            scale: focusMode ? 1.1 : 1,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
            duration: 0.7,
          }}
        >
          <div className="relative w-[320px] h-[500px] justify-center items-center flex">
            {projects.map((project, index) => {
              const position =
                (index - activeIndex + projects.length) % projects.length;
              return (
                <XplendevCard
                  key={index}
                  project={project}
                  position={position}
                  activeIndex={activeIndex}
                  totalProjects={projects.length}
                  onDragEnd={handleDragEnd}
                />
              );
            })}
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-4xl lg:text-5xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Proyectos <span className="text-pink-500">Web</span> y{" "}
            <span className="text-[#28F1CC]">Android</span> a medida
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Conoce nuestros últimos proyectos desarrollados completamente a medida,
            combinando diseño, funcionalidad y tecnología de vanguardia.
          </motion.p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <motion.button
              className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFocusMode}
            >
              Ver Proyectos
            </motion.button>

            <Link href={"#contact"}>
              <motion.button
                className="border-2 border-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contáctanos
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
