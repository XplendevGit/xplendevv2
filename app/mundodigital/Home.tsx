"use client"
import React from 'react'
import Image from 'next/image'

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type Props = {}

const Home = (props: Props) => {

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
  
  const imagenDigital = "https://i.postimg.cc/B6PqRKf3/movilelogoeditadohero.png"
  const imagenFirebase = "https://i.postimg.cc/XJv8W9Vr/Firebase-Logo-Icon.png"
  const imagenSsl = "https://i.postimg.cc/T1Q8NVYC/sslsecureicon.png"
  const imagenCloud = "https://i.postimg.cc/3rvH6YXT/cloudserviceslogo.png"
  const imagenGoDaddy = "https://i.postimg.cc/RCYwCrbG/godaddy-Logo.png"
  
  

  return (
    <div className="bg-black">

      <div

       className="w-full h-screen lg:py-28 xl:p-28 md:p-12 p-10 pt-28">
          
          <motion.div
           initial={{ opacity: 0, x: 0 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: [0.6, 0.05, 0.5, 0.95] }}
           className="contenedor-mundodigitalhome h-full">

              <div className="mundodigitalhome-1">

                <div className="relative w-full h-full">
                <picture>
              <source media="(max-width: 425px)" srcSet={imagenDigital} />
               <source media="(min-width: 426px)" srcSet={imagenDigital} />
               <Image className="md:rounded-sm rounded-full lg:blur-none blur-sm" src={imagenDigital} alt={''} layout={'fill'} objectFit={'fill'}>
                </Image>
               </picture>
                </div>
                
              </div>
              <div className="mundodigitalhome-2">
              
              <div className="lg:px-12 lg:pt-12 md:px-12 lg:space-y-4 md:space-y-2 no-select">

                <div className="md:space-x-12 space-x-5 grid lg:justify-start lg:items-start justify-center items-center">

                <h1 className="font-audiowide xl:text-7xl lg:text-5xl md:text-4xl text-3xl text-[#29F2CD]">Mundo<br></br></h1>
                 <h2 className="font-audiowide xl:text-7xl lg:text-5xl md:text-4xl text-3xl text-[#F8368F]">Digital</h2>

                </div>


              </div>

              </div>

              <div className="mundodigitalhome-3 ">
              <div className="lg:px-12 lg:pt-12 md:px-12 lg:space-y-4 md:space-y-2 no-select">

                <div className="">

                <h1 className="lg:text-2xl md:text-xl myfilter3 text-md font-unicaone uppercase text-white/80">El acceso a un sitio web debe ser SEGURO, RÁPIDO y FLUIDO, es por eso que combinamos tecnologías web de vanguardia y servicios en la nube confiables para garantizar acceso seguro y velocidad de carga desde cualquier lugar<br></br></h1>

                </div>

              </div>

              </div>
              <div className="mundodigitalhome-4">
                
              <div className="lg:px-12 lg:pt-12 md:px-12 lg:space-y-4 md:space-y-2 no-select">

                <div className="flex md:space-x-4 lg:justify-start lg:items-start justify-center items-center">
                

                <div className="relative md:w-20 md:h-20 w-12 h-12 transition-all duration-500 hover:scale-105">
                <picture>
              <source media="(max-width: 425px)" srcSet={imagenFirebase} />
               <source media="(min-width: 426px)" srcSet={imagenFirebase} />
               <Image className="md:rounded-sm rounded-full" src={imagenFirebase} alt={''} layout={'fill'} objectFit={'fill'}>
                </Image>
               </picture>
                </div>

                <div className="relative md:w-20 md:h-20 w-12 h-12 transition-all duration-500 hover:scale-105">
                <picture>
              <source media="(max-width: 425px)" srcSet={imagenSsl} />
               <source media="(min-width: 426px)" srcSet={imagenSsl} />
               <Image className="md:rounded-sm rounded-full" src={imagenSsl} alt={''} layout={'fill'} objectFit={'fill'}>
                </Image>
               </picture>
                </div>

                <div className="relative md:w-20 md:h-20 w-12 h-12 transition-all duration-500 hover:scale-105">
                <picture>
              <source media="(max-width: 425px)" srcSet={imagenCloud} />
               <source media="(min-width: 426px)" srcSet={imagenCloud} />
               <Image className="md:rounded-sm rounded-full" src={imagenCloud} alt={''} layout={'fill'} objectFit={'fill'}>
                </Image>
               </picture>
                </div>

                <div className="relative md:w-20 md:h-20 w-12 h-12 transition-all duration-500 hover:scale-105">
                <picture>
              <source media="(max-width: 425px)" srcSet={imagenGoDaddy} />
               <source media="(min-width: 426px)" srcSet={imagenGoDaddy} />
               <Image className="md:rounded-sm rounded-full" src={imagenGoDaddy} alt={''} layout={'fill'} objectFit={'fill'}>
                </Image>
               </picture>
                </div>

                </div>

                </div>
              </div>

          </motion.div>
            
      </div>
      
     </div>
  )
}

export default Home