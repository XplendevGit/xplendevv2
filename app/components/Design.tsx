"use client"
import React, { useState } from 'react'
import Image from 'next/image';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type Props = {}

const Design = (props: Props) => {

  const imageDesign1 = "https://i.postimg.cc/0j0KDhqm/responsive-Design-movilresponsive.png"
  const imageDesign2 = "https://i.postimg.cc/xdB9pq13/dinamismo-Image-rome.png"
  const imageDesign3 = "https://i.postimg.cc/cCHTK1fP/webunica-Design-hand.png"

  const [isHovered, setHovered] = useState(false);
  const [isButtonHovered, setButtonHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
    setButtonHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setButtonHovered(false);
  };

  const [isHovered2, setHovered2] = useState(false);
  const [isButtonHovered2, setButtonHovered2] = useState(false);

  const handleHover2 = () => {
    setHovered2(true);
    setButtonHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
    setButtonHovered2(false);
  };

  const [isHovered3, setHovered3] = useState(false);
  const [isButtonHovered3, setButtonHovered3] = useState(false);

  const handleHover3 = () => {
    setHovered3(true);
    setButtonHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setHovered3(false);
    setButtonHovered3(false);
  };

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
    <div className="grid bg-black ">
        <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 100 }}
         animate={controls}
         className="w-full h-full lg:py-28 xl:p-28 md:p-12 p-10">

          <div className="contenedor-design h-full">
             

         <div className="design-1 grid justify-center items-center lg:py-12 md:space-y-4 text-center no-select">
          
              <h1 className="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-hammersmithOne text-white transition-all duration-500">Conoce nuestras funcionalidades</h1>
              <p className="xl:text-2xl lg:text-xl md:text-lg text-md font-unicaone text-[#29F2CD] transition-all duration-500">EL DISEÑO ES NUESTRO ENFOQUE PRINCIPAL Y NOS ESPECIALIZAMOS EN <br></br>ENTREGAR FUNCIONALIDADES INDISPENSABLES DENTRO DEL MODELADO DE CADA DISEÑO</p>
          
         </div>
              <div
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
             className={`no-select design-2 ${
              isButtonHovered ?
            'bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-md grid justify-center scale-105' 
            : 'bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-md grid justify-center filter lg:sepia-[100]'
            }`}
          >

          <div className="justify-end text-center my-auto flex md:px-6 px-4">
             <h1 className="xl:text-4xl lg:text-3xl text-xl font-unicaone text-white transition-all duration-500">diseño responsivo <br /> <span className="xl:text-2xl lg:text-xl text-lg font-abel text-white transition-all duration-500">Flexibilidad visual en cada pantalla. Diseñamos una web que se adapte a cada necesidad</span>
             </h1>
         </div>
             
            </div>


          <div 
            onMouseEnter={handleHover2}
            onMouseLeave={handleMouseLeave2}
            className={`no-select ${
            isButtonHovered2 ?
            ' design-3 bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-md grid justify-center scale-105' 
          : 'design-3 bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-md grid justify-center filter lg:sepia-[100]'
            }`}
          >

        <div className="justify-end text-center my-auto flex md:px-12 px-4">
            <h1 className="xl:text-4xl lg:text-3xl text-xl font-unicaone text-white transition-all duration-500">Dinamísmo Visual <br /> <span className="xl:text-2xl lg:text-xl text-lg font-abel text-white transition-all duration-500">Exploramos el camino de la sutilidad de los cuadros en movimiento</span>
            </h1>
            <h1 className="xl:text-2xl lg:text-xl text-lg font-abel text-white transition-all duration-500"></h1>
        </div>

          </div>

         <div 
            onMouseEnter={handleHover3}
            onMouseLeave={handleMouseLeave3}
            className={`no-select ${
            isButtonHovered3 ?
            ' design-4 bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-md grid justify-center scale-105' 
          : 'design-4 bg-gradient-to-t from-black to-[#29F2CD] transition-all duration-500 rounded-md grid justify-center filter lg:sepia-[100]'
            }`}
          >
        <div className="justify-end text-center my-auto flex md:px-12 px-4">
        <h1 className="xl:text-4xl lg:text-3xl text-xl font-unicaone text-white transition-all duration-500">web única <br /> <span className="xl:text-2xl lg:text-xl text-lg font-abel text-white transition-all duration-500">Cada web, una historia nueva. Existen infinítas formas de contar tu história</span>
        </h1>
       
        </div>
           
         </div>

         <div 
         onMouseEnter={handleHover}
         onMouseLeave={handleMouseLeave}
         className="design-5 md:min-w-[160px] md:max-h-[320px] min-w-[240px] min-h-[180px] relative transition-all duration-500"
         >

          <Image src={imageDesign1} alt={'elegant'} layout={'fill'} objectFit={'fill'} 
                            className={`${
                              isButtonHovered ?
                               ' filter-none transition-all duration-500 translate-y-[-8%] scale-105' 
                               : 'filter lg:sepia-[100] transition-all duration-500'
                                }`}
         >

         </Image>

         </div>

         <div 
         onMouseEnter={handleHover2}
         onMouseLeave={handleMouseLeave2}
         className="design-6 md:min-w-[160px] md:max-h-[320px] min-w-[240px] min-h-[180px] relative transition-all duration-500"
         >
         <Image src={imageDesign2} alt={'elegant'} layout={'fill'} objectFit={'fill'} 
                            className={`${
                              isButtonHovered2 ?
                               ' filter-none transition-all duration-500 translate-y-[-8%] scale-105' 
                               : 'filter lg:sepia-[100] transition-all duration-500'
                                }`}
         >

         </Image>
         </div>

         <div 
         onMouseEnter={handleHover3}
         onMouseLeave={handleMouseLeave3}
         className="design-7 md:min-w-[160px] md:max-h-[320px] min-w-[240px] min-h-[180px] relative transition-all duration-500"
         >
         <Image src={imageDesign3} alt={'elegant'} layout={'fill'} objectFit={'fill'} 
                            className={`${
                              isButtonHovered3 ?
                               ' filter-none transition-all duration-500 translate-y-[-8%] scale-105' 
                               : 'filter lg:sepia-[100] transition-all duration-500'
                                }`}
         >

         </Image>
         </div>

          </div>

        </motion.div>
    </div>
  )
}

export default Design