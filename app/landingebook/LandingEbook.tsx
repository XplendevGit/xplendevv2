"use client"
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
  const [showThankYou, setShowThankYou] = useState(false); // Estado para mostrar el mensaje de agradecimiento

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowThankYou(false); // Ocultar mensaje de agradecimiento al volver a enviar

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
        setDownloadLink(result.downloadUrl);
        setShowThankYou(true); // Mostrar mensaje de agradecimiento
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
          </div>
        </motion.div>

        {/* Formulario de Captura */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-16"
        >
          <h2 className="text-xl md:text-2xl text-center font-bold text-gray-800 mb-4">¡Descarga tu Ebook Gratis!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="nombre" placeholder="Tu Nombre" required value={formData.nombre} onChange={handleChange} className="w-full text-sm md:text-base px-3 py-2 border rounded-md"/>
            <input type="email" name="email" placeholder="Correo Electrónico" required value={formData.email} onChange={handleChange} className="w-full text-sm md:text-base px-3 py-2 border rounded-md"/>
            <input type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} className="w-full text-sm md:text-base px-3 py-2 border rounded-md"/>
            <input type="text" name="country" placeholder="País" value={formData.country} onChange={handleChange} className="w-full text-sm md:text-base px-3 py-2 border rounded-md"/>
            <input type="text" name="website" placeholder="Sitio Web (opcional)" value={formData.website} onChange={handleChange} className="w-full px-3 py-2 border rounded-md"/>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition-all duration-200">
              {isSubmitting ? "Procesando..." : "Descargar Ebook"}
            </button>
          </form>

          {/* Mensaje de Agradecimiento */}
          {showThankYou && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-center bg-green-100 text-green-800 py-2 px-4 rounded-md font-semibold"
            >
              🎉 ¡Gracias por descargar nuestro Ebook! Esperamos que te sea de gran ayuda.
            </motion.div>
          )}

          {/* Enlace de descarga */}
          {downloadLink && (
            <div className="mt-4 text-center">
              <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="text-indigo-500 font-bold hover:underline">
                📥 Descargar Ebook
              </a>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default LandingEbook;
