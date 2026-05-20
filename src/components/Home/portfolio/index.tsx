"use client";
import { portfolioData } from "@/app/api/data";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Portfolio = () => {
  return (
    <section className="md:pt-36 sm:pt-24 pt-12" id="portfolio">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          
          {/* Left panel: Glassmorphic interactive technical status panel */}
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "-50px", opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-dark_grey dark:bg-dark_grey bg-opacity-95 dark:bg-opacity-40 backdrop-blur-lg border border-border dark:border-dark_border dark:border-opacity-10 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-border dark:border-dark_border dark:border-opacity-10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-3.5 h-3.5 bg-success rounded-full animate-pulse"></span>
                  <h4 className="text-16 font-bold text-white font-mono uppercase tracking-wider">
                    Sincronizador TI v2.1
                  </h4>
                </div>
                <div className="bg-[#0c372a] text-primary border border-primary border-opacity-35 text-12 font-bold font-mono px-3 py-1 rounded">
                  ESTADO: ONLINE
                </div>
              </div>

              {/* Status List */}
              <div className="space-y-5 font-mono text-14">
                <div className="flex justify-between items-center bg-darkmode bg-opacity-40 p-4 rounded-xl border border-dark_border border-opacity-5">
                  <div className="flex items-center gap-3">
                    <Icon icon="logos:python" className="text-20" />
                    <span className="text-white">API Dentalink &amp; Medilink</span>
                  </div>
                  <span className="text-primary font-bold">[CONECTADO]</span>
                </div>

                <div className="flex justify-between items-center bg-darkmode bg-opacity-40 p-4 rounded-xl border border-dark_border border-opacity-5">
                  <div className="flex items-center gap-3">
                    <Icon icon="logos:postgresql" className="text-20" />
                    <span className="text-white">GCP PostgreSQL DB</span>
                  </div>
                  <span className="text-primary font-bold">[ONLINE]</span>
                </div>

                <div className="flex justify-between items-center bg-darkmode bg-opacity-40 p-4 rounded-xl border border-dark_border border-opacity-5">
                  <div className="flex items-center gap-3">
                    <Icon icon="logos:google-cloud" className="text-20" />
                    <span className="text-white">Google Cloud Functions</span>
                  </div>
                  <span className="text-primary font-bold">[ACTIVO]</span>
                </div>

                <div className="flex justify-between items-center bg-darkmode bg-opacity-40 p-4 rounded-xl border border-dark_border border-opacity-5">
                  <div className="flex items-center gap-3">
                    <Icon icon="tabler:cpu" className="text-primary text-20" />
                    <span className="text-white">IA Generativa (Adopción)</span>
                  </div>
                  <span className="text-primary font-bold">[ACTIVO 100%]</span>
                </div>
              </div>

              {/* Technical log detail */}
              <div className="mt-6 bg-[#000510]/60 p-4 rounded-xl border border-dark_border border-opacity-5 font-mono text-12 text-muted text-opacity-50">
                <p>&gt; sys_update: DB schema verified successfully.</p>
                <p className="text-primary">&gt; sync_daemon: 1,420 clinical appointments synchronized.</p>
                <p className="text-secondary">&gt; security: HIPAA / ANCI compliance certified.</p>
              </div>

              {/* Decorative radial blur glow */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-primary bg-opacity-20 rounded-full blur-3xl -z-1"></div>
            </div>
          </motion.div>

          {/* Right panel: Information */}
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "50px", opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="sm:text-28 text-18 text-charcoalGray dark:text-muted mb-3 font-medium">
              Logros &amp; <span className="text-primary">Proyectos</span>
            </p>
            <h2 className="text-midnight_text dark:text-white sm:text-40 text-30 font-bold leading-tight mb-6">
              Impacto real e integraciones exitosas en producción.
            </h2>
            <p className="text-charcoalGray dark:text-muted dark:text-opacity-70 text-17 mb-10">
              Despliegue de soluciones tecnológicas personalizadas que optimizan procesos complejos, reducen costos operativos y mejoran la toma de decisiones clínicas y corporativas.
            </p>

            <div className="space-y-8">
              {portfolioData.map((item, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="bg-[#0c372a] bg-opacity-40 border border-primary border-opacity-15 p-4 rounded-2xl w-fit h-fit shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      icon={item.image}
                      className="text-primary text-28"
                    />
                  </div>
                  <div>
                    <h4 className="text-20 text-midnight_text dark:text-white font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-15 text-charcoalGray dark:text-muted dark:text-opacity-65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
