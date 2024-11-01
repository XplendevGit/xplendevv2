"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Acercade = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] flex flex-col items-center py-12 px-6">

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 mt-12"
      >
        <h1 className="text-5xl text-[#29F2CD] font-bold mb-4">Acerca de Nosotros</h1>
        <p className="text-lg text-gray-400">
          Somos especialistas en desarrollo de sitios web y aplicaciones móviles personalizadas.
        </p>
      </motion.header>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-[#112240] border border-[#112240] rounded-lg p-8 text-center shadow-lg w-full max-w-xl mb-12 transition-all duration-150 hover:border-[#29F2CD] ease-in"
      >
        <div className="flex items-center justify-center mb-4">
          <Image
            src="https://img.icons8.com/color/64/000000/goal.png" // Icono para misión
            alt="Misión"
            className="w-16 h-16"
            height={80}
            width={80}
          />
        </div>
        <h2 className="text-3xl text-[#29F2CD] font-bold mb-4">Nuestra Misión</h2>
        <p className="text-gray-400">
          Ayudar a empresas y profesionales a alcanzar sus metas digitales a través de soluciones innovadoras y personalizadas.
        </p>
      </motion.section>

      {/* Services Section */}
      <section className="w-full max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl text-[#FF00FF] font-bold mb-6"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 mb-12"
        >
          Ofrecemos soluciones de desarrollo en sitios web y aplicaciones móviles para empresas de todos los tamaños.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] transition-all duration-150 hover:border-[#FF00FF] border ease-in"
          >
            <Image
              src="https://img.icons8.com/color/64/000000/domain.png"
              alt="Desarrollo Web"
              className="w-16 h-16 mx-auto mb-4"
              height={120}
              width={120}
            />
            <h3 className="text-2xl text-[#FF00FF] font-semibold">Desarrollo Web</h3>
            <p className="text-gray-400 mt-4">
              Creación de sitios web profesionales adaptados a tus necesidades.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] transition-all duration-150 hover:border-[#FF00FF] border ease-in"
          >
            <Image
              src="https://i.postimg.cc/K8ppqNqc/aplicacion-movil.png"
              alt="Aplicaciones Móviles"
              className="w-16 h-16 mx-auto mb-4"
              height={120}
              width={120}
            />
            <h3 className="text-2xl text-[#FF00FF] font-semibold">Aplicaciones Móviles</h3>
            <p className="text-gray-400 mt-4">
              Desarrollo de aplicaciones móviles iOS y Android para maximizar tu alcance.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] transition-all duration-150 hover:border-[#FF00FF] border ease-in"
          >
            <Image
              src="https://img.icons8.com/color/64/000000/code.png"
              alt="Soluciones Personalizadas"
              className="w-16 h-16 mx-auto mb-4"
              height={120}
              width={120}
            />
            <h3 className="text-2xl text-[#FF00FF] font-semibold">Soluciones Personalizadas</h3>
            <p className="text-gray-400 mt-4">
              Diseños y funcionalidades a medida para satisfacer los objetivos de tu negocio.
            </p>
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <div className="flex h-full w-full justify-center py-8">
          <a
            href="/servicios"
            className="inline-block text-[#FF00FF] border-[#FF00FF] border-2 font-semibold py-2 px-8 rounded-full hover:bg-[#FF00FF] hover:text-[#ffffff]"
          >
            Nuestros Servicios
          </a>
        </div>
      </section>

      {/* Why Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full max-w-6xl text-center mt-16"
      >
        <h2 className="text-4xl text-[#C6FF00] font-bold mb-6">¿Por qué elegirnos?</h2>
        <p className="text-lg text-gray-400 mb-12">
          Nuestro equipo de expertos en desarrollo de software está comprometido en ofrecerte soluciones de alta calidad y soporte continuo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] transition-all duration-150 hover:border-[#C6FF00] border ease-in">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="https://i.postimg.cc/gjTFVWZd/conocimiento-de-la-marca.png" // Icono para experiencia
                alt="Experiencia"
                className="w-16 h-16"
                height={120}
                width={120}
              />
            </div>
            <h3 className="text-2xl text-[#C6FF00] font-semibold">Experiencia</h3>
            <p className="text-gray-400 mt-4">
              Más de 10 años creando soluciones digitales innovadoras.
            </p>
          </div>

          {/* Commitment */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] transition-all duration-150 hover:border-[#C6FF00] border ease-in">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="https://img.icons8.com/color/64/000000/handshake.png" // Icono para compromiso
                alt="Compromiso"
                className="w-16 h-16"
                height={120}
                width={120}
              />
            </div>
            <h3 className="text-2xl text-[#C6FF00] font-semibold">Compromiso</h3>
            <p className="text-gray-400 mt-4">
              Nos dedicamos a cada proyecto con enfoque y dedicación para alcanzar los mejores resultados.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Acercade;
