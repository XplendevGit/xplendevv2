"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const MobileAppPage = (props: Props) => {
  return (
    <div className="min-h-screen h-auto w-full pt-[80px] md:pt-0 bg-gradient-to-t from-[#29F2CD] via-[#243B55] to-[#141E30] transition-all ease-in-out duration-200 py-12 px-6 flex flex-col items-center justify-center">
      {/* Contenedor principal */}
      <div className="max-w-[1240px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        {/* Columna izquierda: Texto descriptivo */}
        <div className="space-y-6">
          <h1 className="text-[#ffffff] text-4xl md:text-5xl font-bold">
          Una Solución Móvil que <span className="text-[#29F2CD]">Revoluciona tu Negocio</span>
          </h1>
          <p className="text-gray-300 text-lg">
          Diseñamos aplicaciones móviles personalizadas para impulsar tu productividad, eficiencia y conectividad empresarial.
          </p>

          {/* Botones */}
          <div className="flex space-x-4 items-center justify-center md:items-start md:justify-start">
            <Link href={"/membershipenterprise"}>
            <h1 
            className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-all duration-200 text-lg md:text-xl">
              Obtén tu Aplicación
            </h1>
            </Link>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold">+10</h2>
              <p className="text-gray-400">Clientes</p>
            </div>
            <div className="text-white">
              <h2 className="text-3xl font-bold">+1,000</h2>
              <p className="text-gray-400">Descargas</p>
            </div>
            <div className="text-white">
              <h2 className="text-3xl font-bold">+508</h2>
              <p className="text-gray-400">Likes</p>
            </div>
            <div className="text-white">
              <h2 className="text-3xl font-bold">809</h2>
              <p className="text-gray-400">Calificaciones</p>
            </div>
          </div>
        </div>

        {/* Columna derecha: Imagen del teléfono */}
        <div className="flex justify-center items-center">
          <Image
            src="https://i.postimg.cc/1XWvZMPK/image-mobile3.png" // Cambia esta URL a la imagen que prefieras
            alt="App Mockup"
            width={350}
            height={700}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppPage;
