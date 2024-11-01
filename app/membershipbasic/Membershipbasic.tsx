// pages/MembershipLanding.js
import Image from "next/image";
import React from "react";

const Membershipbasic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] flex flex-col items-center py-12 px-6">

      {/* Header Section */}
      <header className="text-center mb-12 mt-12">
        <h1 className="text-5xl text-[#B6E4FF] font-bold mb-4">Membresía Básica</h1>
        <p className="text-lg text-gray-400">El plan ideal para uso personal y proyectos en crecimiento.</p>
      </header>

      {/* Plan Description Section */}
      <section className="grid grid-cols-1 gap-8 w-full max-w-xl">

        {/* Plan Details */}
        <div className="bg-[#112240] border-[#B6E4FF] rounded-lg p-8 text-center shadow-lg mx-auto flex flex-col hover:border-[#C6FF00] transition-all duration-150 ease-in border">
          <h2 className="text-3xl text-[#C6FF00] font-bold mb-4">Plan Básico</h2>
          <p className="text-lg text-gray-400 mb-6">La solución perfecta para aquellos que buscan presencia online con un sitio administrable y funcional.</p>

          {/* Pricing */}
          <div className="text-[#C6FF00] text-5xl font-bold mb-4">$179.990</div>
          <p className="text-gray-400 mb-6">Pago Único</p>

          {/* Benefits */}
          <div className="text-left space-y-4 mb-6">
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/monitor.png" 
                alt="Landing Page" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300">Landing Page / Portafolio Web</p>
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
                src="https://img.icons8.com/fluent/48/000000/high-importance.png" 
                alt="Support" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300">Soporte técnico</p>
            </div>
          </div>

          {/* Payment Button */}
          <a
            href="https://www.webpay.cl/form-pay/210814"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#C6FF00] border-[#C6FF00] border-2 font-semibold py-2 px-8 rounded-full hover:bg-[#C6FF00] hover:text-[#000000]"
          >
            Contratar Ahora
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 w-full max-w-6xl text-center ">
        <h2 className="text-4xl text-[#B6E4FF] font-bold mb-6">¿Qué incluye la Membresía Básica?</h2>
        <p className="text-lg text-gray-400 mb-12">Con nuestro plan básico, obtienes las herramientas necesarias para tener presencia online sin complicaciones. <br />
        <span className="text-xl">Una vez completado el pago de tu membresía, nos pondremos en contacto contigo para orientarte en los siguientes pasos del proceso. <br /></span>
           <span className="text-2xl">Estamos Ansiosos de poder comenzar!</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#C6FF00] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/color/64/000000/wordpress.png" // Icono nuevo para WordPress
              alt="WordPress"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#B6E4FF] font-semibold">Implementación con WordPress</h3>
            <p className="text-gray-400 mt-4">Tu sitio web será construido en WordPress, la plataforma de gestión de contenido más popular y flexible.</p>
          </div>


          {/* Feature 2 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#C6FF00] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/color/64/000000/control-panel.png" // Icono nuevo para Sitio Administrable
              alt="Sitio Administrable"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#B6E4FF] font-semibold">Sitio Web Administrable</h3>
            <p className="text-gray-400 mt-4">Tendrás un sitio web completamente administrable, donde podrás modificar y actualizar contenido de manera sencilla.</p>
          </div>



          {/* Feature 3 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#C6FF00] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/color/64/000000/online-support.png" // Icono nuevo para Soporte Online
              alt="Soporte Online"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#B6E4FF] font-semibold">Soporte Online por 1 Mes</h3>
            <p className="text-gray-400 mt-4">Disfruta de soporte técnico online durante el primer mes para resolver cualquier duda o inconveniente que surja.</p>
          </div>


        </div>
      </section>

    </div>
  );
};

export default Membershipbasic;
