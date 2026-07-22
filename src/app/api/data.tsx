import { HeaderItem } from "@/types/menu";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "GitHub", herf: "https://github.com/njofredev" },
  { label: "Email", herf: "mailto:n.jofreandrade@gmail.com" },
  { label: "Descargar CV", herf: "/scrap/jofrenicolascurriculum2026.pdf" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Python",
    short: "Backend",
    icon: "logos:python",
    background: "bg-warning bg-opacity-10",
    price: "APIs RESTful",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "PostgreSQL",
    short: "Base de Datos",
    icon: "logos:postgresql",
    background: "bg-light_grey",
    price: "Google Cloud",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Next.js",
    short: "Frontend",
    icon: "logos:nextjs-icon",
    background: "bg-light_grey bg-opacity-20",
    price: "TypeScript",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Linux VPS",
    short: "Infraestructura",
    icon: "logos:linux-tux",
    background: "bg-light_grey",
    price: "Ubuntu Server",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Redes & VoIP",
    short: "Telecomunicaciones",
    icon: "tabler:router",
    background: "bg-warning bg-opacity-10",
    price: "Ruijie & Reyee",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Make / n8n",
    short: "Automatización",
    icon: "tabler:bolt",
    background: "bg-light_grey bg-opacity-10",
    price: "Workflows & APIs",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Coolify",
    short: "DevOps",
    icon: "tabler:server-2",
    background: "bg-warning bg-opacity-10",
    price: "Self-Hosting",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "IA / LLMs",
    short: "Productividad",
    icon: "tabler:sparkles",
    background: "bg-light_grey",
    price: "Gemini / Claude",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
];

export const portfolioData: { image: string; title: string; desc: string }[] = [
  {
    image: "tabler:api-app",
    title: "Integración de Datos y APIs Médicas",
    desc: "Desarrollo de scripts en Python y JavaScript para consumo de APIs de sistemas clínicos (Dentalink y Medilink) hacia PostgreSQL en GCP y servidores self-hosted.",
  },
  {
    image: "tabler:building-hospital",
    title: "Estructuración de Departamento TIC",
    desc: "Diseño e implementación de arquitectura de TI, redes (Ruijie/Reyee) y telefonía VoIP para la nueva sucursal Vitacura de Policlínico Tabancura, integrando con casa matriz.",
  },
  {
    image: "tabler:brain",
    title: "Adopción de IA & Transformación Digital",
    desc: "Capacitación en IA generativa (Gemini, Claude, Antigravity) para optimización de tareas clínicas/administrativas, además de desarrollo de cotizador de exámenes e inventarios cloud en Next.js.",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "Seguridad ANCI y Ley Nº21.719" },
  { title: "Automatizaciones Python, Make & n8n" },
  { title: "Redes Ruijie & Telefonía VoIP" },
  { title: "Sistemas Web Next.js & GCP Cloud" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "tabler:school",
    title: "Ingeniería Informática",
    text: "Ingeniero de Ejecución en Informática (Mención Desarrollo de Sistemas).<br /><strong>Instituto Profesional AIEP</strong> (2015 - 2021).",
    space: "lg:mt-8",
  },
  {
    icon: "tabler:code",
    title: "Bootcamp Full-Stack Python",
    text: "Desarrollador Full-Stack Python & Django.<br /><strong>Talento Digital - SENCE</strong> (2024 - 460 hrs presenciales).",
    space: "lg:mt-14",
  },
  {
    icon: "tabler:building-community",
    title: "Enseñanza Media & Administración",
    text: "Formación en Asistente Administrativo Computacional en <strong>Colegio San Lorenzo e INACAP</strong> (2013).",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  company: string;
  period: string;
  text: string;
  achievements: string[];
}[] = [
  {
    icon: "tabler:device-laptop",
    title: "Encargado TIC",
    company: "Policlínico Tabancura",
    period: "Agosto 2024 - Actualidad",
    text: "Liderazgo de infraestructura tecnológica, desarrollo de software y comunicaciones en Vitacura, Santiago.",
    achievements: [
      "Estructuración del departamento de TI en sucursal Vitacura e integración con casa matriz.",
      "Desarrollo en Python/JS para consumo de APIs clínicas (Dentalink/Medilink) a PostgreSQL en GCP.",
      "Desarrollo de cotizador de exámenes en Next.js, inventario cloud y sistema de derivaciones digitales.",
      "Despliegue de redes Ruijie/Reyee, telefonía VoIP unificada y servidor Linux.",
      "Implementación de medidas de seguridad de datos bajo normativa ANCI y Ley Nº21.719.",
      "Capacitación al personal administrativo y clínico en uso de IA generativa (Gemini, Claude)."
    ]
  },
  {
    icon: "tabler:shield-check",
    title: "Asistente de Administración",
    company: "Colegio San Lorenzo",
    period: "Abril 2022 - Agosto 2023",
    text: "Gestión técnica, infraestructura académica y automatización de procesos.",
    achievements: [
      "Comisión técnica de levantamiento de equipamiento (hardware, redes y switches) para la carrera de Programación (Alianza Coding Dojo).",
      "Sistemas automatizados en Excel para enfermería, operaciones y administración.",
      "Digitalización de contratos de funcionarios y carpetas digitales para la Dirección del Trabajo."
    ]
  },
  {
    icon: "tabler:router",
    title: "Asistente de Soporte TI & Telecomunicaciones",
    company: "Colegio San Lorenzo",
    period: "Febrero 2022 - Abril 2022",
    text: "Operatividad de infraestructura física de redes, hardware y servidores de comunicaciones.",
    achievements: [
      "Administración y soporte de redes, racks de comunicaciones, módems e impresoras.",
      "Mantenimiento de laboratorios de computación, data show y sistemas de audio.",
      "Continuidad operacional para personal docente y administrativo mediante soporte de respuesta rápida."
    ]
  },
  {
    icon: "tabler:world-upload",
    title: "Consultor TI & Desarrollador Freelance",
    company: "Servicios Independientes",
    period: "Enero 2014 - Actualidad",
    text: "Desarrollo web, despliegue en la nube e infraestructura para particulares y PyMEs.",
    achievements: [
      "Despliegue de sitios web y aplicaciones en VPS Linux (Coolify, cPanel, Docker).",
      "Diagnóstico de hardware, mantenimiento de redes LAN/Wi-Fi, CCTV e instalación de sistemas operativos."
    ]
  }
];

export const CryptoData: { name: string; price: number }[] = [];
