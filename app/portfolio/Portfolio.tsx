"use client";
import { motion, useDragControls, PanInfo } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const dragControls = useDragControls();
  const [focusMode, setFocusMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, [projects.length]);

  const handleDragEnd = (_: any, info: PanInfo) => {
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
    // Enable focus mode
    setFocusMode(true);

    // Automatically disable focus mode after 2 seconds
    setTimeout(() => {
      setFocusMode(false);
    }, 400); // Adjust duration as needed
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Cards Section */}
        <motion.div
          className={`relative flex items-center justify-center`}
          animate={{
            scale: focusMode ? 1.1 : 1, // Animate both increasing and decreasing scale
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
            duration: 0.7,
          }}
        >
          <div className={`relative w-[320px] h-[500px]`}>
            {projects.map((project, index) => {
              const position =
                (index - activeIndex + projects.length) % projects.length;

              const zIndex = position === 0 ? 30 : position === 1 ? 20 : 10;

              // Calculate rotation, translation, and scaling
              const rotation =
                position === 0
                  ? "0deg"
                  : position === 1
                  ? "-5deg"
                  : "-10deg";
              const translateX =
                position === 0 ? 0 : position === 1 ? -40 : -60;
              const translateY =
                position === 0 ? 0 : position === 1 ? 30 : 40;

              // Shadow styles for cards
              const shadow =
                position === 0
                  ? "0px 10px 20px rgba(255, 105, 180, 0.6)"
                  : "0px 5px 15px rgba(0, 0, 0, 0.4)";

              return (
                <motion.div
                  key={index}
                  className={`absolute w-[300px] h-[450px] rounded-2xl overflow-hidden border-[2px] bg-gray-800 ${
                    position === 0
                      ? "border-pink-500"
                      : position === 1
                      ? "border-pink-500"
                      : "border-pink-500"
                  }`}
                  style={{
                    zIndex,
                    boxShadow: shadow, // Apply shadow dynamically
                  }}
                  animate={{
                    x: translateX,
                    y: translateY,
                    rotate: rotation,
                    scale: position === 0 ? 1 : 0.9,
                  }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragControls={dragControls}
                  onDragEnd={handleDragEnd}
                  whileHover={{
                    scale: 1.03, // Add hover effect
                    boxShadow: "0px 12px 16px rgba(255, 105, 180, 0.8)", // Brighter shadow on hover
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    layout="fill"
                    draggable={false}
                  />
                  <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-center bg-[#233A54]/95 border-t-pink-500 border-t-2">
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">{project.time}</p>
                    <p className="text-pink-400 text-xs mt-1">{project.eth}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg"
                    >
                      Visitar Sitio
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Text Section */}
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
