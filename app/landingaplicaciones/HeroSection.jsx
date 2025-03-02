// pages/components/HeroSection.js
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

const features = [
  {
    icon: "https://i.postimg.cc/hP6gsCy3/androidiconpropio.png",
    title: "NutriSnap",
    description: "Obten información nutricional acerca de un alimento desde su código de barras.",
    link: "/nutrisnap",
  },
  {
    icon: "https://i.postimg.cc/hP6gsCy3/androidiconpropio.png",
    title: "Focus Brewer",
    description: "Mantente concentrado en tareas o proyectos, tómate un buen café.",
    link: "/focusbrewer",
  },
];

const HeroSection = () => {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-[#F9FAFB]">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text and Image */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2C3E50] mb-4">
            Conoce a detalle Nuestras <span className="text-[#FF6B6B]">Aplicaciones</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-lg">
            Nuestras aplicaciones están construidas a medida para cada objetivo. Descubre lo que es una aplicación de Xplendev.
          </p>
          
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          >
            <Image
              src="https://i.postimg.cc/L51GKXYd/android_posiblea.png"
              alt="App preview"
              width={400}
              height={500}
              style={{
                filter: "drop-shadow(12px 10px 10px rgba(0, 0, 0, 0.25))",
              }}
            />
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <Link href={feature.link} key={index} passHref>
              <div
                className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200 hover:border-[#FF6B6B] border cursor-pointer min-h-[150px]"
              >
                {/* Icono - centrado en móvil y alineado a la izquierda en desktop */}
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={400}
                  height={400}
                  className="w-12 h-12 flex-shrink-0"
                />
                
                {/* Texto */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-[#2C3E50]">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
