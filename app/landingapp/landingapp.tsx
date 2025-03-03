// pages/LandingApp.js
import Image from "next/image";
import React from "react";

const LandingApp = () => {
  return (
    <div className="min-h-screen bg-[#0D7377] flex flex-col items-center"> {/* Fondo aplicado a todo el contenedor principal */}
      
      {/* Header Section */}
      <header className="text-center text-white py-16 px-6 mt-12"> 
        <h1 className="text-4xl font-bold pb-4 max-w-3xl mx-auto">
          NutriSnap Tu Compañero Inteligente para una Alimentación Saludable
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-white"> 
          Gestiona tu nutrición y compara alimentos fácilmente con IA, eligiendo los mejores según tus metas y necesidades de salud.
        </p>
        <div className="mt-10 space-x-4">
          <button className="bg-[#128C7E] text-white px-6 py-2 rounded-lg hover:bg-[#0D6E68] transition-all duration-200 shadow-md">
            Descargar App
          </button>
        </div>

        {/* App Mockup Image */}
        <div className="">
          <Image
            src="https://i.postimg.cc/XJqbd0rH/nutrisnap-icon-1.png" // Reemplaza con la URL de la imagen mockup
            alt="App Mockup"
            width={680}
            height={680}
            className="w-[480px] mx-auto"
          />
        </div>
      </header>

      {/* Stats Section */}
      <section className="text-white flex flex-wrap justify-center space-x-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">1,265</h2>
          <p>Usuarios</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">1,000</h2>
          <p>Descargas</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">508</h2>
          <p>Likes</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-white py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-12">
        <div className="bg-[#128C7E] p-8 rounded-xl shadow-lg text-center transition-all duration-200 hover:scale-105 hover:bg-[#0D6E68]">
          <Image
            src="https://i.postimg.cc/hGXnLQSx/Nutri-icon.png" // Reemplaza con la URL del icono correspondiente
            alt="Evaluación de Objetivos Nutricionales"
            className="w-16 h-16 mx-auto mb-4"
            height={500}
            width={500}
          />
          <h3 className="text-2xl font-bold">Evaluación de Objetivos Nutricionales</h3>
          <p className="mt-4 text-white">
            Selecciona alimentos que te ayuden a alcanzar tus metas nutricionales, como perder peso o ganar masa muscular.
          </p>
        </div>
        <div className="bg-[#128C7E] p-8 rounded-xl shadow-lg text-center transition-all duration-200 hover:scale-105 hover:bg-[#0D6E68]">
          <Image
            src="https://i.postimg.cc/nLrF3w1X/AI-icon.png" // Reemplaza con la URL del icono correspondiente
            alt="Comparación de Alimentos con IA"
            className="w-16 h-16 mx-auto mb-4"
            height={500}
            width={500}
          />
          <h3 className="text-2xl font-bold">Comparación de Alimentos con IA</h3>
          <p className="mt-4 text-white">
            Compara alimentos con IA y recibe recomendaciones según tus metas de salud y características personales.
          </p>
        </div>
        <div className="bg-[#128C7E] p-8 rounded-xl shadow-lg text-center transition-all duration-200 hover:scale-105 hover:bg-[#0D6E68]">
          <Image
            src="https://i.postimg.cc/hGLr3pPq/infectado.png" // Reemplaza con la URL del icono correspondiente
            alt="Análisis Personalizado para Enfermedades"
            className="w-16 h-16 mx-auto mb-4"
            height={500}
            width={500}
          />
          <h3 className="text-2xl font-bold">Análisis Personalizado para Enfermedades</h3>
          <p className="mt-4 text-white">
            Recibe sugerencias de alimentos basadas en tus condiciones médicas.
          </p>
        </div>
      </section>

      {/* How it works Section */}
      <section className="text-white py-12 px-6 max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-8">¿Cómo Funciona NutriSnap?</h2>
        <div className="flex flex-wrap justify-center md:space-x-8 space-y-6 md:space-y-0">
          <div className="text-center">
            <Image
              src="https://i.postimg.cc/XYJmmZrv/1create-step.png" // Reemplaza con la URL del icono correspondiente
              alt="Step 1"
              className="w-52 h-52 mx-auto mb-4"
              height={500}
              width={500}
            />
            <h3 className="text-xl font-semibold">1. Crear una cuenta en NutriSnap</h3>
            <p className="text-gray-200">Regístrate fácilmente y comienza a usar la app para gestionar tu nutrición de manera inteligente.</p>
          </div>
          <div className="text-center">
            <Image
              src="https://i.postimg.cc/fTM67qZm/2create-step.png" // Reemplaza con la URL del icono correspondiente
              alt="Step 2"
              className="w-52 h-52 mx-auto mb-4"
              height={500}
              width={500}
            />
            <h3 className="text-xl font-semibold">2. Completar tu perfil</h3>
            <p className="text-gray-200">Rellena tu perfil con detalles como tu físico, condiciones de salud y objetivos nutricionales para obtener recomendaciones personalizadas.</p>
          </div>
          <div className="text-center">
            <Image
              src="https://i.postimg.cc/15Mbv05T/3create-step.png" // Reemplaza con la URL del icono correspondiente
              alt="Step 3"
              className="w-52 h-52 mx-auto mb-4"
              height={500}
              width={500}
            />
            <h3 className="text-xl font-semibold">3. Comparar alimentos con la cámara</h3>
            <p className="text-gray-200">Utiliza la cámara para comparar alimentos en tiempo real y recibe resultados basados en inteligencia artificial, adaptados a tus necesidades.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingApp;
