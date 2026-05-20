"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-50%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-50%", opacity: 0 },
    transition: { duration: 0.8 },
  };

  const bottomAnimation = {
    initial: { y: "50%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "50%", opacity: 0 },
    transition: { duration: 0.8 },
  };

  const specialities = [
    {
      icon: "tabler:code-off",
      title: "Desarrollo Backend / Python & Django",
      desc: "Creación de arquitecturas robustas e integración de APIs complejas (Dentalink, Medilink) consumiendo y estructurando datos hacia bases PostgreSQL. Enfoque en código limpio y eficiente.",
      color: "text-primary"
    },
    {
      icon: "tabler:building-hospital",
      title: "Administración de TI & Gestión de Salud",
      desc: "Amplia experiencia en la implementación y mantenimiento de sistemas en la nube y ERPs para clínicas (Dentalink, Medilink, Nubox), asegurando la continuidad del negocio y el soporte al personal.",
      color: "text-secondary"
    },
    {
      icon: "tabler:router",
      title: "Infraestructura de Redes y Servidores",
      desc: "Diseño y despliegue de redes corporativas (Ruijie & Reyee), telefonía IP (VoIP), administración de servidores web a través de cPanel y orquestación de VPS autoalojados con Coolify.",
      color: "text-primary"
    },
    {
      icon: "tabler:cpu",
      title: "Automatización de Procesos e IA",
      desc: "Implementación de flujos de trabajo eficientes utilizando Make (Integromat), creación de scripts automatizados en Python e instrucción en la adopción práctica de IA Generativa para empleados.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="md:pt-28 py-16" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center gap-12">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-6 col-span-12"
          >
            <p className="sm:text-28 text-18 text-charcoalGray dark:text-muted mb-2 font-medium">
              Especialidades <span className="text-primary">Técnicas</span>
            </p>
            <h2 className="sm:text-40 text-30 text-midnight_text dark:text-white font-bold leading-tight mb-6">
              Soluciones integrales de desarrollo, infraestructura y optimización digital.
            </h2>
            <p className="text-charcoalGray dark:text-muted dark:text-opacity-70 text-18 mb-10">
              Combino conocimientos avanzados de ingeniería de software con amplia experiencia en la administración operativa de recursos tecnológicos en entornos de salud, administrativos y educativos.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {specialities.slice(0, 2).map((item, index) => (
                <div key={index} className="bg-white dark:bg-dark_grey bg-opacity-100 dark:bg-opacity-35 p-6 rounded-2xl border border-border dark:border-dark_border dark:border-opacity-5 hover:border-primary hover:border-opacity-10 dark:hover:border-opacity-10 transition-all duration-300 shadow-sm dark:shadow-none">
                  <div className="mb-4">
                    <Icon
                      icon={item.icon}
                      className={`text-40 ${item.color}`}
                    />
                  </div>
                  <h4 className="text-20 text-midnight_text dark:text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-14 text-charcoalGray dark:text-muted dark:text-opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div {...TopAnimation} className="lg:col-span-6 col-span-12">
            <div className="grid md:grid-cols-2 gap-8 mt-4 lg:mt-0">
              {specialities.slice(2, 4).map((item, index) => (
                <div key={index} className="bg-white dark:bg-dark_grey bg-opacity-100 dark:bg-opacity-35 p-6 rounded-2xl border border-border dark:border-dark_border dark:border-opacity-5 hover:border-primary hover:border-opacity-10 dark:hover:border-opacity-10 transition-all duration-300 shadow-sm dark:shadow-none">
                  <div className="mb-4">
                    <Icon
                      icon={item.icon}
                      className={`text-40 ${item.color}`}
                    />
                  </div>
                  <h4 className="text-20 text-midnight_text dark:text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-14 text-charcoalGray dark:text-muted dark:text-opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Visual highlight box */}
            <div className="mt-8 bg-white dark:bg-gradient-to-r dark:from-tealGreen/10 dark:to-charcoalGray/10 border border-border dark:border-primary/20 rounded-2xl p-8 backdrop-blur-md shadow-sm dark:shadow-none">
              <div className="flex gap-4 items-center">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Icon icon="tabler:shield-check" className="text-primary text-32" />
                </div>
                <div>
                  <h4 className="text-18 text-midnight_text dark:text-white font-bold">Garantía de Continuidad y Seguridad</h4>
                  <p className="text-14 text-charcoalGray dark:text-muted dark:text-opacity-70 mt-1">
                    Protección de datos sensibles bajo rigurosas normativas de seguridad (ANCI) y auditorías internas para evitar cualquier punto de fallo operacional.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
