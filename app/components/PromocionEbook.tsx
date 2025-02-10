"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const PromocionEbook = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141E30] via-[#243B55] to-[#112240] flex flex-col items-center py-16 px-6 pt-32">
      {/* Contenedor principal con límite de ancho */}
      <div className="max-w-[1240px] w-full px-6">
        
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold text-white mb-4">
            Claves para un Sitio Web Exitoso
          </h1>
          <p className="text-base lg:text-lg text-gray-300">
            Descarga nuestro <span className="text-indigo-400 font-semibold">Ebook GRATUITO</span> y descubre todo lo que necesitas para planificar, 
            desarrollar y mantener un sitio web profesional. Desde la elección de tecnologías hasta la optimización y seguridad.
          </p>
        </motion.header>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        >
          {/* Imagen */}
          <div className="flex justify-center">
            <Image
              src="https://i.postimg.cc/Z5qT93np/Imagen-Ebook-SW.png"
              alt="Startup Lessons"
              width={500}
              height={400}
              style={{ filter: "drop-shadow(20px 15px 15px rgba(0, 0, 0, 0.3))" }}
            />
          </div>

          {/* Sección de texto */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Descarga nuestro Ebook y Aprende Sobre:
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-indigo-400">📌 Planificación y Mantenimiento:</span> Desde la idea inicial hasta el soporte post-lanzamiento.
              </li>
              <li>
                <span className="font-semibold text-indigo-400">🛠️ WordPress y Next.js:</span> Guía para elegir y desarrollar en ambas tecnologías.
              </li>
              <li>
                <span className="font-semibold text-indigo-400">🚀 SEO y Optimización:</span> Ejemplos y estrategias clave para velocidad y posicionamiento.
              </li>
            </ul>

            {/* Botón de descarga */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/landingebook">
                <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all duration-200">
                  📥 Descargar Ebook Gratis
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default PromocionEbook;
