"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-12 lg:py-20 gap-12 lg:gap-24">
        {/* Left Content - Text and Buttons */}
        <div className="flex flex-col items-start max-w-xl text-center lg:text-left">
          <motion.h1
            className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            La <span className="text-[#28F1CC]">App</span> Perfecta <br />
            <span className="text-pink-500">Para tu Negocio</span>
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Presentamos{" "}
            <span className="text-[#57E174] font-bold">NutriSnap</span>, nuestra
            última aplicación diseñada para revolucionar la forma en que
            gestionas tu nutrición. Con inteligencia artificial,{" "}
            <span className="font-bold text-[#57E174]">NutriSnap </span>
            te ayuda a elegir los mejores alimentos según tus metas de salud y
            necesidades personales. Evalúa objetivos nutricionales, compara
            alimentos con IA y recibe recomendaciones personalizadas, incluso
            si tienes condiciones médicas específicas.
          </motion.p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="/landingapp"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* SVG Icon for App Store */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M4 17l4 4 4-4" />
                <path d="M20 7l-4-4-4 4" />
              </svg>
              Descargar App
            </motion.a>

            <motion.a
              href="/membershipenterprise"
              className="border-2 border-gray-500 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* SVG Icon for Google Play */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M3 6h18v12H3z" />
                <path d="M6 6v12" />
              </svg>
              Más Información
            </motion.a>
          </div>
        </div>

        {/* Right Content - Image */}
        <motion.div
          className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://i.postimg.cc/XJqbd0rH/nutrisnap_icon_1.png"
            alt="NutriSnap App Screenshot"
            className="rounded-2xl"
            layout="intrinsic"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
