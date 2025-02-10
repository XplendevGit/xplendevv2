"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LandingEbook = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141E30] via-[#243B55] to-[#112240] flex flex-col items-center py-16 px-6 pt-32">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold text-white mb-4 text-center">Claves para un Sitio Web Exitoso</h1>
        <p className="text-base lg:text-lg text-gray-300">Descubre todo lo que necesitas para planificar, desarrollar y mantener un sitio web profesional. Desde la elección de tecnologías hasta la optimización y seguridad.</p>
      </motion.header>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="https://i.postimg.cc/Z5qT93np/Imagen-Ebook-SW.png" // Cambia esta ruta por la imagen que desees
            alt="Startup Lessons"
            width={600}
            height={400}
            style={{ filter: "drop-shadow(20px 15px 15px rgba(0, 0, 0, 0.3))" }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-white mb-4">Descarga nuesto Ebook y Aprende Sobre:</h2>
          <ul className="space-y-4">
            <li className="text-gray-300">
              <span className="font-semibold text-indigo-400">Planificación y Mantenimiento</span> Desde la idea inicial hasta el soporte post-lanzamiento.
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-indigo-400">WordPress y Next.js</span> Guía para elegir y desarrollar en ambas tecnologías.
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-indigo-400">SEO y Optimización</span> Ejemplos y estrategias clave para velocidad y posicionamiento.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Formulario de Captura */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-16"
      >

         <div className="w-auto h-auto text-center pb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Descarga tu Ebook Gratis!</h2>
          <p className="text-gray-600">Ingresa tus datos para recibir el Ebook en tu correo electrónico.</p>
         </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">País</label>
            <input
              type="text"
              id="country"
              name="country"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Sitio Web (opcional)</label>
            <input
              type="url"
              id="website"
              name="website"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ¡Quiero Mi Ebook Gratis!
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LandingEbook;