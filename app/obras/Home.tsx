"use client"
import React, { useEffect, useState } from 'react'
import Swip from '../components/Swuip'
import { AnimatePresence, motion } from 'framer-motion';

const projectsBackgrounds = [
  'https://i.postimg.cc/P5zVyqtm/Screenshot-property.png',
  'https://i.postimg.cc/0QHSzr0J/portfolio-mainimgbg.png',
  'https://i.postimg.cc/bvYFtgt2/Gallery-Web-Page.png',
  'https://i.postimg.cc/8PtvCbNY/elegant-proyect.png'
  
  // ... Agrega todas las URL de las imágenes de fondo de tus proyectos aquí
];

const projectsBackgroundsMobile = [
  'https://i.postimg.cc/bJ3S9Vk4/portfoliorespponsive-1.png',
  'https://i.postimg.cc/SKX6PQJV/portfoliorespponsive.png',
  'https://i.postimg.cc/kMK80hwN/gallery-icon.png',
  'https://i.postimg.cc/MKzSDhgn/Elegantcannine-icon.png'
  
  // ... otras URLs de imágenes para móviles
];

type Props = {}

function Home({}: Props) {

const [currentBackground, setCurrentBackground] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    const initialBackground = mobile
      ? projectsBackgroundsMobile[0]
      : projectsBackgrounds[0];

    setCurrentBackground(initialBackground);

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      const newIndex = mobile ? 0 : 1;
      setCurrentBackground(mobile ? projectsBackgroundsMobile[newIndex] : projectsBackgrounds[newIndex]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSlideChange = (swiper: any) => {
    setCurrentBackground(isMobile ? projectsBackgroundsMobile[swiper.activeIndex] : projectsBackgrounds[swiper.activeIndex]);
  };

  const updateBackground = (swiper: any) => {
    const index = isMobile ? swiper.activeIndex : swiper.activeIndex % projectsBackgrounds.length;
    setCurrentBackground(isMobile ? projectsBackgroundsMobile[index] : projectsBackgrounds[index]);
  };

  return (

    
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-auto transition-all duration-300"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${currentBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="xl:px-24 lg:px-24 md:px-24 transition-all duration-300">
          <div className="flex justify-center lg:p-24 p-8">
            <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-2xl text-[#EA1E63] font-oswald ">
              Conoce mis Aplicaciones Web
            </h1>
          </div>
        </div>

        <div className="w-full min-h-screen h-full">
          <Swip onSlideChange={handleSlideChange} onSwiper={updateBackground} />

        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Home