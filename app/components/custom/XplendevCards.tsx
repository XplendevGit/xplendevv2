// components/XplendevCards.tsx
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
      ? "0px 10px 20px rgba(255, 105, 180, 0.6)"
      : "0px 5px 15px rgba(0, 0, 0, 0.4)";

  return (
    <motion.div
      className={`absolute w-[200px] h-[350px] md:w-[280px] md:h-[500px] rounded-2xl overflow-hidden border-[2px] bg-gray-800 ${
        position === 0
          ? "border-pink-500"
          : position === 1
          ? "border-pink-500"
          : "border-pink-500"
      }`}
      style={{
        zIndex,
        boxShadow: shadow,
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
        boxShadow: "0px 12px 16px rgba(255, 105, 180, 0.8)",
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-full object-top"
        fill
        draggable={false}
      />
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-center bg-[#233A54]/95 border-t-pink-500 border-t-2">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.time}</p>
        <p className="text-pink-400 text-xs mt-1">{project.eth}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg"
        >
          Visitar Sitio
        </a>
      </div>
    </motion.div>
  );
};

export default XplendevCards;
