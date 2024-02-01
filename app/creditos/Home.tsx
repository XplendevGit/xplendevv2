import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="bg-black">

        <div className="w-full h-screen lg:py-28 xl:p-28 md:p-12 p-10">

            <div className="contenedor-creditos">

                   <div className="creditos-1 space-y-8">

                       <div className="grid justify-center items-center">
                       <h1 className=" font-audiowide xl:text-7xl lg:text-5xl md:text-2xl text-xl text-[#29F2CD] uppercase">
                            Creditos
                          </h1>
                       </div>

                       <div className="grid justify-center items-center">
                       <h1 className="lg:text-xl md:text-lg text-lg  uppercase font-unicaone text-[#F8368F]">Home Imagen por: <span className='text-white xl:text-2xl md:text-xl text-md'>Foto de <a href="https://unsplash.com/es/@alesnesetril?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ales Nesetril</a> en <a href="https://unsplash.com/es/fotos/computadora-portatil-gris-y-negra-en-la-superficie-Im7lZjxeLhg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </span></h1>
                       </div>

                       <div className="flex justify-center items-center space-x-4">
                       <h1 className="lg:text-xl md:text-lg text-lg  uppercase font-unicaone text-[#F8368F]">Design Imagen 1 por: <span className='text-white xl:text-2xl md:text-xl text-md'>Foto de <a href="https://www.freepik.com/free-ai-image/3d-smartphone-device-with-map-gps-technology_43909386.htm#fromView=search&term=responsive&page=1&position=39&track=ais_ai_generated&regularType=ai">freepik</a>
                    </span></h1>

                            <h1 className="text-white">-</h1>

                            <h1 className="lg:text-xl md:text-lg text-lg  uppercase font-unicaone text-[#F8368F]">Design Imagen 2 por: <span className='text-white xl:text-2xl md:text-xl text-md'>Foto de <a href="https://www.freepik.com/free-ai-image/aesthetic-background-with-greek-bust_59772934.htm#fromView=search&term=visual+grece&page=2&position=2&track=ais_ai_generated&regularType=ai">freepik</a>
                    </span></h1>

                    <h1 className="text-white">-</h1>


                    <h1 className="lg:text-xl md:text-lg text-lg  uppercase font-unicaone text-[#F8368F]">Design Imagen 3 por: <span className='text-white xl:text-2xl md:text-xl text-md'>Foto de <a href="https://www.freepik.com/free-ai-image/modern-monitor-elegant-table_59774635.htm#query=web%20page%20admin&position=15&from_view=search&track=ais_ai_generated&uuid=735f9c1a-3d52-4c2d-abed-24e1d4aef97a">Image By freepik</a>
                    </span></h1>

                       </div>                         
                   </div>
            </div>

        </div>
        
    </div>
  )
}

export default Home