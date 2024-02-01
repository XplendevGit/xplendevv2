"use client"
import React from 'react'
import { CiBoxList, CiGrid42 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import Link from 'next/link';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type Props = {}

function Metodología({}: Props) {
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
    <div className="bg-black">
        <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 100  }}
         animate={controls}
         className="w-full h-full lg:py-28 xl:p-28 md:p-12 p-10">

            <div className="contenedor-metodologia h-full">

                    <div className="metodologia-1 grid">

                        <div className="lg:py-12 md:py-2 py-2 xl:space-y-8 space-y-4 no-select">
                          

                          <div className="grid justify-center lg:justify-start">

                          <h1 className="xl:text-6xl lg:text-4xl md:text-3xl text-xl font-hammersmithOne text-white transition-all duration-500">
                          Construyendo Tu Mundo Digital
                          </h1>
                           
                          </div>

                           <div className="grid justify-center text-center lg:text-start lg:justify-start">

                           <p className="xl:text-2xl lg:text-xl text-lg font-unicaone text-[#29F2CD] transition-all duration-500 uppercase">
                            Tu web está Completa y Segura con nosotros.<br></br>Ofrecemos asesoramiento y contratación de Hosting y Dominios .com/.cl de calidad, proporcionándole seguridad y alta velocidad de respuesta de tu sitio web.
                            <br /><span className="text-white">¿Quieres saber más?</span></p>

                           </div>
                          
                              <div className="flex justify-center xl:justify-start pt-5 lg:pt-2">

                              <Link href={'/mundodigital'}>
                              <button className="text-white hover:border-[#F8368F] hover:text-[#F8368F] transition-all hover:scale-105 duration-500 lg:text-xl font-unicaone no-select px-4 py-2 rounded-full border-2 uppercase">
                                Conoce más detalles
                              </button>
                              </Link>

                              </div>

                        </div>
                      
                    
                    </div>
                    <div className="metodologia-2 bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-xl">

                        <div className="xl:p-12 md:p-4 p-2 space-y-2">

                          <div className="grid md:justify-start justify-center">     
                        <CiBoxList className="h-20 w-20 text-white myfilter transition-all duration-500 hover:translate-y-[-8%] hover:scale-105" />
                          </div>

                          <div className="grid md:justify-start justify-center">
                          <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 myfilter">
                          Análisis
                          </h1>
                          </div>

                          <p className="xl:text-xl lg:text-xl text-lg font-unicaone text-white transition-all duration-500 uppercase myfilter">
                          estudiamos tus necesidades y objetivos para diseñar un modelo digital personalizado</p>

                        </div>

                    </div>

                    <div className="metodologia-3 bg-gradient-to-t from-black to-[#F8368F] transition-all duration-500 rounded-xl">

                    <div className="xl:p-12 md:p-4 p-2 space-y-2">

                      <div className="grid md:justify-start justify-center">

                      <CiGrid42 className="h-20 w-20 text-white myfilter transition-all duration-500 hover:translate-y-[-8%] hover:scale-105" />
                      </div>

                      <div className="grid md:justify-start justify-center">
                      <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 myfilter  md:pl-0 pl-[1.5vh]">
                         Diseño y Modelado
                         </h1>
                      </div>



                           <p className="xl:text-xl lg:text-xl text-lg font-unicaone text-white myfilter transition-all duration-500 uppercase">
                           Damos vida a tu visión. Creamos prototipos, definimos la estética y la arquitectura visual de tu sitio</p>

                    </div>

                    </div>

                    <div className="metodologia-4 bg-gradient-to-t from-black to-[#F8368F] transition-all duration-500 rounded-xl">

                    <div className="xl:p-12 md:p-4 p-2 space-y-2">

                      <div className="grid md:justify-start justify-center">
                      <FaLaptopCode className="h-20 w-20 text-white transition-all duration-500 myfilter hover:translate-y-[-8%] hover:scale-105" />
                      </div>

                      <div className="grid md:justify-start justify-center">
                      <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 myfilter md:pl-0 pl-[1.5vh]">
                     Codificación de la Web
                        </h1>
                      </div>


                        <p className="xl:text-xl lg:text-xl text-lg font-unicaone text-white myfilter transition-all duration-500 uppercase">
                        Convertimos los diseños en realidad. Utilizamos tecnologías web para construir tu sitio </p>

                       </div>

                    </div>

                    <div className="metodologia-5 bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-xl">

                        
                    <div className="xl:p-12 md:p-4 p-2 space-y-2">

                      <div className="grid md:justify-start justify-center">
                          
                       <MdVerifiedUser className="h-20 w-20 text-white transition-all duration-500 myfilter hover:translate-y-[-8%] hover:scale-105" />
                      </div>

                      <div className="grid md:justify-start justify-center">
                      <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 myfilter md:pl-0 pl-[1.5vh]">
                        Entrega y Monitoreo
                       </h1>
                      </div>

                          <p className="xl:text-xl lg:text-xl text-lg font-unicaone text-white myfilter transition-all duration-500 uppercase">
                          Desplegamos tu sitio web y realizamos pruebas exhaustivas para garantizar su funcionamiento óptimo</p>

                          </div>

                    </div>

            </div>
        </motion.div>
    </div>
  )
}

export default 
Metodología