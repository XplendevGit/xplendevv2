"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Inicio = (props: Props) => {

    const handleButtonClick = () => {
        const membershipsSection = document.getElementById('memberships');
        if (membershipsSection) {
          membershipsSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className="min-h-screen h-auto max-w-screen bg-img bg-cover border-b-[#29F2CD]/30 border-b-2 shadow-lg">

        <div className="w-full min-h-screen h-full bg-black/60 md:p-24 p-20 flex justify-center items-center">

            <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.5, 0.95] }} // Duración de la animación
            className="contenedor-inicio mx-auto grid items-center lg:items-start max-w-[1240px] max-h-screen h-full"
             >

                <div className="inicio-1">
                    <div className="xl:p-24 xl:py-[150px] lg:p-12 lg:space-y-5 md:space-y-4 space-y-1 no-select flex flex-col justify-center items-center text-center md:text-start">

                    <h1 className="font-audiowide xl:text-7xl lg:text-5xl md:text-4xl text-3xl text-[#29F2CD]">Arquitectos de la  <br></br></h1>
                    <h2 className="font-audiowide xl:text-7xl lg:text-5xl md:text-4xl text-3xl text-[#F8368F]">Experiencia Digital</h2>

                    <div className="flex pt-6">
                    <button 
                className="lg:text-xl font-unicaone space-y-4 no-select text-white px-4 py-2 rounded-full border-2 border-[#F8368F] hover:text-[#F8368F] transition-all hover:scale-105 duration-200 ease-in"
                onClick={handleButtonClick}>OBTENER SITIO WEB → 
                </button>
                    </div>


                    

                    </div>
                </div>

                <div className="inicio-3 justify-center items-center grid">

                  <div className="w-full h-auto justify-center items-center text-center md:text-start">

                    <h1 className="lg:text-5xl md:text-3xl text-2xl font-unicaone text-[#F8368F]">TU SITIO WEB</h1>

                    <h2 className="lg:text-5xl md:text-3xl text-2xl font-unicaone text-[#29F2CD]">ADMINISTRABLE</h2>

                  </div>
                    

                    <div className="space-y-4 w-full h-auto justify-center items-center text-center md:text-start">
                    <p className="pt-4 xl:text-2xl lg:text-xl text-sm text-white font-mojormono">Creamos tu web Profesional<br></br>Administrable desde cualquier dispositivo</p>
                </div>

                </div>

            </motion.div>

        </div>
        
    </div>
  )
}

export default Inicio