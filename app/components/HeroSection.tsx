"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0A192F] to-[#112240] w-full py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left - Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative lg:w-[540px] md:h-[320px] w-[100%] h-[220px]">
            <Image
              src="https://i.postimg.cc/Jhg9TBQs/team.jpg"
              alt="Imagen 1"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="absolute bottom-[-20px] left-[70px] bg-white rounded-xl shadow-md px-4 py-3 w-[200px] text-center z-2">
            <h4 className="text-xl font-semibold text-gray-800">Soluciones Digitales de Alto Impacto</h4>
          </div>
        </div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-white mb-4 leading-snug">
            Descrubre Nuestro Conjunto de <span className="text-[#64ffda]">Funcionalidades Únicas</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Nuestras plataformas ofrecen funcionalidades que optimizan la experiencia. <br /> Enfocados en la eficiencia de los sistemas, creamos soluciones tecnológicas diseñadas a medida por nuestro euqipo de profesionales.
          </p>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="flex items-start gap-4">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="funcionalidad"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-lg font-semibold text-white">Soluciones Digitales</h3>
                <p className="text-gray-400 text-sm">Sitios nformativos, Sitios E-commerce/E-learning, aplicaciónes móviles nativas, ChatBots personalizados y más.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Solución"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-lg font-semibold text-white">Crecimiento Digital & Posicionamiento</h3>
                <p className="text-gray-400 text-sm">Velocidad y rendimiento extremo con Next.js y WordPress, Optimización SEO avanzada para liderar en Google, Integración con pasarelas de pago y automatización de ventas.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Crecimiento"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-lg font-semibold text-white">Inteligencia Artificial Automatizada</h3>
                <p className="text-gray-400 text-sm">Chatbots para WhatsApp & Web, Flujos de conversación personalizados, Análisis de datos y métricas avanzadas.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
