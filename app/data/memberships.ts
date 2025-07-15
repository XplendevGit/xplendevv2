// data/memberships.ts
export interface Benefit {
  icon: string;
  label: string;
}

export interface Membership {
  name: string;
  description: string;
  price: string;
  color: string;
  borderColor: string;
  hoverColor: string;
  href: string;
  benefits: Benefit[];
  isPopular?: boolean;
  logo?: string;
  paymentLink?: string;
}

export const memberships: Membership[] = [
  {
    isPopular: false,
    name: "Sitio Inicial",
    description: "Para uso profesional y nuevos sitios administrables desde cero.",
    price: "$229.990",
    color: "#C6FF00",
    borderColor: "#C6FF00",
    hoverColor: "#C6FF00",
    logo: "/images/logos/sitio_inicial_icons.png",
    href: "/membershipbasic",
    paymentLink: "https://mpago.la/2s4FbUm",
    benefits: [
      { icon: "https://img.icons8.com/fluent/48/000000/monitor.png", label: "Landing Page / Portafolio Web" },
      { icon: "https://img.icons8.com/fluent/48/000000/administrative-tools.png", label: "Sitio Administrable" },
      { icon: "https://img.icons8.com/color/48/000000/domain.png", label: "Dominio.com Gratis por 1 año" },
      { icon: "https://img.icons8.com/color/48/000000/server.png", label: "Hosting (3GB SSD) Gratis por 1 año" },
      { icon: "https://img.icons8.com/color/48/000000/email.png", label: "Correos Corporativos Ilimitados" },
      { icon: "https://img.icons8.com/fluent/48/000000/customer-support.png", label: "Soporte Especializado por 10 Días" }
    ]
  },
  {
    isPopular: true,
    name: "Tienda Online",
    description: "Perfecto para profesionales y empresas que necesitan ventas en sitios avanzados.",
    price: "$339.990",
    color: "#D43EFF",
    borderColor: "#D43EFF",
    hoverColor: "#D43EFF",
    logo: "/images/logos/tienda_online_icons.png",
    href: "/membershippremium",
    paymentLink: "https://mpago.la/1nmRYiC",
    benefits: [
      { icon: "https://img.icons8.com/fluent/48/000000/monitor.png", label: "Tienda E-commerce" },
      { icon: "https://img.icons8.com/fluent/48/000000/administrative-tools.png", label: "Sitio Administrable" },
      { icon: "https://img.icons8.com/color/48/000000/domain.png", label: "Dominio.com Gratis por 1 año" },
      { icon: "https://img.icons8.com/color/48/000000/server.png", label: "Hosting (10GB SSD) Gratis por 1 año" },
      { icon: "https://img.icons8.com/color/48/000000/email.png", label: "Correos Corporativos Ilimitados" },
      { icon: "https://img.icons8.com/color/48/000000/shopping-cart-loaded.png", label: "Tienda y Carrito de Compras" },
      { icon: "https://img.icons8.com/fluent/48/000000/customer-support.png", label: "Soporte Especializado por 1 mes" }
    ]
  },
    {
    isPopular: true,
    name: "E-learning Pro",
    description: "Perfecto para empresas que necesitan sitios de cursos online avanzados.",
    price: "$439.990",
    color: "#00D4FF",
    borderColor: "#00D4FF",
    hoverColor: "#00D4FF",
    logo: "/images/logos/e_learning_icon.png",
    href: "/membershipelearning",
    paymentLink: "https://mpago.la/1Vumj12",
    benefits: [
      { icon: "https://img.icons8.com/fluent/48/000000/monitor.png", label: "Académia E-learning" },
      { icon: "https://img.icons8.com/fluent/48/000000/administrative-tools.png", label: "Sitio Administrable" },
      { icon: "https://img.icons8.com/color/48/000000/domain.png", label: "Dominio.com Gratis por 1 año" },
      { icon: "https://img.icons8.com/color/48/000000/server.png", label: "Hosting (10GB SSD) Gratis por 1 año" },
      { icon: "https://img.icons8.com/color/48/000000/email.png", label: "Correos Corporativos Ilimitados" },
      { icon: "https://img.icons8.com/color/48/000000/shopping-cart-loaded.png", label: "Tienda y Carrito de Compras" },
      { icon: "/images/Hero/educacion.png", label: "Academia Online" },
      { icon: "https://img.icons8.com/fluent/48/000000/customer-support.png", label: "Soporte Especializado por 1 mes" }
    ]
  },
  {
    isPopular: false,
    name: "Enterprise App",
    description: "Perfecto para toda empresa que necesite una aplicación móvil profesional personalizada.",
    price: "$829.990",
    color: "#32DC7E",
    borderColor: "#32DC7E",
    hoverColor: "#32DC7E",
    logo: "/images/logos/enterprisse_app_icon.png",
    href: "/landingaplicaciones",
    paymentLink: "https://mpago.la/1VFuHfB",
    benefits: [
      { icon: "https://img.icons8.com/fluent/48/000000/android-os.png", label: "App Personalizada Android" },
      { icon: "https://img.icons8.com/ios-filled/50/00BFFF/cloud.png", label: "Despliegue Completo" },
      { icon: "https://img.icons8.com/color/48/000000/google-play.png", label: "Descargable desde Google Play" },
      { icon: "https://img.icons8.com/fluent/48/000000/customer-support.png", label: "Soporte Especializado" }
    ]
  },
  {
    isPopular: false,
    name: "ChatBot AI Pro",
    description: "Automatiza la atención de tu negocio 27/7 con un ChatBot AI inteligente completamente personalizado para Web o WhatsApp.",
    price: "$375.990",
    color: "#FF6F00",
    borderColor: "#FF6F00",
    hoverColor: "#FF6F00",
    logo: "/images/logos/chatbot_ai_icon.png",
    href: "/landingchatbot",
    paymentLink: "https://mpago.la/1HX5XeY",
    benefits: [
      { icon: "https://img.icons8.com/fluency/48/000000/chatbot.png", label: "ChatBot AI para Web o WhatsApp" },
      { icon: "https://img.icons8.com/color/48/000000/google-calendar--v1.png", label: "Integración con Google Calendar y Gmail" },
      { icon: "https://img.icons8.com/color/48/000000/flow-chart.png", label: "Flujos conversacionales (hasta 10 escenarios)" },
      { icon: "https://img.icons8.com/color/48/000000/bar-chart.png", label: "Reportes básicos de interacciones" },
      { icon: "https://img.icons8.com/color/48/000000/stopwatch.png", label: "Hasta 1.000 mensajes/mes (Make/Botpress)" }
    ]
  }
];
