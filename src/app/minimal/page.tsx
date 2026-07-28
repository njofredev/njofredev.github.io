import React from "react";
import Link from "next/link";
import { timelineData, pricedeta, perksData } from "@/app/api/data";

export default function MinimalPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-serif py-16 px-6 sm:px-12 md:px-24 transition-colors duration-300">
      {/* Hide global header and footer on this page */}
      <style dangerouslySetInnerHTML={{ __html: `
        header.fixed, footer.bg-darkmode, #scroll-to-top {
          display: none !important;
        }
      `}} />
      <div className="max-w-3xl mx-auto">
        
        {/* Floating return link */}
        <div className="mb-12 font-sans text-sm no-print">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-black dark:hover:text-white underline transition-colors"
          >
            ← Volver al inicio (Bento Grid)
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Nicolás Alonso Jofré Andrade
          </h1>
          <p className="text-lg sm:text-xl italic mb-6 text-gray-700 dark:text-gray-300">
            Ingeniero en Informática | Operaciones TIC
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base border-b border-black dark:border-white pb-6 font-sans">
            <a href="mailto:n.jofreandrade@gmail.com" className="hover:underline">
              n.jofreandrade@gmail.com
            </a>
            <a href="https://linkedin.com/in/njofreandrade" target="_blank" rel="noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/njofredev" target="_blank" rel="noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="tel:+56957558966" className="hover:underline">
              +56 9 5755 8966
            </a>
          </div>
        </header>

        {/* Sobre mí */}
        <section className="mb-12">
          <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider mb-2">
            Sobre mí
          </h2>
          <div className="border-t border-black dark:border-white pt-4">
            <p className="leading-relaxed text-base sm:text-md text-justify">
              Ingeniero en Informática especializado en Operaciones TIC, infraestructura en la nube, automatizaciones y desarrollo backend. Más de 4 años de experiencia liderando infraestructura TIC, automatización de procesos y despliegue de soluciones en la nube para entornos de salud, educación y administración. Especialista en integración de datos clínicos vía API, redes corporativas y adopción de IA generativa.
            </p>
          </div>
        </section>

        {/* Experiencia profesional */}
        <section className="mb-12">
          <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider mb-2">
            Experiencia Profesional
          </h2>
          <div className="border-t border-black dark:border-white pt-4 space-y-10">
            {timelineData.map((job, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                {/* Left Column: Date Range */}
                <div className="md:col-span-1 text-sm font-sans text-gray-600 dark:text-gray-400">
                  {job.period}
                </div>
                {/* Right Column: Content */}
                <div className="md:col-span-3">
                  <h3 className="text-lg font-bold leading-tight">
                    {job.title}, <span className="font-normal italic">{job.company}</span>
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 italic">
                    {job.text}
                  </p>
                  <ul className="mt-3 list-disc list-outside pl-4 text-sm sm:text-base space-y-2 text-gray-800 dark:text-gray-200">
                    {job.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="leading-relaxed pl-1">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Educación */}
        <section className="mb-12">
          <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider mb-2">
            Educación
          </h2>
          <div className="border-t border-black dark:border-white pt-4 space-y-6">
            {perksData.map((edu, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8">
                <div className="md:col-span-1 text-sm font-sans text-gray-600 dark:text-gray-400">
                  {idx === 0 ? "2015 - 2021" : idx === 1 ? "2024" : "2013"}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-base sm:text-lg font-bold leading-tight">
                    {edu.title}
                  </h3>
                  <p 
                    className="text-sm text-gray-700 dark:text-gray-300 mt-1"
                    dangerouslySetInnerHTML={{ __html: edu.text }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Habilidades */}
        <section className="mb-16">
          <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider mb-2">
            Habilidades
          </h2>
          <div className="border-t border-black dark:border-white pt-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 pl-4 list-disc text-sm sm:text-base text-gray-800 dark:text-gray-200">
              {pricedeta.map((tech, idx) => (
                <li key={idx} className="leading-relaxed">
                  <strong>{tech.title}</strong>: {tech.mark} ({tech.price})
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer info print */}
        <footer className="text-center font-sans text-xs text-gray-400 mt-20 border-t border-gray-100 dark:border-neutral-900 pt-6 no-print">
          Nicolás Alonso Jofré Andrade • Generado en formato minimalista • {new Date().getFullYear()}
        </footer>

      </div>
    </main>
  );
}
