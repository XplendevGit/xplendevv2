"use client"
import Link from 'next/link';
import React from 'react'
import { HiOutlineCheck } from "react-icons/hi";

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type Props = {}

const Membership = (props: Props) => {
 
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.6, 0.05, 0.5, 0.95] },
      });
    }
  }, [controls, inView]);

  return (
    <div className="bg-black min-h-screen h-auto min-w-screen">
        <motion.div
         initial={{ opacity: 0, y: 100 }}
         animate={controls}
         ref={ref}
         className="w-full h-full lg:py-28 xl:p-28 md:p-12 p-10">

           <div className="contenedor-membership h-full">

               <div className="membership-1 grid">

                <div className="grid space-y-4 justify-center items-center lg:py-12 text-center no-select">

                <h1 className="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-hammersmithOne text-white transition-all duration-500">
                  Hazte Miembro y Comencemos!
                </h1>

                <p className="xl:text-2xl lg:text-xl text-lg font-unicaone text-[#29F2CD] transition-all duration-500 uppercase">
                  <span className="text-[#F8368F]">Haz click </span> para conocer nuestros planes de contratación y sus diferentes características
                </p>

                </div>
                 
               </div>
                
               <div className="membership-2 bg-white rounded-xl lg:max-h-[550px] xl:min-h-[580px] lg:min-h-[580px] md:min-h-[480px] lg:min-w-[350px] lg:max-w-[350px] min-h-[350px] cursor-pointer md:hover:animate-none hover:animate-pulse">
               <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Vengo%20del%20enlace%20de%20su%20página%20web.%20Quiero%20información%20para%20contratar%20el%20plan%20ESTANDAR'}>
                <div className="h-full w-full">
                    <div className="lg:p-12 px-5 py-3 md:space-y-6 space-y-3">
                        
                        <button className="border-[2px] border-black rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 uppercase no-select">
                        Estandar
                        </button>
                        <h1 className="xl:text-2xl text-xl text-md font-hammersmithOne text-black transition-all duration-500">Personalizada</h1>

                    </div>

                    <div className="lg:px-12 p-2 md:space-y-4 space-y-1">
                        
                        <div className="flex md:space-x-4 space-x-2">

                        <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                        <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Personalizado</h1>
                        
                        </div>

                        <div className="flex md:space-x-4 space-x-2">

                           <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                           <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Modelos Animados</h1>

                         </div>

                        <div className="flex md:space-x-4 space-x-2">

                         <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                          <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Responsivo</h1>

                         </div>

                         <div className="flex md:space-x-4 space-x-2">

                          <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                           <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Formularios de Contacto</h1>

                           </div>

                           <div className="flex md:space-x-4 space-x-2">

                               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Botones de Redes Sociales</h1>

                           </div>

                    </div>
                </div>
                </Link>
                  
               </div>

               <div className="membership-3 bg-[#29F2CD] rounded-xl lg:min-w-[512px] lg:max-w-[750px] cursor-pointer md:hover:animate-none hover:animate-pulse">
               
               <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Vengo%20del%20enlace%20de%20su%20página%20web.%20Quiero%20información%20para%20contratar%20el%20plan%20EXCLUSIVO'}>
               <div className="h-full w-full">


               <div className="lg:p-12 px-5 py-3 md:space-y-6 space-y-3">
                        
                        <button className="border-[2px] border-white rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 uppercase no-select myfilter3">
                        Exclusivo
                        </button>
                        <h1 className="xl:text-2xl text-xl font-hammersmithOne text-white transition-all duration-500 myfilter3">Experiencia Completa</h1>

                </div>

                  <div className="lg:px-12 p-2 md:pace-y-4">


                   <div className="flex">

                       
                    <div className="md:space-y-4">

                      <div className="flex md:space-x-4 space-x-2">

                      <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                      <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Personalizado</h1>

                      </div>

                      <div className="flex md:space-x-4 space-x-2">

                      <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                      <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Modelos Animados</h1>

                      </div>

                      <div className="flex md:space-x-4 space-x-2">

                      <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                      <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Responsivo</h1>

                      </div>

                      <div className="flex md:space-x-4 space-x-2">

                      <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                      <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Formularios de Contacto</h1>

                      </div>

                      <div className="flex md:space-x-4 space-x-2">

                      <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                      <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Botones de Redes Sociales</h1>

                      </div>

                      </div>

                      <div className="md:space-y-4 space-y-1">

                      <div className="flex md:space-x-4 space-x-2">

                      <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                      <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Dominio .cl/.com</h1>

                      </div>

                      <div className="flex md:space-x-4 space-x-2">

                      <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                      <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Servicio de Hosting</h1>

                      </div>

                      <div className="flex md:space-x-4 space-x-2">

                      <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                      <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">certificado ssl</h1>

                      </div>

                      <div className="flex md:space-x-4 space-x-2">

                      <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                      <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">correos corporativos</h1>

                      </div>

                      </div>


                      </div>

                    
                    </div>

                  </div> 
                  </Link>

              </div>

                <div className="membership-5 border-t-2 border-black/20 lg:space-y-8 lg:mx-12 mx-6 items-center grid cursor-pointer md:hover:animate-none hover:animate-pulse">

                 <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Vengo%20del%20enlace%20de%20su%20página%20web.%20Quiero%20información%20para%20contratar%20el%20plan%20EXCLUSIVO'}>
                   <div className="">       
                       <h1 className="xl:text-lg lg:text-lg md:text-md text-md font-hammersmithOne text-black    transition-all duration-500">
                        Desde $189.990<span className="text-white/80">/Pago único </span> ⟶ $32.990<span className="text-white/80">/anual </span>
                      </h1>        
                  </div>
               </Link>

             </div>

               

               <div className="membership-4 border-t-2 border-black/20 lg:space-y-8 lg:mx-12 mx-6 items-center grid cursor-pointe md:hover:animate-none hover:animate-pulser">

               <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Vengo%20del%20enlace%20de%20su%20página%20web.%20Quiero%20información%20para%20contratar%20el%20plan%20ESTANDAR'}>
                <div className="h-full w-full">

                <h1 className="xl:text-lg lg:text-lg md:text-md text-md font-hammersmithOne text-black transition-all duration-500">
                  Desde $139.990<span className="text-black/20">/Pago único</span>
                </h1>

                </div>
                </Link>
               </div>


           </div>

        </motion.div>
        
    </div>
  )
}

export default Membership