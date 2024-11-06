"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Recommendations = () => {
  const sites = [
    {
      title: "Sitewizard CMS",
      description:
        "Un CMS moderno y a medida, diseñado para desarrolladores y equipos de marketing. Sitewizard CMS ofrece una gestión de contenido eficiente, totalmente personalizable e ideal para su integración en sitios programados.",
      image: "https://i.postimg.cc/ryJwDzqR/sitewizard-demo1.webp",
      link: "https://sitewizardcontentstudio.vercel.app/",
    },
    {
      title: "Teckware.ls",
      description:
        "Especialistas en soporte técnico para equipos gaming, consolas y hardware de alto rendimiento. Ofrecemos soluciones rápidas y efectivas para mantener tus dispositivos en óptimas condiciones y asegurar el mejor rendimiento en cada partida.",
      image: "https://i.postimg.cc/nLTtHS8s/teckware-demo2.webp",
      link: "https://www.instagram.com/teckware.ls/?hl=es",
    },
    {
      title: "Prod. Mvxii",
      description:
        "Prod. Mvxii es un productor profesional de música urbana, especializado en la creación y venta de beats personalizados. Ofrece soluciones musicales de alta calidad para artistas que buscan un sonido único y profesional.",
      image: "https://i.postimg.cc/jdRQfMBq/prodmaxii-demo2.webp",
      link: "https://www.instagram.com/prodmvxii/?hl=es",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="md:text-center text-start mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">
            Sitios <span className="text-pink-500">Recomendados</span>
          </h2>
          <p className="text-lg text-gray-400 lg:text-xl">
            Explora y conoce sitios profesionales para expandir tu eficiencia.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sites.map((site, index) => (
            <motion.div
              key={index}
              className="group bg-[#1e2a3a] rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
              }}
            >
              {/* Card Border Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl"></div>

              <div className="relative h-56 z-20">
                <Image
                  src={site.image}
                  alt={site.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="relative p-6 flex flex-col justify-between flex-grow z-20 bg-[#1e2a3a] rounded-b-xl">
                <h3 className="text-xl font-bold mb-2 text-white">{site.title}</h3>
                <p className="text-gray-400 mb-4">{site.description}</p>
                <motion.a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-lg text-center transition-transform duration-300 transform hover:scale-105"
                  whileHover={{
                    boxShadow: "0 4px 20px rgba(255, 105, 180, 0.8)",
                  }}
                >
                  Visitar Sitio
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
