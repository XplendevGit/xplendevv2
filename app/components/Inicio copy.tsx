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
    <div className="min-h-screen h-auto min-w-screen bg-img bg-cover border-b-[#29F2CD]/30 border-b-2 shadow-lg">

        <div className="w-full min-h-screen h-auto bg-black/60 xl:p-24 lg:px-24 md:p-24 md:py-0 md:px-0 py-24 px-14">

            <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.5, 0.95] }} // Duración de la animación
            className="contenedor-inicio bg-red-400 mx-auto h-auto w-auto grid justify-between items-center max-w-[1240px]"
             >

                <div className="inicio-1">
                    <div className="lg:px-12 lg:pt-12 md:px-12 lg:space-y-4 md:space-y-2 no-select flex flex-col md:justify-start md:items-start justify-center items-center text-center md:text-start">

                    <h1 className="font-audiowide xl:text-7xl lg:text-5xl md:text-4xl text-3xl text-[#29F2CD]">Arquitectos de la  <br></br></h1>
                    <h2 className="font-audiowide xl:text-7xl lg:text-5xl md:text-4xl text-3xl text-[#F8368F]">Experiencia Digital</h2>
                    

                    </div>
                </div>
                <div className="inicio-2 flex md:justify-start justify-center mb-auto">
               
                <button 
                className="lg:text-xl font-unicaone lg:mx-12 md:mx-auto space-y-4 no-select text-white px-4 py-2 rounded-full border-2 border-[#F8368F] hover:text-[#F8368F] transition-all hover:scale-105 duration-200 ease-in"
                onClick={handleButtonClick}>OBTENER SITIO WEB → 
                </button>
                    
                </div>
                <div className="inicio-3 md:justify-end justify-center items-center grid">

                  <div className="w-full h-auto justify-center items-center text-center md:text-start">

                    <h1 className="lg:text-5xl md:text-3xl text-2xl font-unicaone text-[#F8368F]">TU SITIO WEB</h1>

                    <h2 className="lg:text-5xl md:text-3xl text-2xl font-unicaone text-[#29F2CD]">ADMINISTRABLE</h2>

                  </div>
                    

                    <div className="space-y-4 w-full h-auto justify-center items-center text-center md:text-start">
                    <p className="pt-4 lg:text-3xl text-white font-mojormono">Creamos tu web Profesional<br></br>Administrable desde cualquier dispositivo</p>
                </div>

                </div>

            </motion.div>

        </div>
        
    </div>
  )
}

export default Inicio