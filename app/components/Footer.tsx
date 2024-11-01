"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

type Props = {};

const Footer = (props: Props) => {

  const handleButtonClickLogo = () => {
    const Section = document.getElementById('inicio');
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <footer className="bg-[#141627] py-10 px-6 text-gray-400">
      {/* Contenedor Principal */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        
        {/* Logo y nombre */}
        <div className="flex items-center space-x-4 justify-center">
          <Image
            onClick={handleButtonClickLogo}
            src="https://i.postimg.cc/V6PqVmNk/xplendev-newlogotransparent.png" // ruta de Logo
            alt="Logo"
            className="w-[150px] h-auto"
            width={150}
            height={450}
          />
        </div>
        
        {/* Menú de enlaces */}
        <div className="flex justify-center md:space-x-8 space-x-4">
          <Link href="/servicios" legacyBehavior>
            <a className="hover:text-white transition-all duration-300">Nuestros Servicios</a>
          </Link>
          <Link href="/resources" legacyBehavior>
            <a className="hover:text-white transition-all duration-300">APP</a>
          </Link>
          <Link href="/acercade" legacyBehavior>
            <a className="hover:text-white transition-all duration-300">Acerca de</a>
          </Link>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex justify-center  space-x-6">
          <Link href="https://api.whatsapp.com/send?phone=56940898950&text=Hola%20Xplendev!%20Me%20gustaria%20contactar%20con%20ustedes" legacyBehavior>
            <a target="_blank">
              <IoLogoWhatsapp className="w-8 h-8 text-white hover:text-[#46C254] transition-all duration-300"></IoLogoWhatsapp>
            </a>
          </Link>
          <Link href="https://www.instagram.com/xplendev" legacyBehavior>
            <a target="_blank">
              <RiInstagramFill className="w-8 h-8 text-white hover:text-[#CA437D] transition-all duration-300"></RiInstagramFill>
            </a>
          </Link>
        </div>
      </div>

      {/* Línea divisora */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Xplendev By Luis Rivera. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
