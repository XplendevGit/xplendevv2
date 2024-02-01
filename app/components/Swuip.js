/* eslint-disable jsx-a11y/alt-text */
"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import style from '../../app/styles/swiper.module.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App( { onSlideChange, onSwiper }) {
  return (
    <>
      <Swiper
      onSwiper={onSwiper}
       onSlideChange={onSlideChange}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >



        <SwiperSlide className={style.swiperSlide}>
          
          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
            Horizon Property
          </h1>

          <Link href={'https://horizon-property-webpage.vercel.app/'} key={new Date().toISOString()}>
          <img src='https://i.postimg.cc/bJ3S9Vk4/portfoliorespponsive-1.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>
          </Link>

          <div className="flex justify-center items-center md:p-12 p-4">
            <Link href={'https://horizon-property-webpage.vercel.app/'}  key={new Date().toISOString()}>
            <button className="xl:text-lg lg:text-lg md:text-md text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full">
              Ver Esta Web
            </button>
            </Link>

          </div>

        </SwiperSlide>

       
         <SwiperSlide className={style.swiperSlide}>
          
          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
            Portfolio
          </h1>

          <Link href={'https://portafolioluisrivera.vercel.app/'} key={new Date().toISOString()}>
          <img src='https://i.postimg.cc/SKX6PQJV/portfoliorespponsive.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>
          </Link>

          <div className="flex justify-center items-center md:p-12 p-4">
            <Link href={'https://portafolioluisrivera.vercel.app/'}  key={new Date().toISOString()}>
            <button className="xl:text-lg lg:text-lg md:text-md text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full">
              Ver Esta Web
            </button>
            </Link>

          </div>

        </SwiperSlide>
        
        <SwiperSlide className={style.swiperSlide}>

          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
            Gallery Art
          </h1>

          <img src='https://i.postimg.cc/kMK80hwN/gallery-icon.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>

          <div className="flex justify-center items-center md:p-12 p-4">

            <button className="xl:text-lg lg:text-lg md:text-md text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full">
              Proximamente...
            </button>


          </div>
         

        </SwiperSlide>

        <SwiperSlide className={style.swiperSlide}>

          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
            Elegant Cannine
          </h1>

          <Link href={'https://elegant-cannine.vercel.app/'} key={new Date().toISOString()}>
          <img src='https://i.postimg.cc/MKzSDhgn/Elegantcannine-icon.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>

          </Link>
          <div className="flex justify-center items-center md:p-12 p-4">
            <Link href={'https://elegant-cannine.vercel.app/'}  key={new Date().toISOString()}>
            <button className="xl:text-lg lg:text-lg md:text-md text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full">
              Ver Esta Web
            </button>
            </Link>

          </div>

        </SwiperSlide>


      </Swiper>
    </>
  );
}
