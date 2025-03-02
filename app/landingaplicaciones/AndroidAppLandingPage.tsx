"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const AndroidAppLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4F8] to-[#D9E2EC] flex flex-col items-center py-12 px-4 mt-12">

      {/* Hero Section */}
      <section className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center md:text-left flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6 leading-tight">
            Potencia tu negocio con nuestra <span className="text-[#FF6B6B]">Aplicación Android</span>
          </h1>
          <p className="text-lg text-[#4B5563] mb-6 max-w-md md:max-w-lg">
            Desarrollamos aplicaciones móviles personalizadas para Android, adaptadas a las necesidades de tu empresa.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="https://wa.link/5lvksx">
              <button className="bg-[#FF6B6B] text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-[#E63946] transition-all">
                ¡Quiero mi Aplicación!
              </button>
            </Link>
            <Link href="#features">
              <button className="border border-[#FF6B6B] text-[#FF6B6B] py-3 px-6 rounded-full font-semibold hover:bg-[#FF6B6B] hover:text-white transition-all">
                Conocer más
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <Image 
            src="https://i.postimg.cc/k4xhfHk9/android2.png" 
            alt="Aplicación Android personalizada" 
            width={500} 
            height={600} 
            priority
            style={{
              filter: "drop-shadow(12px 10px 10px rgba(0, 0, 0, 0.25))", // Sombra aplicada como filtro
            }}
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-20 w-full max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Item */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center border hover:border-[#FF6B6B] transition-all"
          >
            <svg className="w-16 h-16 mx-auto mb-4" fill="#FF6B6B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM10 17L5 12L6.41421 10.5858L10 14.1716L17.5858 6.58579L19 8L10 17Z" />
            </svg>
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-2">Personalización Total</h3>
            <p className="text-[#4B5563]">Diseñamos tu app a medida, ajustándonos a las necesidades específicas de tu negocio.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center border hover:border-[#FF6B6B] transition-all"
          >
            <svg className="w-16 h-16 mx-auto mb-4" fill="#FF6B6B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" />
            </svg>
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-2">Despliegue Eficiente</h3>
            <p className="text-[#4B5563]">Publicamos tu app en Google Play Store, asegurando una visibilidad óptima y un proceso sin complicaciones.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center border hover:border-[#FF6B6B] transition-all"
          >
            <svg className="w-16 h-16 mx-auto mb-4" fill="#FF6B6B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H22C22 17.5228 17.5228 22 12 22Z" />
            </svg>
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-2">Soporte Especializado</h3>
            <p className="text-[#4B5563]">Te acompañamos antes, durante y después del desarrollo para garantizar el éxito de tu proyecto.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AndroidAppLandingPage;
