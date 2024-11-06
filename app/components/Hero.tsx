"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const CategoryMenu = (props: Props) => {
  return (
    <div className="min-h-screen h-auto w-full pt-[80px] md:pt-0 bg-gradient-to-b from-[#243B55] to-[#141E30] transition-all ease-in duration-200 py-12 px-6 items-center justify-center flex flex-col">
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
            <div className="md:text-3xl text-lg font-bold text-[#C6FF00]">OFERTA $130.990</div>
            <h2 className="text-white md:text-2xl font-bold mt-4">Landing Page Profesional Wordpress</h2>
          </div>

          <Image
            src="https://i.postimg.cc/HLkNzSyC/wordpress.webp" 
            alt="Sitio Web Wordpress"
            className="md:w-48 md:h-48 w-32 h-32 object-contain"
            height={850}
            width={850}
          />
        </div>
        </Link>

        {/* Tarjeta 2: Sitios Web Landing Pages Personalizados Wordpress */}
        <Link href={"https://www.webpay.cl/form-pay/210817"}>
        <div className="relative bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex items-center justify-between cursor-pointer transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div className="mr-4">
            <div className="text-sm text-gray-400 mb-2">Administrable - Desde</div>
            <div className="md:text-3xl text-lg font-bold text-[#C6FF00]">OFERTA $245.990</div>
            <h2 className="text-white md:text-2xl font-bold mt-4">E-Commerce Profesional Wordrpess</h2>
          </div>

          <Image
            src="https://i.postimg.cc/R08zHrbY/ecommerce.png" 
            alt="Landing Pages"
            className="md:w-48 md:h-48 w-32 h-32 object-contain"
            height={850}
            width={850}
          />
        </div>
        </Link>

        {/* Tarjeta 3: Sitios Web Landing Pages Personalizados */}
        <Link href={"https://www.webpay.cl/form-pay/223026"}>
        <div className="relative bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex items-center justify-between cursor-pointer transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div className="mr-4">
            <div className="text-sm text-gray-400 mb-2">Personalizado - Desde</div>
            <div className="md:text-3xl text-lg font-bold text-[#C6FF00]"> $179.990</div>
            <h2 className="text-white md:text-2xl font-bold mt-4">Sitio Web Profesional Personalizado</h2>
          </div>

          <Image
            src="https://i.postimg.cc/Yq2C67Cn/nextjs-image.png" 
            alt="Sitio Web Personalizado"
            className="md:w-48 md:h-48 w-32 h-32 object-contain"
            height={850}
            width={850}
          />
        </div>
        </Link>

        {/* Tarjeta 4: Conoce nuestros sitios web */}
        <Link href={'/portfolio'}>
        <div className="relative bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex items-center justify-between cursor-pointer transition-all duration-400 hover:scale-105 border border-[#353B50] hover:border-[#D43EFF] hover:shadow-2xl">
          <div className="mr-4">
            <div className="text-sm text-gray-400 mb-2">Explora</div>
            <h2 className="text-white md:text-2xl font-bold mt-4">Conoce nuestros Sitios Web</h2>
          </div>

          <Image
            src="https://i.postimg.cc/Vv21QxXM/nuestrositios.png" 
            alt="Conoce nuestros Sitios Web"
            className="md:w-48 md:h-48 w-32 h-32 object-contain"
            height={850}
            width={850}
          />
        </div>

        </Link>
      </div>
    </div>
  );
};

export default CategoryMenu;
