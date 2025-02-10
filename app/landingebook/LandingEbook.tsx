"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LandingEbook = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    phone: "",
    country: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/download-ebook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setDownloadLink(result.downloadUrl); // URL del Ebook
      } else {
        alert("Error al procesar la solicitud. Inténtalo nuevamente.");
      }
    } catch (error) {
      console.error("Error en el formulario:", error);
      alert("Ocurrió un error. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };



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

         <div className="min-h-screen flex flex-col items-center  justify-center py-16 px-6 pt-32">

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl md:text-2xl text-center font-bold text-gray-800 mb-4">¡Descarga tu Ebook Gratis!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nombre" placeholder="Tu Nombre" required value={formData.nombre} onChange={handleChange} className="w-full text-sm md:text-base px-3 py-2 border rounded-md"/>
          <input type="email" name="email" placeholder="Correo Electrónico" required value={formData.email} onChange={handleChange} className="w-full text-sm md:text-base px-3 py-2 border rounded-md"/>
          <input type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} className="w-full text-sm md:text-base px-3 py-2 border rounded-md"/>
          <input type="text" name="country" placeholder="País" value={formData.country} onChange={handleChange} className="w-full text-sm md:text-base px-3 py-2 border rounded-md"/>
          <input type="text" name="website" placeholder="Sitio Web (opcional)" value={formData.website} onChange={handleChange} className="w-full px-3 py-2 border rounded-md"/>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold">{isSubmitting ? "Procesando..." : "Descargar Ebook"}</button>
        </form>

        {downloadLink && (
          <div className="mt-4 text-center">
            <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="text-indigo-500 font-bold">📥 Descargar Ebook</a>
          </div>
        )}
      </motion.div>
    </div>
    </div>
  );
};

export default LandingEbook;