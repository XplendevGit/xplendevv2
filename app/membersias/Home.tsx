"use client"
import React, { useEffect, useState } from 'react'
import Swiper from './swiper-Membership'
import Style from './home.module.css'
import Link from 'next/link'

type Props = {}

function Home({}: Props) {
  return (
    <div className="flex w-full min-h-screen h-auto bg-black">

        <div className="w-full h-full lg:py-28 xl:p-28 md:p-12 p-10 flex flex-col">

            <div className="w-full h-auto p-12 flex flex-col justify-center items-center space-y-2">

                 <h1 className="text-white xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-hammersmithOne transition-all duration-500 text-center">
                   Conoce nuestros <span className="text-[#29F2CD]">Planes</span>
                 </h1>

                 <p className="xl:text-2xl lg:text-xl text-lg text-center font-unicaone text-[#29F2CD] transition-all duration-500 uppercase">
                  
                </p>

                <Link href={'https://wa.link/pljze6'}>
                   <button className="border-[2px] border-[#F8368F] rounded-2xl px-3 xl:text-lg lg:text-xl md:text-lg text-md font-hammersmithOne text-[#F8368F] transition-all duration-500 uppercase no-select">
                   <span className="text-[#F8368F]">Haz click </span> para contratar
                   </button>
                </Link>


            </div>

            <div className="w-full h-auto bg-[#29F2CD]">

              <Swiper></Swiper>
                
            </div>

        </div>
        
    </div>
  )
}

export default Home