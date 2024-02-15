"use client"
import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

type Props = {}

function Footer({}: Props) {
  
  const handleButtonClick = () => {
    const membershipsSection = document.getElementById('inicio');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-t from-[#29F2CD] to-[#29F2CD]">

        <div className="w-full h-auto lg:py-8 xl:px-28 px-4 pt-4">

            <div className="contenedor-footer">

                    <div className="footer-1 p-4 grid md:justify-end justify-center no-select md:border-r-2 md:border-black/50 cursor-default">

                      <Link href={'https://xplendev.com/'}>
                        <motion.img 
                           className="w-[250px] h-[80px] myfilter5 no-select cursor-default"
                           src={"https://i.postimg.cc/nVDKF9WY/xplendev-logo-black.png"}
                           >
                         </motion.img>
                      </Link>

                    </div>
                    
                    <div className="footer-2 p-4 grid md:justify-start items-center justify-center">
                    
                    <div className="flex space-x-12">

                        <Link href={'/terminos'}>
                        <h1 className="xl:text-2xl lg:text-xl text-lg text-black font-unicaone transition-all duration-300 uppercase no-select cursor-pointer hover:text-white">Terminos</h1>
                        </Link>

                        <Link href={'/creditos'}>
                        <h1 className="xl:text-2xl lg:text-xl text-lg text-black font-unicaone transition-all duration-300 uppercase no-select cursor-pointer hover:text-white">Creditos</h1>
                        </Link>

                    </div>

                  
                      <div className="flex">
                        <Link href={'https://portafolioluisrivera.vercel.app/'}>
                      <h1 className="xl:text-2xl lg:text-xl text-lg text-black font-unicaone transition-all duration-500 uppercase no-select myfilte2 no-select cursor-pointer hover:text-white">© 2023 XplenDev | Code By Luis Rivera Araya</h1>
                      </Link>
                      </div>

                    </div>

                    <div className="footer-3 p-4 ">

                      <div className="flex space-x-2 md:justify-start md:items-start items-center justify-center">

                      <Link href={''}>
                      <FaFacebook className="xl:text-2xl lg:text-xl text-lg text-black font-unicaone transition-all duration-500 uppercase no-select cursor-pointer h-10 w-10 md:w-6 md:h-6"></FaFacebook>
                      </Link>
                      
                      <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola!%20Me%20gustaría%20conversar%20con%20Xplendev'}>
                      <IoLogoWhatsapp className="xl:text-2xl lg:text-xl text-lg text-black font-unicaone transition-all duration-300 uppercase no-select cursor-pointer h-10 w-10 md:w-6 md:h-6"></IoLogoWhatsapp>
                      </Link>

                      <Link href={'https://www.instagram.com/xplendev/?hl=es'}>
                      <RiInstagramFill className="xl:text-2xl lg:text-xl text-lg text-black font-unicaone transition-all duration-300 uppercase no-select cursor-pointer h-10 w-10 md:w-6 md:h-6"></RiInstagramFill>
                      </Link>

                      </div>
                    

                      <div className="pt-3 flex md:justify-start md:items-start items-center justify-center">
                         <h1 className="xl:text-xl lg:text-xl text-lg text-black font-unicaone transition-all duration-500 uppercase myfilte2">
                           xplendev@gmail.com
                         </h1>
                       </div>

                    </div>
            </div>            
        </div>
    </div>
  )
}

export default Footer