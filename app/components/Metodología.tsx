"use client"
import React from 'react'
import { CiGrid42 } from "react-icons/ci";
import { MdGroupAdd, MdVerifiedUser, MdOutlinePublishedWithChanges } from "react-icons/md";
import { IoCloudUpload } from "react-icons/io5";
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

                    <div className="metodologia-1 flex flex-col md:pr-12 text-center lg:text-start">

                        <div className="lg:py-12 md:py-2 py-2 xl:space-y-8 space-y-2 no-select">
                          

                          <div className="flex flex-col justify-center lg:justify-start">

                          <h1 className="xl:text-6xl lg:text-4xl md:text-3xl text-xl font-hammersmithOne transition-all duration-500 text-[#29F2CD]">
                          SiteWizard CMS<br></br> <span className="text-white">Conoce Nuestro Gestor de contenido</span>
                          </h1>
                           
                          </div>

                           <div className="flex flex-col justify-center text-center lg:text-start lg:justify-start space-y-2">

                           <p className="xl:text-2xl lg:text-xl text-lg font-unicaone text-[#29F2CD] transition-all duration-500 uppercase">
                            A través de nuestros planes ofrecemos la integración de nuestro administrador de contenido SiteWizard CMS, para que logres administrar el contenido de tu sitio desde cualquier lugar de manera rápida y sencilla.
                            </p>

                            <p className="xl:text-2xl lg:text-xl text-lg font-unicaone text-white transition-all duration-500 uppercase">¿Quieres Saber más?</p>

                            <div className="w-full h-auto flex pt-2 justify-center lg:justify-start">


                            <Link href={'https://sitewizardcontentstudio.vercel.app/'}>
                              <button
                               className="text-white hover:border-[#F8368F] hover:text-[#F8368F] transition-all hover:scale-105 duration-500 lg:text-xl font-unicaone no-select px-4 py-2 rounded-full border-2 uppercase">
                                Ir al sitio de SiteWizard CMS
                              </button>
                              </Link>


                            </div>



                           </div>
                      



                        </div>
                      
                    
                    </div>
                    <div className="metodologia-2 bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-xl">

                        <div className="xl:p-12 md:p-4 p-2 space-y-2">

                          <div className="grid md:justify-start justify-center">     
                        <MdVerifiedUser className="h-20 w-20 text-white myfilter transition-all duration-500 hover:translate-y-[-8%] hover:scale-105" />
                          </div>

                          <div className="grid md:justify-start justify-center">
                          <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 myfilter">
                          Acceso Seguro
                          </h1>
                          </div>

                          <p className="xl:text-xl lg:text-xl text-lg font-unicaone text-white transition-all duration-500 uppercase myfilter">
                          Accedes directamente a SiteWizard CMS con tus credenciales</p>

                        </div>

                    </div>

                    <div className="metodologia-3 bg-gradient-to-t from-black to-[#F8368F] transition-all duration-500 rounded-xl">

                    <div className="xl:p-12 md:p-4 p-2 space-y-2">

                      <div className="grid md:justify-start justify-center">

                      <MdOutlinePublishedWithChanges className="h-20 w-20 text-white myfilter transition-all duration-500 hover:translate-y-[-8%] hover:scale-105" />
                      </div>

                      <div className="grid md:justify-start justify-center">
                      <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 myfilter  md:pl-0 pl-[1.5vh]">
                      Administra el Contenido
                         </h1>
                      </div>



                           <p className="xl:text-xl lg:text-xl text-lg font-unicaone text-white myfilter transition-all duration-500 uppercase">
                           Administra el contenido de tu sitio, editando el contenido de las secciones desde textos hasta imagenes</p>

                    </div>

                    </div>

                    <div className="metodologia-4 bg-gradient-to-t from-black to-[#F8368F] transition-all duration-500 rounded-xl">

                    <div className="xl:p-12 md:p-4 p-2 space-y-2">

                      <div className="grid md:justify-start justify-center">
                      <MdGroupAdd className="h-20 w-20 text-white transition-all duration-500 myfilter hover:translate-y-[-8%] hover:scale-105" />
                      </div>

                      <div className="grid md:justify-start justify-center">
                      <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 myfilter md:pl-0 pl-[1.5vh]">
                       Multiples Administradores
                        </h1>
                      </div>


                        <p className="xl:text-xl lg:text-xl text-lg font-unicaone text-white myfilter transition-all duration-500 uppercase">
                        Es posible agregar cuentas para que varios usuarios puedan administrar el contenido del sitio</p>

                       </div>

                    </div>

                    <div className="metodologia-5 bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-xl">

                        
                    <div className="xl:p-12 md:p-4 p-2 space-y-2">

                      <div className="grid md:justify-start justify-center">
                          
                       <IoCloudUpload className="h-20 w-20 text-white transition-all duration-500 myfilter hover:translate-y-[-8%] hover:scale-105" />
                      </div>

                      <div className="grid md:justify-start justify-center">
                      <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 myfilter md:pl-0 pl-[1.5vh]">
                      Sincronización en la nube
                       </h1>
                      </div>

                          <p className="xl:text-xl lg:text-xl text-lg font-unicaone text-white myfilter transition-all duration-500 uppercase">
                          Editas y Publicas de manera instantanea desde cualquier dispositivo conectado a la red</p>

                          </div>

                    </div>

            </div>
        </motion.div>
    </div>
  )
}

export default 
Metodología