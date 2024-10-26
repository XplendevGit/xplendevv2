// pages/MembershipEnterprise.js
import React from "react";

const MembershipEnterprise = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] flex flex-col items-center py-12 px-6">

      {/* Header Section */}
      <header className="text-center mb-12 mt-12">
        <h1 className="text-5xl text-[#00BFFF] font-bold mb-4">Enterprise App</h1>
        <p className="text-lg text-gray-400">Perfecto para toda empresa que necesite una aplicación móvil personalizada.</p>
      </header>

      {/* Plan Description Section */}
      <section className="grid grid-cols-1 gap-8 w-full max-w-xl">

        {/* Plan Details */}
        <div className="bg-[#112240] border border-[#00BFFF] rounded-lg p-8 text-center shadow-lg mx-auto flex flex-col">
          <h2 className="text-3xl text-[#00BFFF] font-bold mb-4">Plan Enterprise</h2>
          <p className="text-lg text-gray-400 mb-6">Ideal para empresas que necesitan una app móvil personalizada, con soporte especializado y despliegue completo.</p>

          {/* Pricing */}
          <div className="text-[#00BFFF] text-5xl font-bold mb-4">$375.990</div>
          <p className="text-gray-400 mb-6">Pago Único</p>

          {/* Benefits */}
          <div className="text-left space-y-4 mb-6">
            <div className="flex items-center">
              <img src="https://img.icons8.com/fluent/48/000000/android-os.png" alt="App iOS/Android" className="w-8 h-8 mr-3" />
              <p className="text-gray-300">App iOS / Android</p>
            </div>
            <div className="flex items-center">
              <img src="https://img.icons8.com/ios-filled/50/00BFFF/cloud.png" alt="Despliegue Completo" className="w-8 h-8 mr-3" />
              <p className="text-gray-300">Despliegue Completo</p>
            </div>
            <div className="flex items-center">
              <img src="https://img.icons8.com/fluent/48/000000/customer-support.png" alt="Soporte Especializado" className="w-8 h-8 mr-3" />
              <p className="text-gray-300">Soporte Especializado</p>
            </div>
          </div>

          {/* Payment Button */}
          <a
            href="https://www.webpay.cl/form-pay/221382"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#00BFFF] border-[#00BFFF] border-2 font-semibold py-2 px-8 rounded-full hover:bg-[#00BFFF] hover:text-[#000000]"
          >
            Contratar Ahora
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 w-full max-w-6xl text-center">
        <h2 className="text-4xl text-[#00BFFF] font-bold mb-6">¿Qué incluye la Membresía Enterprise?</h2>
        <p className="text-lg text-gray-400 mb-12">Con nuestro plan enterprise, tendrás una aplicación móvil a medida para tu negocio, con un despliegue completo y soporte especializado.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
            <img
              src="https://img.icons8.com/fluent/64/000000/android-os.png" // Icono para App iOS / Android
              alt="App iOS / Android"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl text-[#00BFFF] font-semibold">App iOS / Android</h3>
            <p className="text-gray-400 mt-4">Desarrollo de una aplicación nativa tanto para iOS como para Android.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
            <img
              src="https://img.icons8.com/ios-filled/50/00BFFF/cloud.png" // Nuevo icono para Despliegue Completo
              alt="Despliegue Completo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl text-[#00BFFF] font-semibold">Despliegue Completo</h3>
            <p className="text-gray-400 mt-4">Nos encargamos del despliegue completo en tiendas de aplicaciones y en la nube.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
            <img
              src="https://img.icons8.com/fluent/48/000000/customer-support.png" // Icono para soporte especializado
              alt="Soporte Especializado"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl text-[#00BFFF] font-semibold">Soporte Especializado</h3>
            <p className="text-gray-400 mt-4">Obtén soporte técnico especializado durante el desarrollo y posterior al lanzamiento.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default MembershipEnterprise;
