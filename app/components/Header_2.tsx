'use client';
import  { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion'

interface SeccionData {
  texto1: string;
  texto2: string;
  texto3: string;
  texto4: string;
}

type Props = {}

function Header_2({}: Props) {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [tamañoNav, setTamañoNav] = useState("w-full h-[115px] fixed left-0 top-0 z-10 ease-in duration-300")
    const [seccion, setSeccion] = useState<SeccionData | null>(null);
    const [tamañoLogo, setTamañoLogo] = useState("w-[240px] h-[70px] no-select hover:scale-105 ease-in transition-all duration-300 cursor-default")
    const [tamañoTexto, setTamañoTexto] = useState("inline-block hover:scale-105 border-[#29F2CD] hover:text-[#29F2CD] lg:text-lg xl:text-xl text-xs pt-4 font-medium uppercase leading-normal text-primary transition-all duration-300 ease-in hover:bg-opacity-[2%]  hover:border-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 font-unicaone")


    const handleNav = () => {
        setNav(!nav);
};

useEffect(() => {
     const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor('#010101')
            setTextColor('#F7F7F7')
            setTamañoNav("w-full h-[62px] md:h-[82px] max-w-auto fixed left-0 top-0 z-10 shadow-xl ease-in duration-300 shadow-[#29F2CD]/30 shadow-lg")
            setTamañoLogo("w-[200px] h-[50px] no-select hover:scale-105 transition-all ease-in duration-300 cursor-default")
            setTamañoTexto("inline-block hover:scale-105 border-[#29F2CD] hover:text-[#29F2CD] lg:text-lg xl:text-xl text-xs pt-2 font-medium uppercase leading-normal text-primary transition-all duration-300 ease-in hover:bg-opacity-[2%] hover:border-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 font-unicaone")
        } else {
            setColor('transparent')
            setTextColor('#ffffff')
            setTamañoNav("w-full h-[115px] fixed left-0 top-0 z-10 ease-in duration-300")
            setTamañoLogo("w-[240px] h-[70px] no-select hover:scale-10 ease-in5 transition-all duration-300 cursor-default")
            setTamañoTexto("inline-block hover:scale-105 border-[#29F2CD] hover:text-[#29F2CD] lg:text-lg xl:text-xl text-xs pt-4 font-medium uppercase leading-normal text-primary transition-all duration-300 ease-in hover:bg-opacity-[2%]  hover:border-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 font-unicaone")
        }
     };
     window.addEventListener('scroll', changeColor);
}, []);


  return (
    <motion.div 
    initial={{ opacity: 0, x: -350 }}
    animate={{ opacity: 1.2, x: 0 }}
    transition={{ duration: 0.5, ease: [0.6, 0.05, 0.5, 0.95] }} // Duración de la animación
    style={{backgroundColor: `${color}` }}
     className={tamañoNav}
     >
        <div className="max-w-[1240px] no-select mx-auto h-auto w-auto flex justify-between items-center p-4 text-white">
            <Link href="https://xplendev.com/" className="no-select cursor-pointer">
            <motion.img 
              className={tamañoLogo + "cursor-pointer"}
              src="https://i.postimg.cc/V6PqVmNk/xplendev-newlogotransparent.png"
              >
              </motion.img>
            </Link>
           
        </div>
    </motion.div>
  )
}

export default Header_2