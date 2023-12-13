// Hero2Button.tsx

import Link from 'next/link';
import React from 'react';

interface Hero2ButtonProps {
  isButtonHovered: boolean;
  onButtonHover: () => void;
  onButtonLeave: () => void;
  isButtonHovered2: boolean;
  isButtonHovered3: boolean;
  isButtonHovered4: boolean;
  // Aquí agrega los tipos de props necesarios para tu componente
}

export const Hero2Button: React.FC<Hero2ButtonProps> = ({
  isButtonHovered,
  onButtonHover,
  onButtonLeave,
  isButtonHovered2,
  isButtonHovered3,
  isButtonHovered4,
}: Hero2ButtonProps) => {
  return (
    <div className="space-y-6 lg:pb-0 md:pb-0 pb-10">

      <div className="md:grid flex md:text-start text-center">

      <h1
        className={` ${
          isButtonHovered
            ? 'text-black xl:text-2xl lg:text-xl md:text-lg text-md font-oreglega transition-all duration-500 no-select'
            : isButtonHovered2
            ? 'xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque transition-all duration-500'
            : isButtonHovered3
            ? 'xl:text-2xl lg:text-xl md:text-lg text-md text-white font-nunito transition-all duration-500'
            : isButtonHovered4
            ? 'xl:text-2xl lg:text-xl md:text-lg text-md font-unicaone text-white transition-all duration-500'
            : 'xl:text-2xl lg:text-xl md:text-lg text-md font-unicaone text-white transition-all duration-500'
        }`}
      >
        ESTOS SON EJEMPLOS DE TEMAS <br /> CADA TAMAÑO, FUENTE Y POSICIÓN DE LOS TEXTOS SON ÚNICOS PARA CADA PROYECTO.
        ENCONTREMOS EL QUE MÁS SE ACOMODE A TU SITIO IDEAL!
      </h1>

      </div>

     <div className="md:grid flex md:justify-start md:items-start justify-center items-center">

     <Link href={'/obras'}>
      <button
        className={` mt-1 ${
          isButtonHovered
            ? 'xl:text-xl lg:text-md text-white bg-[#34B1BF] rounded-xl p-4 font-philosopher transition-all duration-500 hover:scale-105 no-select'
            : isButtonHovered2
            ? 'xl:text-lg lg:text-lg md:text-md text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full transition-all duration-500'
            : isButtonHovered3
            ? 'lg:text-2xl md:text-lg text-white font-nunito p-3 border-2 border-white transition-all duration-500'
            : isButtonHovered4
            ? 'lg:py-3 lg:px-5 p-2 bg-[#385AE0] rounded-md text-white transition-transform duration-500 hover:scale-105'
            : 'lg:text-xl text-lg text-white hover:border-[#F8368F] hover:text-[#F8368F] transition-all hover:scale-105 duration-500 font-unicaone no-select px-4 py-2 rounded-full border-2'
        }`}
      >
        VER TODOS LOS DISEÑOS →
      </button>
      </Link>

     </div>

    </div>
  );
};