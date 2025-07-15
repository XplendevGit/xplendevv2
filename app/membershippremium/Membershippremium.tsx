// pages/Membershipstore.js
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { memberships } from "../data/memberships";

const Membershipstore = () => {
  const plan = memberships.find(p => p.name === "Tienda Online");
  if (!plan) return <div className="text-white">Plan no encontrado.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] flex flex-col items-center py-12 px-6">
      {/* Card Info */}
      <section className="grid grid-cols-1 gap-8 w-full max-w-xl mb-12 mt-12">
        <div className={`bg-[#112240] border-[${plan.borderColor}] rounded-lg p-8 text-center shadow-lg mx-auto flex flex-col hover:border-[${plan.hoverColor}] transition-all duration-150 ease-in border`}>
          <h2 className={`text-3xl font-bold mb-4 text-[${plan.color}]`}>{plan.name}</h2>
          <p className="text-lg text-gray-400 mb-6">{plan.description}</p>

          {/* Logo del plan */}
          {plan.logo && (
            <div className="w-[64px] h-[64px] mx-auto mb-6">
              <Image
                src={plan.logo}
                alt={`Logo de ${plan.name}`}
                width={64}
                height={64}
                className="rounded"
              />
            </div>
          )}

          <div className={`text-[${plan.color}] text-5xl font-bold mb-4`}>{plan.price}</div>
          <p className="text-gray-400 mb-6">Pago Único</p>

          <div className="text-left space-y-2 md:space-y-3 xl:space-y-4 mb-6">
            {plan.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Image src={benefit.icon} alt={benefit.label} width={80} height={80} className="w-8 h-8 mr-3" />
                <p className="text-gray-300 lg:text-base text-xs">{benefit.label}</p>
              </div>
            ))}
          </div>

          <a
            href={plan.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block text-[${plan.color}] border-[${plan.color}] border-2 font-semibold py-2 px-8 rounded-full hover:bg-[${plan.color}] hover:text-[#000000]`}
          >
            Contratar Ahora
          </a>
        </div>
      </section>

      {/* Resumen del plan */}
      <section className="mt-16 w-full max-w-6xl text-center">
        <h2 className="text-4xl text-[#B6E4FF] font-bold mb-6">¿Qué incluye la {plan.name}?</h2>
        <p className="text-lg text-gray-400 mb-12">
          Con nuestro plan, obtienes las herramientas necesarias para gestionar tu tienda online de forma completa.<br />
          <span className="text-xl">
            Una vez completado el pago de tu membresía, nos pondremos en contacto contigo para orientarte en los siguientes pasos.<br />
          </span>
          <span className="text-2xl">Estamos ansiosos por comenzar!</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-4">
          {plan.benefits.slice(0, 4).map((benefit, i) => (
            <div
              key={i}
              className={`bg-[#112240] rounded-lg p-6 shadow-lg border-[#112240] hover:border-[${plan.hoverColor}] transition-all duration-150 ease-in border`}
            >
              <Image
                src={benefit.icon}
                alt={benefit.label}
                className="w-16 h-16 mx-auto mb-4"
                width={80}
                height={80}
              />
              <h3 className="text-2xl text-[#B6E4FF] font-semibold">{benefit.label}</h3>
            </div>
          ))}
        </div>

        <div className="flex gap-8 w-full max-w-xl justify-center items-center mx-auto mt-12">
          <a href={plan.paymentLink}>
            <div className={`bg-transparent border border-[${plan.color}] text-[${plan.color}] py-2 px-4 font-semibold rounded-full hover:bg-[${plan.color}] hover:text-black transition-all text-center`}>
              Quiero mi Tienda Online!
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Membershipstore;
