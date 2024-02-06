/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

// estilos necesarios
import 'swiper/css'; // Estilo básico de Swiper
import 'swiper/css/navigation'; // Estilos para Navigation
import 'swiper/css/pagination'; // Estilos para Pagination


import style from '../../app/styles/swiper-Membership.module.css'
import styleRender from '../../app/styles/swiper-Membership-renderize.module.css'
import styleRenderMobil from '../../app/styles/swiper-Membership-renderize-mobil.module.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Importamos nuestros React Icons
import { HiOutlineCheck } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

export default function App( {  }) {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
               // Configura los breakpoints
        breakpoints={{
        // Cuando el ancho de la ventana es >= 320px (móvil)
        320: {
          slidesPerView: 1,
        },
        // Cuando el ancho de la ventana es >= 768px (tablet)
        768: {
          slidesPerView: 2,
        },
        // Cuando el ancho de la ventana es >= 769px (escritorio)
        769: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
      >



        <SwiperSlide className={`w-full h-full ${styleRender.swiperSlidereder}`}>

          <div className="w-full h-full flex flex-col py-1 text-center">

            <div className="w-full h-[149px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               compa
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Diseño Personalizado
               </h1>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
              <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Diseño Responsivo
               </h1>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
              <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Dominio .cl/com
               </h1>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Hosting/Alojamiento Web
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Administrador Sitewizard CMS
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Carrito de Compas
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Mantencion/Soporte
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               compa
            </div>
            
          </div>
          

        </SwiperSlide>

       
        <SwiperSlide className={`w-full h-full ${styleRender.swiperSlidereder}`}>

          <div className="w-full h-full flex flex-col py-1 text-center">

            <div className="w-full h-[149px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                 <button className="border-[2px] border-black rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 uppercase no-select">
                    Sitio Estandar
                 </button>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Gratis x 1 año
               </h1>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Gratis x 1 año
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <CgClose className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-red-400 transition-all duration-500 h-12 w-12">
               </CgClose>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <CgClose className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-red-400 transition-all duration-500 h-12 w-12">
               </CgClose>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 1 mes
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               compa
            </div>
            
          </div>
          

        </SwiperSlide>
        
        <SwiperSlide className={`w-full h-full ${styleRender.swiperSlidereder}`}>

          <div className="w-full h-full flex flex-col py-1 text-center">

            <div className="w-full h-[149px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                 <button className="border-[2px] border-black rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 uppercase no-select">
                    Sitio Administrable
                 </button>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Gratis x 1 año
               </h1>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Gratis x 1 año
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <CgClose className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-red-400 transition-all duration-500 h-12 w-12">
               </CgClose>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 1 mes
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               compa
            </div>
            
          </div>
          

        </SwiperSlide>

        <SwiperSlide className={`w-full h-full ${styleRender.swiperSlidereder}`}>

          <div className="w-full h-full flex flex-col py-1 text-center">

            <div className="w-full h-[149px] bg-[#29F2CD] border-[1px] border-black/20 flex justify-center items-center">
                  <button className="border-[2px] border-white rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-white transition-all duration-500 uppercase no-select myfilter3">
                        E-Commerce
                   </button>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Gratis x 1 año
               </h1>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Gratis x 1 año
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 1 mes
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               compa
            </div>
            
          </div>
          

        </SwiperSlide>









          <SwiperSlide className={`w-full h-full ${styleRenderMobil.swiperSlidereder}`}>

          <div className="w-full h-full flex flex-col py-1 text-center">

            <div className="w-full h-[149px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                 <button className="border-[2px] border-black rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-black transition-all duration-500 uppercase no-select">
                    Sitio Estandar
                 </button>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-9 w-9"></HiOutlineCheck>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <HiOutlineCheck className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-[#29F2CD] transition-all duration-500 h-12 w-12"></HiOutlineCheck>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Gratis x 1 año
               </h1>
            </div>

            
            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 Gratis x 1 año
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <CgClose className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-red-400 transition-all duration-500 h-12 w-12">
               </CgClose>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               <CgClose className="xl:text-2xl lg:text-xl md:text-lg text-md font-hammersmithOne text-red-400 transition-all duration-500 h-12 w-12">
               </CgClose>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
                <h1 className="xl:text-xl lg:text-xl text-md font-unicaone text-black transition-all duration-500 uppercase">
                 1 mes
               </h1>
            </div>

            <div className="w-full h-[74.5px] bg-white border-[1px] border-black/20 flex justify-center items-center">
               compa
            </div>
            
          </div>
          

        </SwiperSlide>




      </Swiper>
    </>
  );
}
