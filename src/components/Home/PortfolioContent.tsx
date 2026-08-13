"use client";

import React, { useState, useEffect } from "react";
import Scrollspy from "@/components/Common/Scrollspy";

const sectionsEs = [
  { id: "sobre-mi", label: "Sobre Mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "educacion", label: "Educación & Tecnologías" },
];

const sectionsEn = [
  { id: "sobre-mi", label: "About Me" },
  { id: "experiencia", label: "Experience" },
  { id: "educacion", label: "Education & Technologies" },
];

const translationData = {
  es: {
    title: "Nicolás Alonso Jofré Andrade",
    subtitle: "Ingeniero en Informática | Operaciones TIC",
    aboutTitle: "Sobre mí",
    aboutText: "Ingeniero en Informática especializado en Operaciones TIC, infraestructura en la nube, automatizaciones y desarrollo backend. Más de 4 años de experiencia liderando infraestructura TIC, automatización de procesos y despliegue de soluciones en la nube para entornos de salud, educación y administración. Especialista en integración de datos clínicos vía API, redes corporativas y adopción de IA generativa.",
    expTitle: "Experiencia Profesional",
    eduTitle: "Educación",
    skillsTitle: "Tecnologías",
    footerText: "Nicolás Alonso Jofré Andrade • Generado en formato minimalista • ",
    jobs: [
      {
        title: "Encargado TIC",
        company: "Policlínico Tabancura",
        period: "Agosto 2024 - Actualidad",
        text: "Liderazgo de infraestructura tecnológica, desarrollo de software y comunicaciones en Vitacura, Santiago.",
        links: [
          { label: "policlinicotabancura.cl", url: "https://policlinicotabancura.cl/" },
          { label: "Sistema de Derivaciones Digitales", url: "https://derivaciones.policlinicotabancura.cl/" },
          { label: "Cotizador Digital de Exámenes", url: "https://cotizador.policlinicotabancura.cl/public" }
        ],
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
        title: "Consultor TI & Desarrollador Freelance",
        company: "Servicios Independientes",
        period: "Enero 2014 - Actualidad",
        text: "Desarrollo web, despliegue en la nube e infraestructura para particulares y PyMEs.",
        links: [
          { label: "servicios-integrales.cl", url: "https://servicios-integrales.cl/" }
        ],
        achievements: [
          "Despliegue de sitios web y aplicaciones en VPS Linux (Coolify, cPanel, Docker).",
          "Diagnóstico de hardware, mantenimiento de redes LAN/Wi-Fi, CCTV e instalación de sistemas operativos."
        ]
      }
    ],
    edu: [
      {
        period: "2015 - 2021",
        title: "Ingeniería Informática",
        text: "Ingeniero de Ejecución en Informática (Mención Desarrollo de Sistemas).<br /><strong>Instituto Profesional AIEP</strong> (2015 - 2021)."
      },
      {
        period: "2024",
        title: "Bootcamp Full-Stack Python",
        text: "Desarrollador Full-Stack Python & Django.<br /><strong>Talento Digital - SENCE</strong> (2024 - 460 hrs presenciales)."
      },
      {
        period: "2013",
        title: "Enseñanza Media & Administración",
        text: "Formación en Asistente Administrativo Computacional en <strong>Colegio San Lorenzo e INACAP</strong> (2013)."
      }
    ],
    skillsCategories: [
      {
        category: "Infraestructura y Nube",
        items: "Google Cloud Platform (GCP), PostgreSQL, Docker, Coolify, VPS Linux, cPanel, WordPress, Owncloud, Servidores Físicos, Ubuntu Server, Cockpit, SSH"
      },
      {
        category: "Desarrollo y Automatización",
        items: "Next.js, Python, Django, API RESTful, Make, n8n, Git / GitHub"
      },
      {
        category: "Redes y Soporte TI",
        items: "Telefonía VoIP, Redes Ruijie & Reyee, Soporte y Mantención de Hardware/Software, Redes Sociales, Meta Business Suite"
      },
      {
        category: "Gestión y Herramientas",
        items: "Bitwarden, Trello, Dentalink, Medilink, Geovictoria, Klap, Nubox, Canva, Figma, Excel, Metabase"
      },
      {
        category: "Inteligencia Artificial (IA)",
        items: "Ecosistema Google (Antigravity, Gemini, Looker Studio), Claude Code, ChatGPT, Perplexity, GitHub Copilot"
      },
      {
        category: "Idiomas",
        items: "Español (Nativo) | Inglés (Intermedio – B1/B2)"
      }
    ]
  },
  en: {
    title: "Nicolás Alonso Jofré Andrade",
    subtitle: "Computer Engineer | IT Operations",
    aboutTitle: "About Me",
    aboutText: "Computer Engineer specializing in IT Operations, cloud infrastructure, automation, and backend development. Over 4 years of experience leading IT infrastructure, process automation, and cloud solution deployment for health, education, and administrative environments. Specialist in clinical data integration via APIs, corporate networks, and generative AI adoption.",
    expTitle: "Professional Experience",
    eduTitle: "Education",
    skillsTitle: "Technologies",
    footerText: "Nicolás Alonso Jofré Andrade • Generated in minimalist format • ",
    jobs: [
      {
        title: "IT Manager",
        company: "Policlínico Tabancura",
        period: "August 2024 - Present",
        text: "Leading technological infrastructure, software development, and communications in Vitacura, Santiago.",
        links: [
          { label: "policlinicotabancura.cl", url: "https://policlinicotabancura.cl/" },
          { label: "Digital Referral System", url: "https://derivaciones.policlinicotabancura.cl/" },
          { label: "Digital Exam Quote System", url: "https://cotizador.policlinicotabancura.cl/public" }
        ],
        achievements: [
          "Structured the IT department at the Vitacura branch and integrated it with headquarters.",
          "Developed Python/JS scripts to consume clinical APIs (Dentalink/Medilink) and store data in PostgreSQL on GCP.",
          "Developed an exam quoting tool in Next.js, a cloud inventory system, and a digital referral system.",
          "Deployed Ruijie/Reyee networks, unified VoIP telephony, and Linux servers.",
          "Implemented data security measures in compliance with ANCI regulations and Law No. 21.719.",
          "Trained clinical and administrative staff in the use of generative AI (Gemini, Claude)."
        ]
      },
      {
        title: "Administrative Assistant",
        company: "Colegio San Lorenzo",
        period: "April 2022 - August 2023",
        text: "Technical management, academic infrastructure, and process automation.",
        achievements: [
          "Led the technical commission for equipment assessment (hardware, networks, switches) for the Programming major (Coding Dojo Alliance).",
          "Developed automated Excel systems for nursing, operations, and administration.",
          "Digitized employee contracts and maintained digital folders for the Labor Directorate."
        ]
      },
      {
        title: "IT Support & Telecommunications Assistant",
        company: "Colegio San Lorenzo",
        period: "February 2022 - April 2022",
        text: "Maintained physical network infrastructure, hardware, and communications servers.",
        achievements: [
          "Administered and supported networks, communication racks, modems, and printers.",
          "Maintained computer labs, projectors, and audio systems.",
          "Ensured operational continuity for teaching and administrative staff through rapid-response support."
        ]
      },
      {
        title: "IT Consultant & Freelance Developer",
        company: "Independent Services",
        period: "January 2014 - Present",
        text: "Providing web development, cloud deployment, and IT infrastructure solutions for individuals and SMEs.",
        links: [
          { label: "servicios-integrales.cl", url: "https://servicios-integrales.cl/" }
        ],
        achievements: [
          "Deployed websites and applications on Linux VPS (Coolify, cPanel, Docker).",
          "Performed hardware diagnostics, LAN/Wi-Fi network maintenance, CCTV installation, and OS setup."
        ]
      }
    ],
    edu: [
      {
        period: "2015 - 2021",
        title: "Computer Engineering",
        text: "Bachelor's Degree in Computer Engineering (Systems Development Major).<br /><strong>AIEP Professional Institute</strong> (2015 - 2021)."
      },
      {
        period: "2024",
        title: "Python Full-Stack Bootcamp",
        text: "Full-Stack Python & Django Developer.<br /><strong>Talento Digital - SENCE</strong> (2024 - 460 in-person hours)."
      },
      {
        period: "2013",
        title: "High School Diploma & Administration",
        text: "Training as Computer Administrative Assistant at <strong>San Lorenzo School and INACAP</strong> (2013)."
      }
    ],
    skillsCategories: [
      {
        category: "Infrastructure & Cloud",
        items: "Google Cloud Platform (GCP), PostgreSQL, Docker, Coolify, VPS Linux, cPanel, WordPress, Owncloud, Physical Servers, Ubuntu Server, Cockpit, SSH"
      },
      {
        category: "Development & Automation",
        items: "Next.js, Python, Django, RESTful APIs, Make, n8n, Git / GitHub"
      },
      {
        category: "Networks & IT Support",
        items: "VoIP Telephony, Ruijie & Reyee Networks, Hardware/Software Support & Maintenance, Social Media, Meta Business Suite"
      },
      {
        category: "Management & Tools",
        items: "Bitwarden, Trello, Dentalink, Medilink, Geovictoria, Klap, Nubox, Canva, Figma, Excel, Metabase"
      },
      {
        category: "Artificial Intelligence (AI)",
        items: "Google Ecosystem (Antigravity, Gemini, Looker Studio), Claude Code, ChatGPT, Perplexity, GitHub Copilot"
      },
      {
        category: "Languages",
        items: "Spanish (Native) | English (Intermediate – B1/B2)"
      }
    ]
  }
};

export default function PortfolioContent() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = translationData[lang];
  const sections = lang === "es" ? sectionsEs : sectionsEn;

  return (
    <main className="min-h-screen bg-transparent text-black dark:text-white font-sans py-16 px-6 sm:px-12 md:px-24 transition-colors duration-500 ease-in-out">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t.title}
            </h1>

            {/* Language Controls */}
            {mounted && (
              <div className="flex items-center text-sm shrink-0 select-none pt-2 sm:pt-3">
                {/* Language Switcher */}
                <div className="flex gap-1.5 font-semibold">
                  <button
                    onClick={() => setLang("es")}
                    className={`${lang === "es" ? "text-black dark:text-white underline decoration-2 underline-offset-4" : "text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white"} transition-colors`}
                  >
                    ES
                  </button>
                  <span className="text-gray-300 dark:text-gray-700">/</span>
                  <button
                    onClick={() => setLang("en")}
                    className={`${lang === "en" ? "text-black dark:text-white underline decoration-2 underline-offset-4" : "text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white"} transition-colors`}
                  >
                    EN
                  </button>
                </div>
              </div>
            )}
          </div>
          <p className="text-lg sm:text-xl italic mb-6 text-gray-700 dark:text-gray-300">
            {t.subtitle}
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base border-b border-black dark:border-white pb-6 font-sans">
            <a href="mailto:n.jofreandrade@gmail.com" className="hover:underline">
              Email
            </a>
            <a href="https://linkedin.com/in/njofreandrade" target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:opacity-80">
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="shrink-0 opacity-80"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
            </a>
            <a href="https://github.com/njofredev" target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:opacity-80">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="shrink-0 opacity-80"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
            </a>
            <a href="https://wa.me/56957558966" target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:opacity-80">
              WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="shrink-0 opacity-80"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
            </a>
          </div>
        </header>

        {/* Sobre mí */}
        <section id="sobre-mi" className="mb-12">
          <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider mb-2">
            {t.aboutTitle}
          </h2>
          <div>
            <p className="leading-relaxed text-base sm:text-md text-justify">
              {t.aboutText}
            </p>
          </div>
        </section>

        {/* Experiencia profesional */}
        <section id="experiencia" className="mb-12">
          <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider mb-6">
            {t.expTitle}
          </h2>
          <div className="relative border-l border-black/20 dark:border-white/15 ml-4 pl-8 space-y-12">
            {t.jobs.map((job, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[39px] top-1.5 flex size-[14px] items-center justify-center" aria-hidden="true">
                  {idx === 0 && (
                    <span className="animate-ping absolute inline-flex size-full rounded-full bg-black/20 dark:bg-white/20"></span>
                  )}
                  <span className="relative inline-flex size-[8px] rounded-full bg-black dark:bg-white"></span>
                </span>

                {/* Stacked Rows Layout */}
                <div className="space-y-3">
                  {/* Header Row (Title, Company, and Period) */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-gray-200 dark:border-neutral-800 pb-2">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                        {job.title}
                      </h3>
                      <span className="text-gray-400 dark:text-gray-500 hidden sm:inline">•</span>
                      <h4 className="font-semibold text-base text-gray-800 dark:text-neutral-200">
                        {job.company}
                      </h4>
                    </div>
                    <time className="text-sm text-gray-600 dark:text-neutral-300 font-sans shrink-0 font-medium">
                      {job.period}
                    </time>
                  </div>

                  {/* Content Row (Description, Bullet Points and Project Links) */}
                  <div className="pl-0">
                    <p className="text-base text-gray-900 dark:text-neutral-100 leading-relaxed font-medium">
                      {job.text}
                    </p>
                    <ul className="mt-3 list-disc list-outside pl-4 text-sm sm:text-base space-y-2 text-gray-800 dark:text-neutral-200">
                      {job.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="leading-relaxed pl-1">
                          {ach}
                        </li>
                      ))}
                    </ul>
                    {"links" in job && (job as any).links && (
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-3.5 text-xs sm:text-sm">
                        <span className="font-semibold text-gray-700 dark:text-neutral-300">
                          {lang === "es" ? "Proyectos:" : "Projects:"}
                        </span>
                        {((job as any).links as { label: string; url: string }[]).map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-gray-200 hover:text-white underline decoration-neutral-500 underline-offset-4 hover:decoration-white transition-colors"
                          >
                            <span>{link.label}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-80"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Educación */}
        <section id="educacion" className="mb-12">
          <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider mb-2">
            {t.eduTitle}
          </h2>
          <div className="border-t border-black dark:border-white pt-4 space-y-6">
            {t.edu.map((edu, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8">
                <div className="md:col-span-1 text-sm font-sans text-gray-700 dark:text-neutral-300 font-medium">
                  {edu.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-base sm:text-lg font-bold leading-tight">
                    {edu.title}
                  </h3>
                  <p
                    className="text-sm text-gray-800 dark:text-neutral-200 mt-1"
                    dangerouslySetInnerHTML={{ __html: edu.text }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Habilidades / Tecnologías */}
        <section id="habilidades" className="mb-16">
          <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider mb-2">
            {t.skillsTitle}
          </h2>
          <div className="border-t border-black dark:border-white pt-4 space-y-5">
            {t.skillsCategories.map((cat, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-8">
                <div className="md:col-span-1 text-sm font-sans font-bold text-black dark:text-white">
                  {cat.category}
                </div>
                <div className="md:col-span-3 text-sm text-gray-800 dark:text-neutral-200 leading-relaxed font-medium">
                  {cat.items}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Scrollspy items={sections} />
    </main>
  );
}
