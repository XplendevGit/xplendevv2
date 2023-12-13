"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type Props = {}

const Contact = (props: Props) => {

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


  const [message, setMessage] = useState(false);

  const handleClick = () => {
    setMessage(true);
    alert("Tu mensaje será enviado, te responderemos lo antes posible!. Se redireccionará la página automaticamente al presionar ACEPTAR");
  };


  return (
    <div className="bg-black">

        <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 100  }}
         animate={controls}
         className="w-full min-h-screen h-full lg:py-28 xl:p-28 md:p-12 p-10 grid items-center justify-center">

            <div className="contenedor-contact h-full">

              <div className="contact-1 bg-[#29F2CD] grid md:justify-start md:items-center lg:px-12 p-4 rounded-xl md:min-h-auto min-h-[350px]">
              
                <div className="w-auto h-auto space-y-4">

                <h1 className="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-hammersmithOne text-white transition-all duration-500 myfilter">
                    Hablemos de tu proyecto
                </h1>
                <p className="xl:text-2xl lg:text-xl text-lg font-unicaone text-black transition-all duration-500 uppercase">
                  Ponte en contacto y te responderémos vía E-mail o Whatsapp<br></br>
                  También puedes comunicarte desde nuestras redes sociales
                </p>

                <div className="flex space-x-4 lg:pt-2 md:justify-start md:items-start justify-center">
                
                <Link href={'https://www.instagram.com/xplendev/?hl=es'}>
                  <RiInstagramFill className="md:h-12 md:w-12 w-8 h-8 text-white hover:text-[#F8368F] transition-all duration-300 cursor-pointer myfilter4"/>
                </Link>
                <Link href={''}>
                  <FaFacebook className="md:h-12 md:w-12 w-8 h-8 text-white hover:text-blue-400 transition-all duration-300 cursor-pointer myfilter4"/>
                </Link>
                <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Me%20gustaría%20conversar%20con%20Xplendev'}>
                  <IoLogoWhatsapp className="md:h-12 md:w-12 w-8 h-8 text-white hover:text-green-400 transition-all duration-300 cursor-pointer myfilter4"/>
                 </Link>
                </div>

                </div>

              </div>

              <div className="contact-2 bg-white rounded-xl grid lg:justify-center lg:items-center md:justify-end md:items-center lg:p-0 md:p-12 p-4 md:max-h-[auto] justify-center items-center md:pt-0 pt-[4vh]">

              <form action="https://formsubmit.co/ca48646714845b36c95f666f850a0954" method="POST" className="">
                 
              <div className="h-auto lg:p-12 space-y-2 w-full lg:ml-[9vh] mt-10 md:mt-0 grid justify-end md:justify-center md:items-center">

              <h1 className="xl:text-2xl lg:text-xl text-lg font-unicaone text-black transition-all duration-500 uppercase no-select">
              Nombre:
              </h1>
              <input type="text" name="nombre" className="border-black border-2 rounded-lg w-full lg:h-[30px] md:text-lg text-md font-hammersmithOne px-2 text-black transition-all duration-500" />

              <h1 className="xl:text-2xl lg:text-xl text-lg font-unicaone text-black transition-all duration-500 uppercase no-select">
              Email o Telefono:
              </h1>
              <input type="text" name="mail" className="border-black border-2 rounded-lg w-full lg:h-[30px] md:text-lg text-md font-hammersmithOne px-2 text-black transition-all duration-500" />

              <h1 className="xl:text-2xl lg:text-xl text-lg font-unicaone text-black transition-all duration-500 uppercase no-select">
              Asunto:
              </h1>
              <input type="text" name="asunto" className="border-black border-2 rounded-lg w-full lg:h-[30px] md:text-lg text-md font-hammersmithOne px-2 text-black transition-all duration-500" />

              <h1 className="xl:text-2xl lg:text-xl text-lg font-unicaone text-black transition-all duration-500 uppercase no-select">
              Mensaje:
              </h1>
              <textarea name="mensaje" className="border-black border-2 rounded-lg w-full lg:h-[150px] md:text-lg text-md font-hammersmithOne px-2 text-black transition-all duration-500" maxLength={300} style={{ resize: 'none' }}/>


 
              <input onClick={handleClick} type='submit' value="Enviar" className="lg:text-xl font-unicaone lg:mx-12 md:mx-auto space-y-4 no-select text-white px-5 py-1 rounded-full border-2 border-[#F8368F] hover:text-[#29F2CD] transition-all hover:scale-105 duration-500 bg-[#F8368F] cursor-pointer">
              </input>

              <input type="hidden" name="_next" value="https://xplendev.com/"/>
              <input type="hidden" name="_captcha" value="false"/>
 

                </div>

              </form>

              </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Contact