// pages/MembershipPremium.js
import Image from "next/image";
import React from "react";

const Membershippremium = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] flex flex-col items-center py-12 px-6">

      {/* Header Section */}
      <header className="text-center mb-12 mt-12">
        <h1 className="text-5xl text-[#FF00FF] font-bold mb-4">Membresía Premium</h1>
        <p className="text-lg text-gray-400">Perfecto para profesionales y empresas que necesitan sitios avanzados.</p>
      </header>

      {/* Plan Description Section */}
      <section className="grid grid-cols-1 gap-8 w-full max-w-xl">

        {/* Plan Details */}
        <div className="bg-[#112240] border-[#B6E4FF] rounded-lg p-8 text-center shadow-lg mx-auto flex flex-col hover:border-[#FF00FF] transition-all duration-150 ease-in border">
          <h2 className="text-3xl text-[#FF00FF] font-bold mb-4">Plan Premium</h2>
          <p className="text-lg text-gray-400 mb-6">Ideal para aquellos que buscan soluciones avanzadas como E-commerce o E-learning.</p>

          {/* Pricing */}
          <div className="text-[#FF00FF] text-5xl font-bold mb-4">$275.990</div>
          <p className="text-gray-400 mb-6">Pago Único</p>

          {/* Benefits */}
          <div className="text-left space-y-4 mb-6">
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/monitor.png" 
                alt="E-commerce / E-learning" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300">E-commerce / E-learning</p>
            </div>
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/administrative-tools.png" 
                alt="Admin Site" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300">Sitio Administrable</p>
            </div>
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/customer-support.png" 
                alt="Soporte Especializado" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300">Soporte Especializado</p>
            </div>
          </div>

          {/* Payment Button */}
          <a
            href="https://www.webpay.cl/form-pay/210817"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#FF00FF] border-[#FF00FF] border-2 font-semibold py-2 px-8 rounded-full hover:bg-[#FF00FF] hover:text-[#000000]"
          >
            Contratar Ahora
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 w-full max-w-6xl text-center">
        <h2 className="text-4xl text-[#FF00FF] font-bold mb-6">¿Qué incluye la Membresía Premium?</h2>
        <p className="text-lg text-gray-400 mb-12">Con nuestro plan premium, obtienes soluciones avanzadas para sitios más complejos como tiendas en línea o plataformas de aprendizaje. <br />
        <span className="text-xl">Una vez completado el pago de tu membresía, nos pondremos en contacto contigo para orientarte en los siguientes pasos del proceso. <br /></span>
           <span className="text-2xl">Estamos Ansiosos de poder comenzar!</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#FF00FF] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/color/64/000000/shopping-cart.png" // Icono para E-commerce
              alt="E-commerce"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#FF00FF] font-semibold">Tienda en Línea</h3>
            <p className="text-gray-400 mt-4">Implementación completa de tu tienda online con todas las funciones necesarias.</p>
          </div>


          {/* Feature 2 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#FF00FF] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/color/64/000000/student-male.png" // Icono para E-learning
              alt="E-learning"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#FF00FF] font-semibold">Plataforma de E-learning</h3>
            <p className="text-gray-400 mt-4">Crea tu propio espacio de enseñanza en línea para cursos y formación.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#FF00FF] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/color/64/000000/customer-support.png" // Icono para soporte especializado
              alt="Soporte Especializado"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#FF00FF] font-semibold">Soporte Especializado</h3>
            <p className="text-gray-400 mt-4">Obtén soporte técnico especializado para garantizar el correcto funcionamiento de tu sitio.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Membershippremium;
