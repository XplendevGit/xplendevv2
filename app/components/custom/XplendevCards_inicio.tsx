"use client";
import { motion, useDragControls, PanInfo } from "framer-motion";
import Image from "next/image";

interface XplendevCardsProps {
  project: {
    title: string;
    time: string;
    eth: string;
    image: string;
    link: string;
  };
  position: number;
  activeIndex: number;
  totalProjects: number;
  onDragEnd: (_: any, info: PanInfo) => void;
}

const XplendevCards: React.FC<XplendevCardsProps> = ({
  project,
  position,
  activeIndex,
  totalProjects,
  onDragEnd,
}) => {
  const dragControls = useDragControls();

  const zIndex = position === 0 ? 30 : position === 1 ? 20 : 10;

  const rotation =
    position === 0 ? "0deg" : position === 1 ? "-5deg" : "-10deg";
  const translateX = position === 0 ? 0 : position === 1 ? -40 : -60;
  const translateY = position === 0 ? 0 : position === 1 ? 30 : 40;

  const shadow =
    position === 0
      ? "0px 5px 10px rgba(198, 255, 0, 0.8)" // Sombreado con color #C6FF00
      : "0px 5px 15px rgba(0, 0, 0, 0.4)";

  const borderColor = position === 0 ? "#C6FF00" : "#C6FF00"; // Color del borde

  return (
    <motion.div
      className={`absolute w-[200px] h-[350px] md:w-[280px] md:h-[500px] rounded-2xl overflow-hidden border-[2px] bg-gray-800`}
      style={{
        zIndex,
        boxShadow: shadow,
        borderColor, // Borde dinámico
      }}
      animate={{
        x: translateX,
        y: translateY,
        rotate: rotation,
        scale: position === 0 ? 1 : 0.9,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragControls={dragControls}
      onDragEnd={onDragEnd}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 12px 16px rgba(198, 255, 0, 1)", // Sombreado más fuerte en hover
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        fill
        draggable={false}
      />
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-center">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.time}</p>
        <p className="text-[#C6FF00] text-xs mt-1">{project.eth}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-[#C6FF00] hover:bg-[#A4FF00] text-gray-900 text-sm font-bold py-2 px-4 rounded-lg shadow-lg transition-colors"
        >
          Visitar Sitio
        </a>
      </div>
    </motion.div>
  );
};

export default XplendevCards;
