// pages/MembershipEnterprise.js
import Image from "next/image";
import Link from "next/link";
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
        <div className="bg-[#112240] border border-[#B6E4FF] rounded-lg p-8 text-center shadow-lg mx-auto flex flex-col  hover:border-[#00BFFF] transition-all duration-150 ease-in">
          <h2 className="text-3xl text-[#00BFFF] font-bold mb-4">Plan Enterprise</h2>
          <p className="text-lg text-gray-400 mb-6">Ideal para empresas que necesitan una app móvil personalizada, con soporte especializado y despliegue completo.</p>

          {/* Pricing */}
          <div className="text-[#00BFFF] text-5xl font-bold mb-4">$375.990</div>
          <p className="text-gray-400 mb-6">Pago Único</p>

          {/* Benefits */}
<div className="text-left space-y-1 md:space-y-3 xl:space-y-4 mb-6">

           {/* Tipo de Servicio */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/android-os.png" 
                alt="App iOS/Android" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">App Personalizada Android</p>

            </div>

            {/* Despliegue */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/ios-filled/50/00BFFF/cloud.png" 
                alt="Despliegue Completo" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">Despliegue Completo</p>
            </div>

            {/* Descargable desde Google Play */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/color/48/000000/google-play.png" 
                alt="Google Play" 
                className="w-8 h-8 mr-3" 
                height={80}
                width={80}
                />
              <p className="text-gray-300 lg:text-base text-xs">Descargable desde Google Play</p>
            </div>

            {/* Soporte */}
            <div className="flex items-center">
              <Image 
                src="https://img.icons8.com/fluent/48/000000/customer-support.png" 
                alt="Soporte Especializado" 
                className="w-8 h-8 mr-3"
                height={80}
                width={80} 
                />
              <p className="text-gray-300 lg:text-base text-xs">Soporte Especializado</p>
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
        <p className="text-lg text-gray-400 mb-12">Con nuestro plan enterprise, tendrás una aplicación móvil a medida para tu negocio, con un despliegue completo y soporte especializado. <br />
        <span className="text-xl">Una vez completado el pago de tu membresía, nos pondremos en contacto contigo para orientarte en los siguientes pasos del proceso. <br /></span>
           <span className="text-2xl">Estamos Ansiosos de poder comenzar!</span>
        </p>

        <p className="text-lg text-gray-400 mb-12 text-center">
            
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#00BFFF] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/fluent/64/000000/android-os.png" // Icono para App iOS / Android
              alt="App iOS / Android"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#00BFFF] font-semibold">APP Android</h3>
            <p className="text-gray-400 mt-4">Desarrollo de una aplicación nativa completamente personalizada, para dispositivos Android.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#00BFFF] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/ios-filled/50/00BFFF/cloud.png" // Nuevo icono para Despliegue Completo
              alt="Despliegue Completo"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#00BFFF] font-semibold">Despliegue Completo</h3>
            <p className="text-gray-400 mt-4">Nos encargamos del despliegue completo en tiendas de aplicaciones y en la nube.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#00BFFF] transition-all duration-150 ease-in border">
            <Image
              src="https://img.icons8.com/fluent/48/000000/customer-support.png" // Icono para soporte especializado
              alt="Soporte Especializado"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#00BFFF] font-semibold">Soporte Especializado</h3>
            <p className="text-gray-400 mt-4">Obtén soporte técnico especializado durante el desarrollo y posterior al lanzamiento.</p>
          </div>

          {/* Feature - Descargable desde Google Play */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[#00BFFF] transition-all duration-150 ease-in border">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png" // Ícono de Google Play
              alt="Descargable desde Google Play"
              className="w-16 h-16 mx-auto mb-4"
              height={80}
              width={80}
            />
            <h3 className="text-2xl text-[#00BFFF] font-semibold">Google PlayStore</h3>
           <p className="text-gray-400 mt-4">
              Tu aplicación estará disponible para su descarga en Google Play Store, para sistemas operativos Android.
            </p>
          </div>

        </div>

        <div className="flex gap-8 w-full max-w-xl justify-center items-center mx-auto mt-12">
              
              <Link href={'https://www.webpay.cl/form-pay/210814'}>
                <div className="bg-transparent border border-[#00D4FF] text-[#00D4FF] py-2 px-4 rounded-full hover:bg-[#00D4FF] hover:text-black transition-all text-center font-bold">
                      Quiero mi Aplicación Android!
                </div>
              </Link>
        </div>

      </section>

    </div>
  );
};

export default MembershipEnterprise;
