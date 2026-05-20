"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import CardSlider from "./slider";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-50%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8 },
  };

  const rightAnimation = {
    initial: { x: "50%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8 },
  };

  return (
    <section
      className="relative md:pt-44 md:pb-24 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12 items-center min-h-[550px] gap-8">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <div className="flex gap-3 items-center lg:justify-start justify-center mb-6 mt-12 md:mt-20">
              <div className="bg-primary bg-opacity-20 p-2 rounded-lg">
                <Icon icon="tabler:terminal-2" className="text-primary text-28" />
              </div>
              <p className="text-charcoalGray dark:text-white sm:text-24 text-18 mb-0 font-medium">
                Hola, soy <span className="text-primary">Nicolás Jofré</span>
              </p>
            </div>
            
            <h1 className="font-bold lg:text-54 md:text-44 text-36 lg:text-start text-center text-midnight_text dark:text-white mb-6 leading-tight">
              Ingeniero en Informática <br />
              <span className="text-primary">&amp; Administrador de TI</span>
            </h1>
            
            <p className="text-charcoalGray dark:text-muted dark:text-opacity-80 text-18 mb-10 lg:text-start text-center leading-relaxed">
              Especialista en infraestructura tecnológica, administración de sistemas clínicos, redes, automatización de procesos e integración inteligente con Python y Google Cloud. Comprometido con la innovación y optimización del rendimiento en entornos de salud y educación.
            </p>

            <div className="flex flex-wrap items-center lg:justify-start justify-center gap-6">
              <Link
                href="/#work"
                className="bg-primary border border-primary rounded-lg text-18 font-semibold hover:bg-transparent hover:text-primary text-darkmode py-3 px-8 transition-all duration-300 shadow-lg shadow-primary/10"
              >
                Ver Especialidades
              </Link>
              <a
                href="mailto:n.jofreandrade@gmail.com"
                className="bg-transparent border border-primary rounded-lg text-18 font-semibold hover:bg-primary hover:text-darkmode text-primary py-3 px-8 transition-all duration-300"
              >
                Contactar
              </a>
            </div>

            <div className="flex items-center lg:justify-start justify-center gap-6 mt-12">
              <a
                href="https://github.com/njofredev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white dark:bg-dark_grey bg-opacity-100 dark:bg-opacity-50 hover:bg-primary hover:text-darkmode dark:hover:text-darkmode text-midnight_text dark:text-white border border-border dark:border-dark_border dark:border-opacity-10 py-3 px-6 rounded-lg transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <Icon icon="fa6-brands:github" className="text-24" />
                <span className="font-medium text-16">GitHub</span>
              </a>
              <a
                href="mailto:n.jofreandrade@gmail.com"
                className="flex items-center gap-3 bg-white dark:bg-dark_grey bg-opacity-100 dark:bg-opacity-50 hover:bg-primary hover:text-darkmode dark:hover:text-darkmode text-midnight_text dark:text-white border border-border dark:border-dark_border dark:border-opacity-10 py-3 px-6 rounded-lg transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <Icon icon="tabler:mail" className="text-24" />
                <span className="font-medium text-16">n.jofreandrade@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            {...rightAnimation}
            className="lg:col-span-6 col-span-12 lg:block hidden"
          >
            <div className="ml-12 relative">
              <div className="bg-dark_grey bg-opacity-55 backdrop-blur-lg border border-dark_border border-opacity-10 rounded-2xl p-8 shadow-2xl relative overflow-hidden text-left font-mono text-15 text-white/90">
                <div className="flex gap-2 mb-6 border-b border-dark_border border-opacity-10 pb-4">
                  <span className="w-3.5 h-3.5 bg-[#FF5F56] rounded-full block"></span>
                  <span className="w-3.5 h-3.5 bg-[#FFBD2E] rounded-full block"></span>
                  <span className="w-3.5 h-3.5 bg-[#27C93F] rounded-full block"></span>
                  <span className="text-muted text-opacity-40 text-12 ml-4">nicolas_jofre_profile.json</span>
                </div>
                
                <p className="text-[#7FDBCA] mb-2">// Ingeniero de Ejecución en Informática</p>
                <p className="text-white"><span className="text-[#C792EA]">const</span> <span className="text-[#82B1FF]">developer</span> = &#123;</p>
                <p className="text-white pl-6">nombre: <span className="text-[#ECC48D]">"Nicolás Jofré Andrade"</span>,</p>
                <p className="text-white pl-6">experiencia: <span className="text-[#ECC48D]">"Encargado de TI @ Policlínico Tabancura"</span>,</p>
                <p className="text-white pl-6">enfoque: <span className="text-[#ECC48D]">"Automatización &amp; Infraestructura"</span>,</p>
                <p className="text-white pl-6">habilidadesClave: [</p>
                <p className="text-[#ADDB87] pl-12">"Python / Django",</p>
                <p className="text-[#ADDB87] pl-12">"GCP &amp; PostgreSQL",</p>
                <p className="text-[#ADDB87] pl-12">"Administración de Redes (Ruijie/Reyee)",</p>
                <p className="text-[#ADDB87] pl-12">"Sistemas Clínicos (Dentalink/Medilink)",</p>
                <p className="text-[#ADDB87] pl-12">"Integraciones con IA Generativa"</p>
                <p className="text-white pl-6">],</p>
                <p className="text-white pl-6">intereses: [<span className="text-[#ECC48D]">"Software"</span>, <span className="text-[#ECC48D]">"Música"</span>, <span className="text-[#ECC48D]">"Cocina"</span>]</p>
                <p className="text-white">&#125;;</p>
                
                <div className="mt-6 border-t border-dark_border border-opacity-10 pt-4 font-mono text-14">
                  <p className="text-[#C792EA]">$ python sync_dentalink_api.py</p>
                  <p className="text-[#ADDB87]">&gt;&gt;&gt; Conectando con API Dentalink...</p>
                  <p className="text-[#ADDB87]">&gt;&gt;&gt; Insertando registros en PostgreSQL GCP...</p>
                  <p className="text-primary">&gt;&gt;&gt; Sincronización Completada con Éxito. [OK]</p>
                </div>
              </div>
              
              {/* Decorative light blur glows */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary bg-opacity-20 rounded-full blur-3xl -z-1"></div>
              <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-secondary bg-opacity-20 rounded-full blur-3xl -z-1"></div>
            </div>
          </motion.div>
        </div>
        
        <CardSlider />
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default Hero;
