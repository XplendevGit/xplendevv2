"use client"
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from'react'
import { Hero2Button } from '../components/Hero/Hero2Button';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type Props = {};

const Hero = (props: Props) => {

  const imagenElegant = "https://i.postimg.cc/CKJ33X1L/Elegant-Cannine-Design.png"
  const imagePortfolio = 'https://i.postimg.cc/SKX6PQJV/portfoliorespponsive.png'
  const imageGallery = "https://i.postimg.cc/Kzk0trPG/gallery-icon.png"
  const imageProperty = 'https://i.postimg.cc/bJ3S9Vk4/portfoliorespponsive-1.png'


  const imagenElegantMobile = "https://i.postimg.cc/J4S8h4LN/elegant-mobile1.png"
  const imagePortfolioMobile = "https://i.postimg.cc/wjHCMWvV/portfolio-mobile1.png"
  const imageGalleryMobile = "https://i.postimg.cc/XvF0f0fr/page-2.png"
  const imagePropertyMobile = "https://i.postimg.cc/jSNbn0xG/property-mobile1.png"


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

  const [isHovered4, setHovered4] = useState(false);
  const [isButtonHovered4, setButtonHovered4] = useState(false);

  const handleHover4 = () => {
    setHovered4(true);
    setButtonHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setHovered4(false);
    setButtonHovered4(false);
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
    <div 
    className={` grid ${
      isButtonHovered ?
       ' bg-[#F8D571] transition-all ease-in duration-200' 
       : isButtonHovered2
       ? ' bg-white transition-all ease-in duration-200'
       : isButtonHovered3
       ? ' bg-black transition-all ease-in duration-200'
       : isButtonHovered4
       ? ' bg-[#F5F5F5] transition-all ease-in duration-200'
       : ' bg-gradient-to-t from-black to-[#29F2CD] transition-all ease-in duration-200'
    }`}
    >
      <div className="w-full h-full lg:py-28 xl:p-28 md:p-12 p-10">
        <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 100 }}
         animate={controls}
         className="contenedor-hero h-full md:w-full w-[150px]  md:pt-0 pt-14"
         >
          <div className="hero-1 no-select">
            <div className="space-y-2 md:grid flex md:justify-start md:items-start justify-center items-center">
              <div className="md:grid block md:justify-start md:items-start justify-center items-center text-center md:text-start">
              <h1 className="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-hammersmithOne text-white myfilter2">Así son nuestros</h1>
              <h1 className="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-hammersmithOne text-white myfilter2">Sitios Web</h1>
              
              <div className="md:grid block md:justify-start md:items-start justify-center items-center text-center md:text-start">
              <h1 
                  className={`${
                    isButtonHovered ?
                     'text-[#33B1BF] xl:text-7xl lg:text-5xl md:text-3xl text-3xl font-philosopher transition-all ease-in duration-200' 
                     : isButtonHovered2
                     ? 'xl:text-5xl lg:text-4xl md:text-2xl text-lg text-[#EA1E63] font-oswald transition-all ease-in duration-200'
                     : isButtonHovered3
                     ? ' text-white xl:text-7xl lg:text-5xl md:text-3xl text-3xl font-cinzeldecorative ease-in transition-all duration-200'
                     : isButtonHovered4
                     ? ' text-[#385AE0] xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-notoserif transition-all ease-in duration-200'
                     : 'text-[#F8368F] xl:text-6xl lg:text-4xl md:text-3xl text-3xl font-audiowide transition-all ease-in duration-200 myfilter5'
                  }`}>
                Seleccionalos
              </h1>
              </div>
              </div>
            </div>
          </div>

          <div className="hero-2 no-select">
            <Hero2Button
              isButtonHovered={isButtonHovered}
              onButtonHover={() => setButtonHovered(true)}
              onButtonLeave={() => setButtonHovered(false)}
              isButtonHovered2={isButtonHovered2}
              isButtonHovered3={isButtonHovered3}
              isButtonHovered4={isButtonHovered4}
            />
          </div>

          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            className="hero-3 hover:scale-105 md:hover:animate-none hover:animate-pulse transition-all ease-in duration-300 relative xl:max-h-[440px] xl:min-h-[480px] xl:max-w-[340px] xl:min-w-[280px] lg:max-h-[280px] lg:min-h-[240px] lg:min-w-[160px] lg:max-w-[160px] md:border-[4px] md:min-h-[230px] md:max-h-[240px] md:max-w-auto md:rounded-sm md:border-white md:w-auto md:h-auto h-32 w-16 rounded-lg border-2 border-white md:hover:border-white hover:border-0"
          >


            <picture>
              <source media="(max-width: 425px)" srcSet={imagenElegantMobile} />
               <source media="(min-width: 426px)" srcSet={imagenElegant} />
               <Image className="md:rounded-sm md:hover:rounded-none rounded-lg hover:scale-105 transition-all ease-in duration-300" src={imagenElegant} alt={'elegant'} layout={'fill'} objectFit={'cover'}>
                </Image>
               </picture>


          </div>

          <div 
          onMouseEnter={handleHover2}
          onMouseLeave={handleMouseLeave2}
          style={{ backgroundColor: isHovered2 ? 'red' : 'gray' }}
          className="hero-4 hover:scale-105 ease-in md:hover:animate-none hover:animate-pulse transition-all duration-300 relative xl:max-h-[440px] xl:min-h-[480px] xl:max-w-[340px] xl:min-w-[280px] lg:max-h-[280px] lg:min-h-[240px] lg:min-w-[160px] lg:max-w-[160px] md:border-[4px] md:min-h-[230px] md:max-h-[240px] md:max-w-auto md:rounded-sm md:border-white md:w-auto md:h-auto h-32 w-16 rounded-lg border-2 border-white md:hover:border-white hover:border-0">
            
            <picture>
              <source media="(max-width: 425px)" srcSet={imagePortfolioMobile} />
               <source media="(min-width: 426px)" srcSet={imagePortfolio} />
               <Image className="md:rounded-sm md:hover:rounded-none rounded-lg hover:scale-105 transition-all ease-in duration-300" src={imagePortfolio} alt={'portfolio'} layout={'fill'} objectFit={'cover'}>
                </Image>
               </picture>
            
          </div>

          <div
          onMouseEnter={handleHover3}
          onMouseLeave={handleMouseLeave3}
          className="hero-5 hover:scale-105 md:hover:animate-none hover:animate-pulse transition-all ease-in duration-300 relative xl:max-h-[440px] xl:min-h-[480px] xl:max-w-[340px] xl:min-w-[280px] lg:max-h-[280px] lg:min-h-[240px] lg:min-w-[160px] lg:max-w-[160px] md:border-[4px] md:min-h-[230px] md:max-h-[240px] md:max-w-auto md:rounded-sm md:border-white md:w-auto md:h-auto h-32 w-16 rounded-lg border-2 border-white md:hover:border-white hover:border-0">
            
            <picture>
              <source media="(max-width: 425px)" srcSet={imageGalleryMobile} />
               <source media="(min-width: 426px)" srcSet={imageGallery} />
               <Image className="md:rounded-sm md:hover:rounded-none rounded-lg hover:scale-105 transition-all ease-in duration-300" src={imageGallery} alt={'gallery'} layout={'fill'} objectFit={'cover'}>
                </Image>
               </picture>
          </div>

          <div 
          onMouseEnter={handleHover4}
          onMouseLeave={handleMouseLeave4}
          style={{ backgroundColor: isHovered4 ? 'orange' : 'gray' }}
          className="hero-6 hover:scale-105 md:hover:animate-none hover:animate-pulse transition-all ease-in duration-300 relative xl:max-h-[440px] xl:min-h-[480px] xl:max-w-[340px] xl:min-w-[280px] lg:max-h-[280px] lg:min-h-[240px] lg:min-w-[160px] lg:max-w-[160px] md:border-[4px] md:min-h-[230px] md:max-h-[240px] md:max-w-auto md:rounded-sm md:border-white md:w-auto md:h-auto h-32 w-16 rounded-lg border-2 border-white md:hover:border-white hover:border-0">
            
            <picture>
              <source media="(max-width: 425px)" srcSet={imagePropertyMobile} />
               <source media="(min-width: 426px)" srcSet={imageProperty} />
               <Image className="md:rounded-sm md:hover:rounded-none rounded-lg hover:scale-105 transition-all ease-in duration-300" src={imageProperty} alt={'property'} layout={'fill'} objectFit={'cover'}>
                </Image>
               </picture>

          </div>
        </motion.div>
      </div>
    </div>
  );
};



export default Hero;


