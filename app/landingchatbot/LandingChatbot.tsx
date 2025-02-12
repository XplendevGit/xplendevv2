"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LandingChatbot = () => {

    const handleButtonClickSolicita = () => {
        const membershipsSection = document.getElementById('contact');
        if (membershipsSection) {
          membershipsSection.scrollIntoView({ behavior: 'smooth' });
        }
      };


  return (
    <div className="bg-gradient-to-b from-[#141E30] to-[#243B55] min-h-screen w-full text-white px-6 py-12">

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center text-center md:text-left"
      >
        {/* Contenido del Hero */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Potencia tu Negocio con nuestro <span className="text-[#FF6F00]">Chatbot AI</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Automatiza la atención al cliente y aumenta la eficiencia con nuestro chatbot integrado en Web y WhatsApp. Completamente personalizado para tu negocio.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="">
              <motion.button
                onClick={handleButtonClickSolicita} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group mt-4 mx-auto px-8 py-3 rounded-full font-semibold text-white text-lg cursor-pointer transition-all duration-300 bg-gradient-to-r from-[#FF6F00] to-[#FF3D00] shadow-[0_4px_15px_rgba(255,111,0,0.5)] hover:shadow-[0_6px_20px_rgba(255,61,0,0.6)]"
              >
                ¡Solicita tu Asistente!
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Imagen del Chatbot */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <Image 
            src="https://i.postimg.cc/yxc0G5fS/xplendevbot-Photoroom.png" 
            width={500} 
            height={500} 
            alt="Chatbot AI" 
            className="w-[80%] md:w-[500px] h-auto drop-shadow-[35px_25px_10px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
      </motion.section>

      {/* Beneficios Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }} 
        className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8 text-center"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-[#1B1E32] p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
          <Image src="/images/Hero/diapason.png" width={60} height={60} alt="Automatización" />
          <h3 className="text-2xl font-semibold mt-4">Automatización 24/7</h3>
          <p className="text-gray-300 mt-2">Responde automáticamente a preguntas frecuentes y agenda citas sin esfuerzo.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-[#1B1E32] p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
          <Image src="/images/Hero/robot.png" width={60} height={60} alt="Integraciones" />
          <h3 className="text-2xl font-semibold mt-4">Integraciones Inteligentes</h3>
          <p className="text-gray-300 mt-2">Conecta con Google Calendar y Gmail para gestionar reservas y notificaciones.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-[#1B1E32] p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
          <Image src="/images/Hero/inteligencia-artificial.png" width={60} height={60} alt="Soporte" />
          <h3 className="text-2xl font-semibold mt-4">Soporte Personalizado AI</h3>
          <p className="text-gray-300 mt-2">Integra tu propio asistente AI para atender a tus clientes con respuestas personalizadas.</p>
        </motion.div>
      </motion.section>
      <section className="max-w-7xl mx-auto px-6 py-20 relative flex flex-col md:flex-row items-center justify-between">
      
      {/* Contenedor Izquierdo - Imágenes en lugar de cajas de texto */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 flex flex-col items-center md:items-start gap-6"
      >
        {/* Imagen de Botpress */}
        <motion.div whileHover={{ scale: 1.05 }} className="w-[80%]">
          <Image 
            src="https://i.postimg.cc/hjSqGC3W/make.jpg" 
            width={400} 
            height={200} 
            className="rounded-2xl shadow-lg"
            alt="Botpress - Plataforma AI"
          />
        </motion.div>

        {/* Imagen de Make */}
        <motion.div whileHover={{ scale: 1.05 }} className="w-[80%]">
          <Image 
            src="https://i.postimg.cc/8CyVjd87/botpress.png" 
            width={400} 
            height={200} 
            className="rounded-2xl shadow-lg"
            alt="Make - Automatización Inteligente"
          />
        </motion.div>
      </motion.div>

      {/* Contenedor Derecho - Texto Testimonio */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mt-12 md:mt-0 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Potencia tu <span className="text-[#FF6F00]">Chatbot AI</span> con Plataformas Profesionales
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Implementamos tecnologías avanzadas como <strong>Botpress</strong> y <strong>Make</strong> para automatizar tareas, 
          agendar reuniones con Google Calendar y enviar notificaciones por correo en tiempo real con AI de manera profesional.
        </p>

        {/* Cita del Testimonio */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#1B1E32] p-6 rounded-2xl shadow-lg mt-6"
        >
          <p className="text-gray-300 text-lg italic">
            “Gracias a Xplendev y su integración con AI, automatizamos nuestros procesos y mejoramos la satisfacción del cliente.”
          </p>
          <h4 className="text-[#FF6F00] font-semibold mt-2">Mario Felipe, CEO de TeckWare</h4>
        </motion.div>
      </motion.div>
    </section>

      {/* Sección de Xelisse */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }} 
        className="max-w-7xl mx-auto text-center mt-24"
      >
        <h2 className="text-4xl font-bold text-white">Conoce a <span className="text-[#28ECC9]">Xelisse</span></h2>
        <p className="text-gray-300 mt-4 text-lg max-w-3xl mx-auto">
          Xelisse es nuestra asistente virtual, diseñada para brindar una experiencia conversacional fluida y eficaz. ¡Haz clic en nuestro botón flotante para interactuar con ella y descrubre un porcentaje de la capacidad de la AI!
        </p>
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.95 }} 
          className="mt-8 flex justify-center w-[250px] md:w-[400px] mx-auto"
        >
          <Image 
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-2 border-[#28ECC9] shadow-lg"
            src="https://i.postimg.cc/qRTrnDtv/XElisse-Ai.png" 
            width={300} 
            height={300} 
            alt="Xelisse AI" 
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default LandingChatbot;
