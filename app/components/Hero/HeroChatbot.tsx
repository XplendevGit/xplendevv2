import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {}

const HeroChatbot = (props: Props) => {
    return (
        <div className="bg-gradient-to-b from-[#29F2CD] via-[#243B55] to-[#29F2CD] min-h-screen w-full text-white px-6 py-12">
    {/* Hero Section */}
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center text-center md:text-left">
      {/* Contenido del Hero */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Potencia tu Negocio con nuestro <span className="text-[#FF6F00]">Chatbot AI</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Automatiza la atención al cliente y aumenta la eficiencia con nuestro chatbot integrado en Web y WhatsApp. Completamente personalizado para tu negocio
        </p>
        <div className="flex justify-center md:justify-start">
        <Link href="/landingchatbot">
         <div className="relative group mt-4 mx-auto px-8 py-3 rounded-full font-semibold text-white text-lg cursor-pointer transition-all duration-300 bg-gradient-to-r from-[#FF6F00] to-[#FF3D00] shadow-[0_4px_15px_rgba(255,111,0,0.5)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,61,0,0.6)] hover:from-[#FFA000] hover:to-[#FF6F00]">
            ¡Solicita tu Asistente!
          </div>
    
        </Link>
        </div>
      </div>
    
      {/* Imagen del Chatbot */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image 
          src="https://i.postimg.cc/yxc0G5fS/xplendevbot-Photoroom.png" 
          width={500} 
          height={500} 
          alt="Chatbot AI" 
          className="w-[80%] md:w-[500px] h-auto drop-shadow-[35px_25px_10px_rgba(0,0,0,0.25)]"
        />
      </div>
    </section>
        </div>
      );
    };

export default HeroChatbot