"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurServices = () => {

  const handleButtonClickSite = () => {
    const membershipsSection = document.getElementById("memberships");
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#141E30] to-[#243B55] text-white">
      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Descrubre Nuestro Conjunto de <br />
          <span className="text-[#D43EFF]">Funcionalidades</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 mt-4 max-w-7xl mx-auto text-lg"
        >
          Nuestras plataformas ofrecen funcionalidades que mejoran la experiencia del usuario y optimizan la eficiencia. Desde sitios web y aplicaciones móviles hasta chatbots AI, todo diseñado para llevar tu negocio al siguiente nivel.
        </motion.p>
      </div>

      {/* Contenedor de las tarjetas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-7xl justify-center items-center mx-auto">
        {/* Tarjeta Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-2 flex flex-col md:flex-row md:items-center bg-[#1B1E32] rounded-xl shadow-lg p-12 space-y-2 border-[1px] border-gray-400 hover:border-[#C6FF00]"
        >
          <div className="flex-1 text-left md:pr-24">
            <h3 className="text-2xl font-bold text-white">
               Transformamos Ideas en Soluciones Digitales de Impacto
            </h3>
            <p className="text-gray-400 mt-2">
              Desde páginas web ultra rápidas y aplicaciones móviles nativas, hasta Chatbots AI avanzados que optimizan la comunicación con tus clientes. <br /> <br />
              🔹 Sitios Web Profesionales con Next.js y WordPress <br />
              🔹 Apps iOS y Android con React Native & Expo <br />
              🔹 Chatbots Automatizados con IA y Botpress <br /> <br />
              
              
              <button 
                onClick={handleButtonClickSite}
                className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold py-2 px-4 md:px-6 md:py-3 rounded-full hover:opacity-90 transition-all duration-200 md:mx-0 mx-auto block md:mt-0 mb-6">
                  Contratar Servicios
                </button>
            </p>
          </div>
          <div className="w-40 h-40 md:w-48 md:h-48 mt-4 md:mt-0 mx-auto">
            <Image
              src="https://i.postimg.cc/wMQCNd1h/hero-A1-Photo.png"
              alt="Insights Illustration"
              width={800}
              height={800}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Tarjeta Pequeña Izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-[#1B1E32] rounded-xl shadow-lg p-6 flex flex-col md:items-center border-[1px] border-gray-400 hover:border-[#00D4EC]"
        >
          <h3 className="text-xl font-bold text-white">
            Crecimiento Digital & Posicionamiento
          </h3>
          <p className="text-gray-400 mt-2">
            📊 Más Visibilidad, Más Clientes, Más Ventas. <br /> <br />
            Desarrollamos sitios web y apps estratégicamente optimizados para atraer tráfico, mejorar la retención y maximizar conversiones.<br /> <br />
            🔹 Velocidad y rendimiento extremo con Next.js y WordPress<br />
            🔹 Optimización SEO avanzada para liderar en Google<br />
            🔹 Integración con pasarelas de pago y automatización de ventas<br /> <br />
            
            🚀 Diseñado para crecer, preparado para escalar.
          </p>
          <div className="w-40 h-40 mt-12 mx-auto">
            <Image
              src="https://i.postimg.cc/brPQ573V/hero-B1-Photo.png"
              alt="Lead Generation Illustration"
              width={800}
              height={800}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Tarjeta Pequeña Derecha */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-[#1B1E32] rounded-xl shadow-lg p-6 flex flex-col md:items-center border-[1px] border-gray-400 hover:border-[#FF6F00]"
        >
          <h3 className="text-xl font-bold text-white">
          Inteligencia Artificial Automatizada
          </h3>
          <p className="text-gray-400 mt-2">
            🤖 Potencia tu Negocio con IA y Chatbots Inteligentes <br />
            Automatiza la atención al cliente, mejora la comunicación y aumenta la eficiencia operativa con soluciones basadas en Machine Learning y Botpress AI.<br /> <br />
            🔹 Chatbots para WhatsApp & Web <br />
            🔹 Flujos de conversación personalizados <br />
            🔹 Análisis de datos y métricas avanzadas <br /> <br />
            
            📡 La inteligencia artificial al servicio de tu empresa.
          </p>
          <div className="w-40 h-40 mt-12 mx-auto">
            <Image
              src="https://i.postimg.cc/8CXxdHk0/portada_02-Photo.png"
              alt="Campaign Illustration"
              width={800}
              height={800}
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
