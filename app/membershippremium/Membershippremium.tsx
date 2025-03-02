// pages/MembershipPremium.js
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Membershippremium = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] flex flex-col items-center py-12 px-6">

      {/* Header Section */}
      <header className="text-center mb-12 mt-12">
        <h1 className="text-5xl text-[#D43EFF] font-bold mb-4">Membresía Premium</h1>
        <p className="text-lg text-gray-400">Perfecto para profesionales y empresas que necesitan sitios avanzados.</p>
      </header>

      {/* Plan Description Section */}
      <section className="grid grid-cols-1 gap-8 w-full max-w-xl">

        {/* Plan Details */}
        <div className="bg-[#112240] border-[#B6E4FF] rounded-lg p-8 text-center shadow-lg mx-auto flex flex-col hover:border-[#D43EFF] transition-all duration-150 ease-in border">
          <h2 className="text-3xl text-[#D43EFF] font-bold mb-4">Plan Premium</h2>
          <p className="lg:text-lg text-base text-gray-400 mb-6">Ideal para aquellos que buscan soluciones avanzadas como E-commerce o E-learning.</p>

          {/* Pricing */}
          <div className="text-[#D43EFF] text-5xl font-bold mb-4">$257.990</div>
          <p className="text-gray-400 mb-6">Pago Único</p>

          {/* Container Beneficios Premium */}
            <div className="text-left mb-6 space-y-2 md:space-y-3 xl:space-y-4">

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

            {/* Pasarela de Pago */}
            <div className="flex items-center">
               <Image
                 src="https://cdn-icons-png.flaticon.com/512/1797/1797616.png" alt="Payment" // Ícono de Pasarela de Pago
                 className="w-8 h-8 mr-3"
                 height={80}
                 width={80}
               />
               <p className="text-gray-300 lg:text-base text-xs">
                 Pasarela de Pago (Debito, Crédito, MercadoPago)
               </p>
             </div>   

            {/* E-Learning */}
            <div className="flex items-center">
               <Image
                 src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png" alt="Payment" // Ícono de E-Learning
                 className="w-8 h-8 mr-3"
                 height={80}
                 width={80}
               />
               <p className="text-gray-300 lg:text-base text-xs">
                 Escuela Online (E-Learning)
               </p>
             </div> 

           {/* Soporte*/}
            <div className="flex items-center">
              <Image
                src="https://img.icons8.com/fluent/48/000000/customer-support.png" 
                alt="Especialiced Support" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">Soporte Especializado por 1 mes</p>
            </div>      
          </div>

          {/* Payment Button */}
          <a
            href="https://wa.link/fw42if"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#D43EFF] border-[#D43EFF] border-2 font-semibold py-2 px-8 rounded-full hover:bg-[#D43EFF] hover:text-white"
          >
            Contratar Ahora
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 w-full max-w-6xl text-center">
        <h2 className="text-4xl text-[#D43EFF] font-bold mb-6">¿Qué incluye la Membresía Premium?</h2>
        <p className="text-lg text-gray-400 mb-12">Con nuestro plan premium, obtienes soluciones avanzadas para sitios más complejos como tiendas en línea o plataformas de aprendizaje. <br />
        <span className="text-xl">Una vez completado el pago de tu membresía, nos pondremos en contacto contigo para orientarte en los siguientes pasos del proceso. <br /></span>
           <span className="text-2xl">Estamos Ansiosos de poder comenzar!</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#D43EFF] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/color/64/000000/shopping-cart.png" // Icono para E-commerce
              alt="E-commerce"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#D43EFF] font-semibold">Tienda en Línea</h3>
            <p className="text-gray-400 mt-4">Implementación completa de tu tienda online con todas las funciones necesarias.</p>
          </div>


          {/* Feature 2 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#D43EFF] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/color/64/000000/student-male.png" // Icono para E-learning
              alt="E-learning"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#D43EFF] font-semibold">Plataforma de <br className="" />E-learning</h3>
            <p className="text-gray-400 mt-4">Crea tu propio espacio de enseñanza en línea para cursos y formación.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#D43EFF] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/color/64/000000/customer-support.png" // Icono para soporte especializado
              alt="Soporte Especializado"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#D43EFF] font-semibold">Soporte Especializado</h3>
            <p className="text-gray-400 mt-4">Obtén soporte técnico especializado para garantizar el correcto funcionamiento de tu sitio.</p>
          </div>


          {/* Feature - Pasarelas de Pago Completas */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#D43EFF] transition-all duration-150 ease-in border">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1797/1797616.png" // Ícono de Pasarelas de Pago Completas
              alt="Pasarelas de Pago Completas"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#D43EFF] font-semibold">Pasarelas de Pago Completas</h3>
           <p className="text-gray-400 mt-4">
              Integramos pasarelas de pago en tu sitio web, facilitando transacciones en línea de manera eficiente y confiable para tus clientes.
            </p>
          </div>
        </div>

        <div className="flex gap-8 w-full max-w-xl justify-center items-center mx-auto mt-12">
              
                <a
                href="https://wa.link/fw42if" 
                className="bg-[#D43EFF] text-white py-2 px-4 rounded-full hover:opacity-90 transition-all text-center">
                      Quiero mi Sitio Web!
                </a>
        </div>
            
      </section>
    </div>
  );
};

export default Membershippremium;
