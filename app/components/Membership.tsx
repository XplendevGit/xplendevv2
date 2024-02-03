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

           <div className="contenedor-membership h-full flex justify-center">

               <div className="membership-1 flex flex-col">

                <div className="flex flex-col space-y-4 justify-center items-center lg:py-12 text-center no-select">

                <h1 className="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-hammersmithOne text-white transition-all duration-500">
                  Elige como adaptar <span className="text-[#29F2CD]">Tu Sitio Web</span>
                </h1>

                <p className="xl:text-2xl lg:text-xl text-lg font-unicaone text-[#29F2CD] transition-all duration-500 uppercase">
                  <span className="text-[#F8368F]">Haz click </span> para conocer nuestros planes de contratación y sus diferentes características
                </p>

                </div>
                 
               </div>
                
               <div className="membership-2 flex justify-center">

                <div className="flex h-full w-auto rounded-xl bg-white cursor-pointer md:hover:animate-none hover:animate-pulse">

               <Link href={'/membersias'}>
                <div className="h-full w-full">
                    <div className="p-12 py-6 space-y-4">
                        
                        <button className="border-[2px] border-black rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 uppercase no-select">
                        Sitio Estandar
                        </button>
                        <h1 className="xl:text-2xl text-xl text-md font-hammersmithOne text-black transition-all duration-500">Personalizado</h1>

                    </div>

                    <div className="px-12 py-2 md:space-y-2 space-y-1 flex flex-col">
                        
                        <div className="flex space-x-2">

                        <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                        <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Personalizado</h1>
                        
                        </div>

                        <div className="flex space-x-2">

                         <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                          <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Responsivo</h1>

                         </div>

                         <div className="flex space-x-2">

                          <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                           <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Dominio .cl/com</h1>

                           </div>

                          <div className="flex space-x-2">

                          <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                           <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Hosting</h1>

                           </div>

                          <div className="flex space-x-2">

                          <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                           <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase"></h1>

                           </div>
                           

                           <div className="flex space-x-2 md:pb-4 pb-2">

                               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase"></h1>

                           </div>

                      <div className="pago border-t-2 border-black/20 space-y-2 items-center cursor-pointe md:hover:animate-none hover:animate-pulse pt-2 flex flex-col">
                

                       <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Vengo%20del%20enlace%20de%20su%20página%20web.%20Quiero%20información%20para%20contratar%20el%20plan%20ESTANDAR'}>
                     <div className="h-full w-full">

                       <h1 className="xl:text-lg lg:text-lg md:text-md text-md font-hammersmithOne text-black transition-all duration-500">
                     Desde $139.990
                    </h1>

                  </div>
                  </Link>
                 </div>

                    </div>
                </div>
                </Link>


                </div>

                  
               </div>

               <div className="membership-3 flex justify-center">

                <div className="bg-white rounded-xl h-auto w-auto cursor-pointer md:hover:animate-none hover:animate-pulse">

                <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Vengo%20del%20enlace%20de%20su%20página%20web.%20Quiero%20información%20para%20contratar%20el%20plan%20EXCLUSIVO'}>
               <div className="h-full w-full">


               <div className="p-12 py-6 space-y-4">
                        
                        <button className="border-[2px] border-black rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 uppercase no-select">
                        Sitio Exclusivo
                        </button>
                        <h1 className="xl:text-2xl text-xl text-md font-hammersmithOne text-black transition-all duration-500">Administrable</h1>

                    </div>

                <div className="px-12 py-2 md:space-y-2 space-y-1 flex flex-col">
                        
                        <div className="flex space-x-2">

                        <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                        <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Personalizado</h1>
                        
                        </div>


                        <div className="flex space-x-2">

                         <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                          <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Responsivo</h1>

                         </div>

                         <div className="flex space-x-2">

                          <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                           <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Dominio .cl/com</h1>

                           </div>

                           <div className="flex space-x-2">

                               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Hosting</h1>

                           </div>

                            <div className="flex space-x-2">

                               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">SiteWizard CMS</h1>

                           </div>


                             <div className="flex space-x-2 md:pb-4 pb-2">

                               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase"></h1>

                           </div>

                <div className="pago2 border-t-2 border-black/20 space-y-2 items-center justify-end cursor-pointer md:hover:animate-none hover:animate-pulse pt-2 flex flex-col">

                 <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Vengo%20del%20enlace%20de%20su%20página%20web.%20Quiero%20información%20para%20contratar%20el%20plan%20EXCLUSIVO'}>
                   <div className="w-full h-full">       
                       <h1 className="xl:text-lg lg:text-lg md:text-md text-md font-hammersmithOne text-black transition-all duration-500">
                        Desde $249.990
                      </h1>        
                  </div>
               </Link>

             </div>

                    </div>

                  </div> 
                  </Link>


                </div>
               


              </div>

              
              <div className="membership-6 flex justify-center">


                <div className="bg-[#29F2CD] flex rounded-xl h-auto w-auto cursor-pointer md:hover:animate-none hover:animate-pulse">

                <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Vengo%20del%20enlace%20de%20su%20página%20web.%20Quiero%20información%20para%20contratar%20el%20plan%20EXCLUSIVO'}>
               <div className="h-full w-full">


               <div className="p-12 py-6 space-y-4">
                        
                        <button className="border-[2px] border-white rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 uppercase no-select myfilter3">
                        E-Commerce
                        </button>
                        <h1 className="xl:text-2xl text-xl font-hammersmithOne text-white transition-all duration-500 myfilter3">Tienda Online</h1>

                </div>

                <div className="px-12 py-2 md:space-y-2 space-y-1 w-full">
                        
                        <div className="flex space-x-2">

                        <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                        <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Personalizado</h1>
                        
                        </div>

                        <div className="flex space-x-2">

                         <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 h-6 w-6"></HiOutlineCheck>
                          <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Diseño Responsivo</h1>

                         </div>

                         <div className="flex space-x-2">

                          <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                           <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Dominio .cl/com</h1>

                           </div>

                           <div className="flex space-x-2">

                               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Hosting</h1>

                           </div>

                            <div className="flex space-x-2">

                               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">Carrito de Compras</h1>

                           </div>

                             <div className="flex space-x-2 md:pb-4 pb-2">

                               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500  h-6 w-6"></HiOutlineCheck>
                               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">SiteWizard CMS</h1>

                           </div>

                  <div className="pago2 border-t-2 border-black/20 space-y-2 items-center cursor-pointer md:hover:animate-none hover:animate-pulse pt-2 flex flex-col">

                 <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Vengo%20del%20enlace%20de%20su%20página%20web.%20Quiero%20información%20para%20contratar%20el%20plan%20EXCLUSIVO'}>
                   <div className="w-full h-full">       
                       <h1 className="xl:text-lg lg:text-lg md:text-md text-md font-hammersmithOne text-black transition-all duration-500">
                        Desde $479.990
                      </h1>        
                  </div>
               </Link>

             </div>

                    </div>

                  </div> 
                  </Link>


                </div>
               
              </div>


           </div>

        </motion.div>
        
    </div>
  )
}

export default Membership