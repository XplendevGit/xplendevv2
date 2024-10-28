"use client";
import React from 'react';
import Image from 'next/image';

const Servicios = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141E30] via-[#243B55] to-[#112240] flex flex-col items-center py-16 px-6 pt-32">
      {/* Header Section */}
      <section className="text-center text-white mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-400 text-lg md:text-xl">Conoce lo que hacemos para ayudarte a crecer.</p>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl mb-16">
        {/* Service Cards */}
        <div className="bg-[#1B1E32] border-[#1B1E32] border-2 hover:border-[#C6FF00] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in duration-150 text-center">
          <Image
            src="https://i.postimg.cc/gjTFVWZd/conocimiento-de-la-marca.png"
            alt="Brand Identity"
            width={450}
            height={450}
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-2xl text-[#C6FF00] font-semibold">Identidad de Marca</h3>
          <p className="text-gray-400 mt-4">Te ayudamos a establecer una marca fuerte y memorable.</p>
        </div>
        
        <div className="bg-[#1B1E32] border-[#1B1E32] border-2 hover:border-[#00D4FF] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all text-center">
          <Image
            src="https://i.postimg.cc/9QdDm891/desarrollo-web.png"
            alt="Website Design"
            width={450}
            height={450}
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-2xl text-[#00D4FF] font-semibold">Diseño de Sitios Web</h3>
          <p className="text-gray-400 mt-4">Diseñamos sitios web modernos y funcionales para tu negocio.</p>
        </div>
        
        <div className="bg-[#1B1E32] border-[#1B1E32] border-2 hover:border-[#D43EFF] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all text-center">
          <Image
            src="https://i.postimg.cc/Wz9YBwN7/app.png" // Icono para Desarrollo de Software
            alt="Desarrollo de Software"
            width={450}
            height={450}
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-2xl text-[#D43EFF] font-semibold">Desarrollo de Software</h3>
          <p className="text-gray-400 mt-4">Desarrollamos soluciones de software a medida para tu negocio.</p>
        </div>

        
        <div className="bg-[#1B1E32] border-[#1B1E32] border-2 hover:border-[#C6FF00] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all text-center">
          <Image
            src="https://i.postimg.cc/K8ppqNqc/aplicacion-movil.png" // Icono para Desarrollo de Aplicaciones Móviles
            alt="Desarrollo de Aplicaciones Móviles"
            width={450}
            height={450}
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-2xl text-[#C6FF00] font-semibold">Desarrollo de Aplicaciones Móviles</h3>
          <p className="text-gray-400 mt-4">Creamos aplicaciones móviles personalizadas para iOS y Android.</p>
        </div>

      </section>

      {/* About Us Section */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center bg-[#1B1E32] border-[#1B1E32] border-2 hover:border-[#D43EFF] transition-all ease-in duration-150 rounded-lg p-8 md:p-16 shadow-lg space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <Image
            src="https://i.postimg.cc/NfXNtz85/bg-4-2.png" // Icon or illustrative image
            alt="About Us"
            width={900}
            height={900}
            className="mx-auto md:mx-0 w-auto h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left text-white">
          <h2 className="text-4xl font-bold mb-4 text-[#C6FF00]">Creatividad <span className="text-white">para Llevarte al Éxito</span> </h2>
          <p className="text-gray-400 mb-6">Nos enfocamos en soluciones creativas que destacan tu negocio en el mercado digital.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Image
                src="https://img.icons8.com/fluent/48/000000/code.png" // Icon for Clean Code
                alt="Clean Code"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-xl font-semibold text-[#D43EFF]">Código Limpio</h3>
                <p className="text-gray-400">Nuestro código es estructurado y fácil de mantener.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="https://img.icons8.com/fluent/48/000000/design.png" // Icon for Modern Design
                alt="Modern Design"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-xl font-semibold text-[#00D4FF]">Diseño Moderno</h3>
                <p className="text-gray-400">Diseños atractivos y actuales que conectan con tu audiencia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
