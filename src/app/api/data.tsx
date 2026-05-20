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
    price: "Django & APIs",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Postgres",
    short: "Base de Datos",
    icon: "logos:postgresql",
    background: "bg-light_grey",
    price: "Modelado & SQL",
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
    price: "React & TS",
    mark: "Intermedio",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "GCP (Cloud)",
    short: "Cloud",
    icon: "logos:google-cloud",
    background: "bg-warning bg-opacity-10",
    price: "GCP Services",
    mark: "Intermedio",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Linux VPS",
    short: "Infraestructura",
    icon: "logos:linux-tux",
    background: "bg-light_grey",
    price: "SysAdmin & Redes",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Make (API)",
    short: "Automatización",
    icon: "logos:make",
    background: "bg-light_grey bg-opacity-10",
    price: "Flujos No-Code",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Coolify",
    short: "DevOps",
    icon: "logos:coolify",
    background: "bg-warning bg-opacity-10",
    price: "Self-Hosting",
    mark: "Intermedio",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
  {
    title: "Git / GitHub",
    short: "Control Versiones",
    icon: "logos:git-icon",
    background: "bg-light_grey",
    price: "CI/CD & Code",
    mark: "Avanzado",
    width: 36,
    height: 36,
    padding: "px-3 py-3",
  },
];

export const portfolioData: { image: string; title: string; desc: string }[] = [
  {
    image: "tabler:api-app",
    title: "Integración de APIs y GCP",
    desc: "Desarrollo en Python para el consumo de la API de Dentalink y Medilink, consolidando datos clínicos en PostgreSQL alojado en Google Cloud Platform.",
  },
  {
    image: "tabler:building-hospital",
    title: "Infraestructura de Sucursales",
    desc: "Establecimiento del departamento de TI para la nueva Sucursal Vitacura del Policlínico Tabancura, integrando procesos de redes con casa matriz.",
  },
  {
    image: "tabler:brain",
    title: "Automatización y Adopción de IA",
    desc: "Instrucción y aplicación de IA generativa para agilizar procesos de documentación y toma de decisiones, logrando mayor productividad diaria en equipos de salud.",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "Seguridad y ANCI" },
  { title: "Eficiencia y Automatización" },
  { title: "Redes y Telefonía VoIP" },
  { title: "Gestión de Bodega y Notion" },
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
    text: "Ingeniero de Ejecución en Informática con Mención en desarrollo de sistemas.<br /><strong>Instituto Profesional AIEP</strong> (2015 - 2021).",
    space: "lg:mt-8",
  },
  {
    icon: "tabler:code",
    title: "Desarrollo Python Django",
    text: "Especialización como Desarrollador Full-stack Python Django.<br /><strong>Talento Digital - SENCE</strong> (2024 - 460 horas presenciales).",
    space: "lg:mt-14",
  },
  {
    icon: "tabler:music",
    title: "Educación Creativa",
    text: "Estudios de Pedagogía en Música en <strong>U. Alberto Hurtado</strong>. Combina pensamiento lógico de ingeniería con mentalidad creativa e innovadora.",
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
    title: "Encargado de TI",
    company: "Policlínico Tabancura",
    period: "Agosto 2024 - Actualidad",
    text: "Liderazgo de recursos tecnológicos en entornos de salud y tecnología.",
    achievements: [
      "Supervisión de sistemas clínicos en la nube (Dentalink, Medilink, Nubox).",
      "Establecimiento del departamento TI en la sucursal de Vitacura.",
      "Desarrollo con Python para sincronizar APIs médicas con PostgreSQL en GCP.",
      "Migración de sitio web institucional y administración en cPanel."
    ]
  },
  {
    icon: "tabler:shield-check",
    title: "Asistente de Administración",
    company: "Colegio San Lorenzo",
    period: "Abril 2022 - Agosto 2023",
    text: "Gestión administrativa y tecnológica enfocada al sector educativo.",
    achievements: [
      "Apoyo en la implementación técnica de la carrera de programación junto a Coding Dojo.",
      "Diseño y despliegue de sistemas de automatización con Excel para diversas áreas del colegio.",
      "Digitalización de información clave y levantamiento de requerimientos."
    ]
  },
  {
    icon: "tabler:router",
    title: "Asistente de Soporte y Telecomunicaciones",
    company: "Colegio San Lorenzo",
    period: "Febrero 2022 - Abril 2022",
    text: "Soporte de infraestructura física, redes y hardware de comunicaciones.",
    achievements: [
      "Administración y soporte de redes de internet, modems y racks de comunicaciones.",
      "Mantenimiento correctivo y preventivo de hardware y salas de computación.",
      "Implementación ágil de soluciones técnicas eficientes."
    ]
  },
  {
    icon: "tabler:world-upload",
    title: "Desarrollador Freelance",
    company: "Servicios Independientes",
    period: "Enero 2015 - Actualidad",
    text: "Implementación de soluciones de redes, hardware y desarrollo web.",
    achievements: [
      "Desarrollo de proyectos web personalizados para clientes locales.",
      "Instalación de sistemas operativos, formateo y mantenimiento de redes residenciales y cibers."
    ]
  }
];

export const CryptoData: { name: string; price: number }[] = [];
