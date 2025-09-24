export const projects = [
  {
    id: 1,
    title: "Interactive Maps",
    description:
      "10 mapas interactivos donde se ilustran diferentes ubicaciones y diversidades de Colombia para el Ministerio de Ambiente Colombiano.",
    technologies: [
      {
        id: "html5",
        name: "Html5",
      },
      {
        id: "css3",
        name: "Css3",
      },
      {
        id: "javascript",
        name: "Javascript",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
      },
    ],
    link: "https://github.com/Adiazgomez68/interactive-maps",
    icon: "/images/logos/i-maps.png",
    styles: "bg-white",
  },
  {
    id: 2,
    title: "Hi Beauty Es",
    description:
      "Una aplicación web para ventas de suscripción de la cajita de belleza más vendida de Colombia, ahora en España.",
    technologies: [
      {
        id: "next.js",
        name: "Next.js",
      },
      {
        id: "typescript",
        name: "TypeScript",
      },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
      },
    ],
    link: "https://hibeautybox.es/",
    icon: "/images/logos/hib-es.png",
    styles: "p-1 bg-white",
  },
  {
    id: 3,
    title: "Sistema de gestión de planes institucionales",
    description:
      "Sitema de gestión integrada de planes institucionales para la Universidad de Córdoba.",
    technologies: [
      {
        id: "laravel",
        name: "Laravel",
      },
      {
        id: "php",
        name: "PHP",
      },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
      },
    ],
    link: "https://planesinstitucionales.appsprod.unicordoba.edu.co/",
    icon: "/images/logos/plans.png",
    styles: "object-cover",
  },
  {
    id: 4,
    title: "Schaller Rossi & Partners",
    description:
      "Firma internacional de arquitectura e interiores que ofrece servicios de diseño y construcción 'llave en mano'.",
    technologies: [
      {
        id: "next.js",
        name: "Next.js",
      },
      {
        id: "typescript",
        name: "TypeScript",
      },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
      },
      {
        id: "i18n",
        name: "i18n",
      },
    ],
    link: "https://www.schallerrossi.com/es",
    icon: "/images/logos/sr&p.jpg",
    styles: "p-0",
  },
];

export const otherProjects = [
  {
    id: 1,
    title: "StartupsLab | EDU",
    description:
      "Una plataforma para emprendedores donde encontrarán cursos y talleres para aprender marketing, diseño y emprendimiento.",
    technologies: [
      {
        id: "next.js",
        name: "Next.js",
      },
      {
        id: "react.js",
        name: "React.js",
      },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
      },
    ],
    link: "https://stirring-starburst-f86dd8.netlify.app",
  },
  {
    id: 2,
    title: "Pool landing",
    description: "Una landing page para ofrecer servicios de piscinas.",
    technologies: [
      {
        id: "next.js",
        name: "Next.js",
      },
      {
        id: "react.js",
        name: "React.js",
      },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
      },
    ],
    link: "https://test-landing-mu.vercel.app/",
  },
];

export const experiences = [
  {
    company: "Hi Beauty",
    logo: "/images/logos/hib.png",
    functions: [
      {
        item: "Desarrollo del sitio web para el lanzamiento de Hi Beauty en España.",
      },
      {
        item: "Incorporación de nuevas características clave en el sistema administrativo.",
      },
      {
        item: "Creación de filtros de búsqueda para la tienda online y soporte en la web de ventas por suscripción.",
      },
      {
        item: "Implementación de nuevos métodos de pago.",
      },
    ],
    date: "Dic 2023",
    job: "Desarrollador Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    currentJob: true,
  },
  {
    company: "Parquesoft Sucre",
    logo: "/images/logos/parquesoft-sucre.webp",
    functions: [
      {
        item: "Construcción desde cero de un sistema administrativo para la gestión de planes institucionales.",
      },
      {
        item: "Configuración e implementación de Google OAuth2 para un inicio de sesión seguro y eficiente.",
      },
    ],
    date: "Mar 2023 - Dic 2024",
    job: "Desarrollador Web",
    technologies: ["Laravel", "PHP", "Tailwind CSS"],
    currentJob: false,
  },
  {
    company: "Startups Lab Agencia",
    logo: "/images/logos/startupslab.png",
    functions: [
      {
        item: "Maquetación completa de una plataforma de educación en línea para emprendedores.",
      },
      {
        item: "Creación y despliegue de un sistema para la venta de suscripciones de tarjetas didácticas.",
      },
      {
        item: "Administración de despliegues y mantenimiento de sitios web en producción utilizando AWS (EC2, S3).",
      },
    ],
    date: "2022 - 2023",
    job: "Desarrollador Frontend",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    currentJob: false,
  },
];
