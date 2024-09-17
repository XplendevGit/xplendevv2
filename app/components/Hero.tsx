"use client";
import Link from "next/link";
import React from "react";

type Props = {};

const CategoryMenu = (props: Props) => {
  return (
    <div className="min-h-screen h-auto w-full bg-gradient-to-b from-[#243B55] to-[#141E30] transition-all ease-in duration-200 py-12 px-6 items-center justify-center flex flex-col">
      {/* Título del Menú centrado */}
      <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          Implementamos tu <span className="text-[#D43EFF]">Sitio Web</span>
        </h1>
        <h2 className="text-gray-400 text-xl text-center">Conoce y aprovecha nuestras ofertas!</h2>
      </div>

      {/* Contenedor de categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
        {/* Tarjeta 1: Sitio Web Profesional Personalizado Wordpress */}
        <Link href={"https://www.webpay.cl/form-pay/210814"}>
        <div className="relative bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex items-center justify-between cursor-pointer transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div className="mr-4">
            <div className="text-sm text-gray-400 mb-2">Administrable - Desde</div>
            <div className="text-3xl font-bold text-[#C6FF00]">OFERTA $130.990</div>
            <h2 className="text-white text-2xl font-bold mt-4">Landing Page Profesional Wordpress</h2>
          </div>
          <img
            src="https://i.postimg.cc/YSw0YtfF/image-hero1.webp" 
            alt="Sitio Web Wordpress"
            className="w-48 h-48 object-contain"
          />
        </div>
        </Link>

        {/* Tarjeta 2: Sitios Web Landing Pages Personalizados */}
        <Link href={"https://www.webpay.cl/form-pay/210817"}>
        <div className="relative bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex items-center justify-between cursor-pointer transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div className="mr-4">
            <div className="text-sm text-gray-400 mb-2">Administrable - Desde</div>
            <div className="text-3xl font-bold text-[#C6FF00]">OFERTA $245.990</div>
            <h2 className="text-white text-2xl font-bold mt-4">E-Commerce Profesional Wordrpess</h2>
          </div>
          <img
            src="https://i.postimg.cc/90bVG32Y/image-hero-2.webp" 
            alt="Landing Pages"
            className="w-48 h-48 object-contain"
          />
        </div>
        </Link>

        {/* Tarjeta 4: Conoce nuestros sitios web */}
        <Link href={'/obras'}>
        <div className="relative bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex items-center justify-between cursor-pointer transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div className="mr-4">
            <div className="text-sm text-gray-400 mb-2">Explora</div>
            <h2 className="text-white text-2xl font-bold mt-4">Conoce nuestros Sitios Web</h2>
          </div>
          <img
            src="https://i.postimg.cc/L6FZDjpq/image-hero-3.webp" 
            alt="Conoce nuestros Sitios Web"
            className="w-48 h-48 object-contain"
          />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryMenu;
