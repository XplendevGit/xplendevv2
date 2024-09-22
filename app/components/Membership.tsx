"use client"
import Link from 'next/link';
import React from 'react'
import { HiOutlineCheck } from "react-icons/hi";

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

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
              Para uso personal y integración de nuevos sitios.
            </p>
            <div className="md:text-6xl text-4xl font-bold text-white mb-4">$179.990</div>
            <p className="text-gray-400 mb-4">Landing Page / Portafolio Web</p>
            <p className="text-gray-400 mb-4">Sitio Administrable</p>
            <p className="text-gray-400 mb-4"></p>
          </div>
          <button className="bg-transparent border border-[#C6FF00] text-[#C6FF00] py-2 px-4 rounded-full hover:bg-[#C6FF00] hover:text-black transition-all">
            Comenzar
          </button>
        </div>

        {/* Plan Premium */}
        <div className="bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div>
            <h2 className="text-[#D43EFF] text-2xl font-bold mb-4">Premium</h2>
            <p className="text-gray-400 mb-6">
              Perfecto para profesionales y empresas que necesitan sitios avanzados.
            </p>
            <div className="md:text-6xl text-4xl font-bold text-white mb-4">$275.990</div>
            <p className="text-gray-400 mb-4">E-commerce / E-learning</p>
            <p className="text-gray-400 mb-4">Sitio Administrable</p>
            <p className="text-gray-400 mb-4">Soporte Especializado</p>
          </div>
          <button className="bg-[#D43EFF] text-white py-2 px-4 rounded-full hover:opacity-90 transition-all">
            Comenzar
          </button>
        </div>

        {/* Plan Enterprise */}
        <div className="bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div>
            <h2 className="text-[#00D4FF] text-2xl font-bold mb-4">Enterprise</h2>
            <p className="text-gray-400 mb-6">
            Perfecto para toda empresa que necesite una aplicación móvil personalizada.
            </p>
            <div className="md:text-6xl text-4xl font-bold text-white mb-4">$375.990</div>
            <p className="text-gray-400 mb-4">App IOS/Android</p>
            <p className="text-gray-400 mb-4">Despliegue Completo</p>
            <p className="text-gray-400 mb-4">Soporte Especializado</p>
          </div>
          <button className="bg-transparent border border-[#00D4FF] text-[#00D4FF] py-2 px-4 rounded-full hover:bg-[#00D4FF] hover:text-black transition-all">
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
