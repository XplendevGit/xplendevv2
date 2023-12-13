"use client"
import React from 'react'
import Image from 'next/image'
import myImage from '../../public/images/Inicio/1.png'
import Link from 'next/link'
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

        <div className="w-full min-h-screen h-auto bg-black/60 xl:p-24 lg:p-24 md:p-24 py-24 px-14">

            <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.5, 0.95] }} // Duración de la animación
            className="contenedor-inicio mx-auto h-auto w-auto grid justify-between items-center max-w-[1240px]"
             >

                <div className="inicio-1">
                    <div className="lg:px-12 lg:pt-12 md:px-12 lg:space-y-4 md:space-y-2 no-select">

                    <h1 className="font-audiowide xl:text-7xl lg:text-5xl md:text-2xl text-xl text-[#29F2CD]">EL FUTURO DEL<br></br></h1>
                    <h2 className="font-audiowide xl:text-7xl lg:text-5xl md:text-2xl text-xl text-[#F8368F]">DISEÑO WEB</h2>
                    

                    </div>
                </div>
                <div className="inicio-2 flex justify-start mb-auto">
               
                <button 
                className="lg:text-xl font-unicaone lg:mx-12 md:mx-auto space-y-4 no-select text-white px-4 py-2 rounded-full border-2 border-[#F8368F] hover:text-[#F8368F] transition-all hover:scale-105 duration-500"
                onClick={handleButtonClick}>OBTENER DISEÑO WEB → 
                </button>
                    
                </div>
                <div className="inicio-3 justify-end grid">
                    
                <h1 className="lg:text-5xl md:text-2xl text-xl font-unicaone text-[#F8368F]">CONOCE UNA NUEVA</h1>
                    <h2 className="lg:text-5xl md:text-2xl text-xl font-unicaone text-[#29F2CD]">EXPERIENCIA VISUAL</h2>
                    <div className="space-y-4">
                    <p className="pt-4 lg:text-xl text-white font-mojormono">todo lo que PIENSAS<br></br>lo hacemos REALIDAD en tu sitio</p>
                </div>

                </div>

            </motion.div>

        </div>
        
    </div>
  )
}

export default Inicio