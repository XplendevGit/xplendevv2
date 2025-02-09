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
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Sharing Lessons Learned</h1>
        <p className="text-lg text-gray-300">From building a startup. Our own passion journey, weve started and established it to play this school in our latest thinking and move on to sharing it.</p>
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
            src="/default-image.jpg" // Cambia esta ruta por la imagen que desees
            alt="Startup Lessons"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-white mb-4">Whats Inside</h2>
          <ul className="space-y-4">
            <li className="text-gray-300">
              <span className="font-semibold text-indigo-400">The freedom and time:</span> All between software and customers are behind every facade and early.
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-indigo-400">Way you should build products:</span> Based on first-hand experience.
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-indigo-400">How to find your first customers:</span> A founders take on making your first steps.
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