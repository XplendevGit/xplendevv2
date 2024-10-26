"use client";
import Link from "next/link";
import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className="min-h-screen h-auto w-full bg-gradient-to-b from-[#141E30] to-[#243B55] transition-all ease-in duration-200 py-12 pt-24 px-6 flex flex-col items-center space-y-8">
      {/* Contenedor principal dividido en 3 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-[1400px]">
        {/* Columna Izquierda */}
        <div className="col-span-1 space-y-6">
          {/* Sección "Nuevo Trailer" */}
          <div className="bg-[#1B1E32] rounded-2xl shadow-lg p-4">
            <h2 className="text-white text-xl font-bold mb-4">Nuestros Sitios Web</h2>
            <div className="space-y-4">

            <Link href={"https://horizon-property-webpage.vercel.app/"}>
              <div 
              className="bg-[#243B55] rounded-lg p-3 hover:bg-[#353B50] cursor-pointer transition-all duration-200"
              >
                <img
                  src="https://i.postimg.cc/wvTt4NVJ/property-demo1.webp" // Imagen de referencia
                  alt="Trailer 1"
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <h3 className="text-gray-300 text-sm">Sitio Web: Horizon Property</h3>
              </div>
              </Link>

              <Link href={"https://elegant-cannine.vercel.app/"}>
              <div 
              className="bg-[#243B55] rounded-lg p-3 mt-4 hover:bg-[#353B50] cursor-pointer transition-all duration-200">
                <img
                  src="https://i.postimg.cc/fyV1KHSP/elegant-demo2.webp" // Imagen de referencia
                  alt="Trailer 2"
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <h3 className="text-gray-300 text-sm">Sitio Web: Elegant Cannine</h3>
              </div>
              </Link>

              <Link href={"https://portafolioluisrivera.vercel.app/"}>
              <div className="bg-[#243B55] rounded-lg p-3 mt-4 hover:bg-[#353B50] cursor-pointer transition-all duration-200">
                <img
                  src="https://i.postimg.cc/KjbmshFW/portfolio-demo1.webp" // Imagen de referencia
                  alt="Trailer 3"
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <h3 className="text-gray-300 text-sm">Sitio Web: Portafolio</h3>
              </div>
              </Link>

            </div>
          </div>

          {/* Sección "Continuar viendo" */}
          <div className="bg-[#1B1E32] rounded-2xl shadow-lg p-4">
            <h2 className="text-white text-xl font-bold mb-4">Proximos Lanzamientos</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.postimg.cc/rsTQdQCW/manuelmolina-demo1.webp" // Imagen de referencia
                  alt="Continuar viendo 1"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <h3 className="text-gray-300 text-sm">Sitio Web: Manuel Molina Galería</h3>
                  <progress value="70" max="100" className="w-full mt-1 text-[#D43EFF]">70%</progress>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.postimg.cc/G2dXtXjD/visionpyme-demo1.webp" // Imagen de referencia
                  alt="Continuar viendo 2"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <h3 className="text-gray-300 text-sm">Aplicación Móbil: VisionPyme</h3>
                  <progress value="40" max="100" className="w-full mt-1 text-[#D43EFF]">40%</progress>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Central (Contenido Principal) */}
        <div className="col-span-2 bg-[#1B1E32] rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center my-auto md:h-[60%]">
          <img
            src="https://i.postimg.cc/J0pS3fhZ/android-demo1.webp" // Imagen de referencia
            alt="Contenido Principal"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h2 className="text-white text-3xl font-bold mb-2">Android App: NutriSnap</h2>
          <p className="text-gray-400 mb-4">
            Descarga y conoce nuestra aplicación mobil NutriSnap con AI integrada.
          </p>

          
          <div className="flex space-x-4">
            <Link href={"/landingapp"}>
            <div className="bg-[#D43EFF] text-white py-2 px-4 rounded-full hover:bg-[#B732CC] transition-all duration-200">
              Ir al Sitio
            </div>
            </Link>

            <Link href={"/landingapp"}>
            <div className="bg-[#29F2CD] text-white py-2 px-4 rounded-full hover:bg-[#24cbb5] transition-all duration-200">
              Descargar
            </div>
            </Link>

          </div>
        </div>

        {/* Columna Derecha (Recomendaciones) */}
        <div className="col-span-1 bg-[#1B1E32] rounded-2xl shadow-lg p-4">
          <h2 className="text-white text-xl font-bold mb-4">Te podría interesar</h2>
          <div className="space-y-4">

          <Link href={"https://sitewizardcontentstudio.vercel.app/"}>
            <div className="flex items-center space-x-4 hover:bg-[#243B55] p-2 rounded-lg transition-all duration-200">
              <img
                src="https://i.postimg.cc/8C2xkdFQ/sitewizars-demo2.jpg" // Imagen de referencia
                alt="Recomendación 1"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex flex-col">
                <h3 className="text-gray-300 text-sm">SiteWizard CMS</h3>
                <p className="text-gray-400 text-xs">CMS de Administración</p>
              </div>
            </div>
            </Link>

            <Link href={"https://www.instagram.com/teckware.ls/"}>
            <div className="flex items-center space-x-4 hover:bg-[#243B55] p-2 rounded-lg transition-all duration-200">
              <img
                src="https://i.postimg.cc/4dcwWrNj/teckware-demo1.jpg" // Imagen de referencia
                alt="Recomendación 2"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex flex-col">
                <h3 className="text-gray-300 text-sm">TeckWare.ls</h3>
                <p className="text-gray-400 text-xs">Servicios Gaming</p>
              </div>
            </div>
            </Link>

            <Link href={"https://www.instagram.com/prodmvxii/"}>
            <div className="flex items-center space-x-4 hover:bg-[#243B55] p-2 rounded-lg transition-all duration-200">
              <img
                src="https://i.postimg.cc/LXvhFsXP/prodmaxi-demo1.jpg" // Imagen de referencia
                alt="Recomendación 3"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex flex-col">
                <h3 className="text-gray-300 text-sm">ProdMvxii</h3>
                <p className="text-gray-400 text-xs">BeatMaker</p>
              </div>
            </div>
            </Link>

          </div>
        </div>
      </div>

      {/* Sección "You might like" en versión más detallada */}
      
      <div className="w-full max-w-[1400px] mt-8">
        <h2 className="text-white text-2xl font-bold mb-6">Te podría interesar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

         <Link href={"https://sitewizardcontentstudio.vercel.app/"}>
          <div className="bg-[#1B1E32] rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105">
            <img
              src="https://i.postimg.cc/ryJwDzqR/sitewizard-demo1.webp"
              alt="Recomendación Grande 1"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white text-xl font-bold mb-2">SiteWizard CMS</h3>
            <p className="text-gray-400">
              Conoce y sumergete en la comodidad de administración rápida y en tiempo real de tu sitio web con SiteWizard CMS Profesional.
            </p>
          </div>
          </Link>

          <Link href={"https://www.instagram.com/teckware.ls/"}>
          <div className="bg-[#1B1E32] rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105">
            <img
              src="https://i.postimg.cc/nLTtHS8s/teckware-demo2.webp"
              alt="Recomendación Grande 2"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white text-xl font-bold mb-2">Teckware</h3>
            <p className="text-gray-400">
              Servicio Técnico especializado en Gaming, donde encontrarás variedad de Hardware y soporte especializado.
            </p>
          </div>
          </Link>

          <Link href={"https://www.instagram.com/prodmvxii/"}>
          <div className="bg-[#1B1E32] rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105">
            <img
              src="https://i.postimg.cc/jdRQfMBq/prodmaxii-demo2.webp"
              alt="Recomendación Grande 3"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white text-xl font-bold mb-2">ProdMvxii</h3>
            <p className="text-gray-400">
              Sumergete con ProdMvxii en el mundo del BeatMaker, a través de su contenido musicál profesional.
            </p>
          </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
