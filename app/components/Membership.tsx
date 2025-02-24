"use client"
import Link from 'next/link';
import React from 'react'
import { HiOutlineCheck } from "react-icons/hi";

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const Membership = (props: Props) => {
  return (
    <div className="min-h-screen h-auto w-full bg-gradient-to-b from-[#243B55] to-[#141E30] transition-all ease-in duration-200 py-12 px-6 pt-[80px]items-center justify-center flex flex-col">
      {/* Título del Menú centrado */}
      <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          Elige tu <span className="text-[#D43EFF]">Plan Perfecto</span>
        </h1>
        <h2 className="text-gray-400 text-xl text-center">
          Te acompañamos en el proceso completo
        </h2>
      </div>

      {/* Contenedor de Planes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
        {/* Plan Básico */}
        <div className="bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#C6FF00] hover:shadow-2xl">
          <div>
            <h2 className="text-[#C6FF00] text-2xl font-bold mb-4">Sitio Básico</h2>
            <p className="text-gray-400 mb-6 lg:text-base text-sm">
              Para uso profesional y integración de nuevos sitios completos desde cero.
            </p>
            <div className="lg:text-6xl text-4xl font-bold text-white mb-4">$159.990</div>

          {/* Beneficios */}
          <div className="text-left space-y-1 md:space-y-3 xl:space-y-4 mb-6">

            {/* Tipo de Sitio */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/monitor.png" 
                alt="Landing Page" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
              />
              <p className="text-gray-300 lg:text-base text-xs">Landing Page / Portafolio Web</p>

            </div>

           {/* Administrador */}
            <div className="flex items-center">
              <Image
                src="https://img.icons8.com/fluent/48/000000/administrative-tools.png" 
                alt="Admin Site" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">Sitio Administrable</p>
            </div>

             {/* Dominio */}
            <div className="flex items-center">
              <Image
                src="https://img.icons8.com/color/48/000000/domain.png" 
                alt="Domain" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80} 
                />
              <p className="text-gray-300 lg:text-base text-xs">Dominio.com Gratis por 1 año</p>

            </div>

           {/* Hosting */}
           <div className="flex items-center">

              <Image
                src="https://img.icons8.com/color/48/000000/server.png" 
                alt="Server" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80} 
                />
              <p className="text-gray-300 lg:text-base text-xs">Hosting (3GB SSD) Gratis por 1 año</p>

            </div>

          {/* Correos Corporativos Ilimitados*/}
           <div className="flex items-center">

              <Image
                src="https://img.icons8.com/color/48/000000/email.png" 
                alt="Server" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80} 
                />
              <p className="text-gray-300 lg:text-base text-xs">Correos Corporativos Ilimitados</p>

            </div>

           {/* Soporte */}
           <div className="flex items-center">

              <Image
                src="https://img.icons8.com/fluent/48/000000/high-importance.png" 
                alt="Support" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80} 
                />
              <p className="text-gray-300 lg:text-base text-xs">Soporte técnico por 1 mes</p>

            </div>
          </div>

          </div>

          <Link href={'/membershipbasic'}>
          <div className="bg-transparent border border-[#C6FF00] text-[#C6FF00] py-2 px-4 rounded-full hover:bg-[#C6FF00] hover:text-black transition-all text-center">
            Conocer Más
          </div>
          </Link>

        </div>

        {/* Plan Premium */}
        <div className="bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div>
            <h2 className="text-[#D43EFF] text-2xl font-bold mb-4">Sitio Premium</h2>
            <p className="text-gray-400 mb-6 lg:text-base text-sm">
              Perfecto para profesionales y empresas que necesitan sitios avanzados.
            </p>
            <div className="lg:text-6xl text-4xl font-bold text-white mb-4">$257.390</div>
            
            {/* Container Beneficios Premium */}
            <div className="text-left mb-6 space-y-1 md:space-y-3 xl:space-y-4">

          {/* Tipo de Sitio */}   
            <div className="flex items-center">

              <Image
                src="https://img.icons8.com/fluent/48/000000/monitor.png" 
                alt="E-commerce / E-learning" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">E-commerce / E-learning</p>

            </div>

            {/* Administrador */}
            <div className="flex items-center">

              <Image
                src="https://img.icons8.com/fluent/48/000000/administrative-tools.png" 
                alt="Admin Site" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">Sitio Administrable</p>

            </div>

             {/* Dominio */}
             <div className="flex items-center">
              <Image
                src="https://img.icons8.com/color/48/000000/domain.png" 
                alt="Domain" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80} 
                />
              <p className="text-gray-300 lg:text-base text-xs">Dominio.com Gratis por 1 año</p>

            </div>

           {/* Hosting */}
           <div className="flex items-center">

              <Image
                src="https://img.icons8.com/color/48/000000/server.png" 
                alt="Server" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80} 
                />
              <p className="text-gray-300 lg:text-base text-xs">Hosting (10GB SSD) Gratis por 1 año</p>

            </div>

          {/* Correos Corporativos Ilimitados*/}
            <div className="flex items-center">
            <Image
                src="https://img.icons8.com/color/48/000000/email.png" 
                alt="Server" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80} 
                />
               <p className="text-gray-300 lg:text-base text-xs">Correos Corporativos Ilimitados</p>
            </div>

           {/* Tienda y Carrito de Compras */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/color/48/000000/shopping-cart-loaded.png" 
                alt="Online Shop" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">Tienda y Carrito de Compras</p>
            </div>

{/* Academia Online */}
<div className="flex items-center">
  <Image 
                  src="/images/Hero/educacion.png"
                  className="w-8 h-8 mr-3"
                  height={80}
                  width={80} 
                  alt={'academia'}  />
  <p className="text-gray-300 lg:text-base text-xs">Academia Online</p>
</div>


           {/* Soporte*/}
            <div className="flex items-center">
              <Image
                src="https://img.icons8.com/fluent/48/000000/customer-support.png" 
                alt="Soporte Especializado" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">Soporte Especializado por 1 mes</p>
            </div>
          </div>
          </div>

         {/* Botón */}   
          <Link href={'/membershippremium'}>
          <div className="bg-[#D43EFF] text-white py-2 px-4 rounded-full hover:opacity-90 transition-all text-center">
             Conocer Más
          </div>
          </Link>

        </div>

        {/* Contenedor Principal Plan Enterprise */}
        <div className="bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#00D4FF] hover:shadow-2xl">
          <div>
            <h2 className="text-[#00D4FF] text-2xl font-bold mb-4">Enterprise App</h2>
            <p className="text-gray-400 mb-6 md:text-base text-sm">
            Perfecto para toda empresa que necesite una aplicación móvil personalizada.
            </p>
            <div className="lg:text-6xl text-4xl font-bold text-white mb-4">$769.990</div>

          {/* Contenedor Hijo Beneficios Enteprise */}
          <div className="text-left space-y-1 md:space-y-3 xl:space-y-4 mb-6">

           {/* Tipo de Servicio */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/android-os.png" 
                alt="App iOS/Android" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">App Personalizada Android</p>

            </div>

            {/* Despliegue */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/ios-filled/50/00BFFF/cloud.png" 
                alt="Despliegue Completo" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">Despliegue Completo</p>
            </div>

            {/* Descargable desde Google Play */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/color/48/000000/google-play.png" 
                alt="Google Play" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">Descargable desde Google Play</p>
            </div>

            {/* Soporte */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/customer-support.png" 
                alt="Soporte Especializado" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80} 
                />
              <p className="text-gray-300 lg:text-base text-xs">Soporte Especializado</p>
            </div>
          </div>
          </div>

          <Link href={'/membershipenterprise'}>
          <div className="bg-transparent border border-[#00D4FF] text-[#00D4FF] py-2 px-4 rounded-full hover:bg-[#00D4FF] hover:text-black transition-all text-center">
             Conocer Más
          </div>
          </Link>

        </div>

        {/* Plan ChatBot AI Pro */}
        <div className="bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#FF6F00] hover:shadow-2xl">
          <div>
            <h2 className="text-[#FF6F00] text-2xl font-bold mb-4">ChatBot AI Pro</h2>
            <p className="text-gray-400 mb-6 md:text-base text-sm">
              Automatiza la atención de tu negocio 27/7 con un ChatBot AI inteligente completamente personalizado para Web o WhatsApp.
            </p>
            <div className="lg:text-6xl text-4xl font-bold text-white mb-4">$375.990</div>

            {/* Contenedor Beneficios ChatBot AI Pro */}
            <div className="text-left space-y-1 md:space-y-3 xl:space-y-4 mb-6">
              {/* Plataforma */}
              <div className="flex items-center">
                <Image 
                  src="https://img.icons8.com/fluency/48/000000/chatbot.png" 
                  alt="ChatBot AI" 
                  className="w-8 h-8 mr-3" 
                  height={80} width={80}
                />
                <p className="text-gray-300 lg:text-base text-xs">ChatBot AI para Web o WhatsApp</p>
              </div>

              {/* Integraciones */}
              <div className="flex items-center">
                <Image 
                  src="https://img.icons8.com/color/48/000000/google-calendar--v1.png" 
                  alt="Integraciones" 
                  className="w-8 h-8 mr-3" 
                  height={80} width={80}
                />
                <p className="text-gray-300 lg:text-base text-xs">Integración con Google Calendar y Gmail</p>
              </div>

              {/* Flujos */}
              <div className="flex items-center">
                <Image 
                  src="https://img.icons8.com/color/48/000000/flow-chart.png" 
                  alt="Flujos" 
                  className="w-8 h-8 mr-3" 
                  height={80} width={80}
                />
                <p className="text-gray-300 lg:text-base text-xs">Flujos conversacionales (hasta 10 escenarios)</p>
              </div>

              {/* Reportes */}
              <div className="flex items-center">
                <Image 
                  src="https://img.icons8.com/color/48/000000/bar-chart.png" 
                  alt="Reportes" 
                  className="w-8 h-8 mr-3" 
                  height={80} width={80}
                />
                <p className="text-gray-300 lg:text-base text-xs">Reportes básicos de interacciones</p>
              </div>

              {/* Limitaciones */}
              <div className="flex items-center">
                <Image 
                  src="https://img.icons8.com/color/48/000000/stopwatch.png" 
                  alt="Límite" 
                  className="w-8 h-8 mr-3" 
                  height={80} width={80}
                />
                <p className="text-gray-300 lg:text-base text-xs">Hasta 1.000 mensajes/mes (Make/Botpress)</p>
              </div>
            </div>
          </div>

          <Link href={'/landingchatbot'}>
            <div className="bg-transparent border border-[#FF6F00] text-[#FF6F00] py-2 px-4 rounded-full hover:bg-[#FF6F00] hover:text-black transition-all text-center">
              Conocer Más
            </div>
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default Membership;
