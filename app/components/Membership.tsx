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
    <div className="min-h-screen h-auto w-full bg-gradient-to-b from-[#243B55] to-[#141E30] transition-all ease-in duration-200 py-12 px-6 pt-[80px] md:pt-0 items-center justify-center flex flex-col">
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
        <div className="bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div>
            <h2 className="text-[#C6FF00] text-2xl font-bold mb-4">Básico</h2>
            <p className="text-gray-400 mb-6">
              Para uso personal y integración de nuevos sitios completos desde cero.
            </p>
            <div className="md:text-6xl text-4xl font-bold text-white mb-4">$179.990</div>

          {/* Benefits */}
          <div className="text-left space-y-4 mb-6">
            <div className="flex items-center">

              <Image 
                src="https://img.icons8.com/fluent/48/000000/monitor.png" 
                alt="Landing Page" 
                className="w-8 h-8 mr-3" 
                height={8}
                width={8}
              />
              <p className="text-gray-300">Landing Page / Portafolio Web</p>

            </div>
            <div className="flex items-center">

              <Image
                src="https://img.icons8.com/fluent/48/000000/administrative-tools.png" 
                alt="Admin Site" 
                className="w-8 h-8 mr-3" 
                height={8}
                width={8}
                />
              <p className="text-gray-300">Sitio Administrable</p>
            </div>

            <div className="flex items-center">

              <Image
                src="https://img.icons8.com/fluent/48/000000/high-importance.png" 
                alt="Support" 
                className="w-8 h-8 mr-3"
                height={8}
                width={8} 
                />
              <p className="text-gray-300">Soporte técnico por 1 mes</p>

            </div>
          </div>

          </div>

          <Link href={'/membershipbasic'}>
          <div className="bg-transparent border border-[#C6FF00] text-[#C6FF00] py-2 px-4 rounded-full hover:bg-[#C6FF00] hover:text-black transition-all text-center">
            Comenzar
          </div>
          </Link>

        </div>

        {/* Plan Premium */}
        <div className="bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div>
            <h2 className="text-[#D43EFF] text-2xl font-bold mb-4">Premium</h2>
            <p className="text-gray-400 mb-6">
              Perfecto para profesionales y empresas que necesitan sitios avanzados.
            </p>
            <div className="md:text-6xl text-4xl font-bold text-white mb-4">$275.990</div>
            
            {/* Beneficios Premium */}
            <div className="text-left space-y-4 mb-6">
            <div className="flex items-center">

              <Image
                src="https://img.icons8.com/fluent/48/000000/monitor.png" 
                alt="E-commerce / E-learning" 
                className="w-8 h-8 mr-3" 
                height={8}
                width={8}
                />
              <p className="text-gray-300">E-commerce / E-learning</p>

            </div>
            <div className="flex items-center">

              <Image
                src="https://img.icons8.com/fluent/48/000000/administrative-tools.png" 
                alt="Admin Site" 
                className="w-8 h-8 mr-3" 
                height={8}
                width={8}
                />
              <p className="text-gray-300">Sitio Administrable</p>

            </div>
            <div className="flex items-center">

              <Image
                src="https://img.icons8.com/fluent/48/000000/customer-support.png" 
                alt="Soporte Especializado" 
                className="w-8 h-8 mr-3"
                height={8}
                width={8}
                />
              <p className="text-gray-300">Soporte Especializado</p>

            </div>
          </div>
          </div>

          <Link href={'/membershippremium'}>
          <div className="bg-[#D43EFF] text-white py-2 px-4 rounded-full hover:opacity-90 transition-all text-center">
            Comenzar
          </div>
          </Link>

        </div>

        {/* Plan Enterprise */}
        <div className="bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div>
            <h2 className="text-[#00D4FF] text-2xl font-bold mb-4">Enterprise App</h2>
            <p className="text-gray-400 mb-6">
            Perfecto para toda empresa que necesite una aplicación móvil personalizada.
            </p>
            <div className="md:text-6xl text-4xl font-bold text-white mb-4">$375.990</div>

          {/* Beneficios Enteprise */}
          <div className="text-left space-y-4 mb-6">
            <div className="flex items-center">

              <Image 
                src="https://img.icons8.com/fluent/48/000000/android-os.png" 
                alt="App iOS/Android" 
                className="w-8 h-8 mr-3" 
                height={8}
                width={8}
                />
              <p className="text-gray-300">App iOS / Android</p>

            </div>
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/ios-filled/50/00BFFF/cloud.png" 
                alt="Despliegue Completo" 
                className="w-8 h-8 mr-3" 
                height={8}
                width={8}
                />
              <p className="text-gray-300">Despliegue Completo</p>
            </div>
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/customer-support.png" 
                alt="Soporte Especializado" 
                className="w-8 h-8 mr-3"
                height={8}
                width={8} 
                />
              <p className="text-gray-300">Soporte Especializado</p>
            </div>
          </div>
          </div>

          <Link href={'/membershipenterprise'}>
          <div className="bg-transparent border border-[#00D4FF] text-[#00D4FF] py-2 px-4 rounded-full hover:bg-[#00D4FF] hover:text-black transition-all text-center">
            Comenzar
          </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Membership;
