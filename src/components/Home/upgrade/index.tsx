"use client";
import { upgradeData } from "@/app/api/data";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Upgrade = () => {
  const valueItems = [
    {
      title: "Seguridad & Normativas ANCI",
      desc: "Implementación estricta de medidas de ciberseguridad para proteger datos clínicos sensibles.",
    },
    {
      title: "Adopción Guiada de IA",
      desc: "Instrucción activa en herramientas generativas para elevar la productividad del personal clínico y administrativo.",
    },
    {
      title: "Documentación Ágil de Procesos",
      desc: "Creación de bases de conocimiento detalladas y manuales técnicos para toda la infraestructura TI.",
    },
    {
      title: "Gestión de Activos y Compras",
      desc: "Administración meticulosa de bodegas e inventarios mediante bases de datos integradas en Notion.",
    },
  ];

  return (
    <section className="md:py-36 py-20" id="upgrade">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "-50px", opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary sm:text-28 text-18 mb-3 font-medium">Metodología</p>
            <h2 className="text-midnight_text dark:text-white sm:text-40 text-30 font-bold mb-6 leading-tight">
              Compromiso con la Excelencia, Seguridad y Automatización.
            </h2>
            <p className="text-charcoalGray dark:text-muted dark:text-opacity-70 text-18 mb-8 leading-relaxed">
              No solo configuro equipos y escribo código; optimizo los procesos organizacionales de extremo a extremo, asegurando que la tecnología sea un motor real de productividad y resguardo operativo.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {valueItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <Icon
                      icon="tabler:shield-check"
                      className="text-primary text-24"
                    />
                  </div>
                  <div>
                    <h4 className="text-16 font-bold text-midnight_text dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-13 text-charcoalGray dark:text-muted dark:text-opacity-50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "50px", opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-white dark:bg-dark_grey bg-opacity-100 dark:bg-opacity-40 backdrop-blur-md border border-border dark:border-dark_border dark:border-opacity-5 p-8 rounded-3xl shadow-2xl relative overflow-hidden shadow-sm dark:shadow-none">
              <h3 className="text-22 text-midnight_text dark:text-white font-bold mb-6 border-b border-border dark:border-dark_border dark:border-opacity-10 pb-4 flex items-center gap-3">
                <Icon icon="tabler:info-circle" className="text-primary text-26" />
                Resumen Ejecutivo
              </h3>
              
              <ul className="space-y-4 text-16 text-charcoalGray dark:text-muted dark:text-opacity-80">
                <li className="flex justify-between items-center py-2 border-b border-border dark:border-dark_border dark:border-opacity-5">
                  <span className="font-medium text-midnight_text dark:text-white">Ubicación</span>
                  <span>Conchalí, Santiago, Chile</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-border dark:border-dark_border dark:border-opacity-5">
                  <span className="font-medium text-midnight_text dark:text-white">Disponibilidad</span>
                  <span className="text-primary font-semibold">Proyectos &amp; Consultorías</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-border dark:border-dark_border dark:border-opacity-5">
                  <span className="font-medium text-midnight_text dark:text-white">Idiomas</span>
                  <span>Español (Nativo) | Inglés (Intermedio)</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-border dark:border-dark_border dark:border-opacity-5">
                  <span className="font-medium text-midnight_text dark:text-white">Intereses</span>
                  <span>Desarrollo de Software, Eventos Tech, Música, Cocina</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="font-medium text-midnight_text dark:text-white">Contacto</span>
                  <a href="mailto:n.jofreandrade@gmail.com" className="text-primary hover:underline font-semibold">
                    n.jofreandrade@gmail.com
                  </a>
                </li>
              </ul>
              
              {/* Glow accent */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary bg-opacity-15 rounded-full blur-3xl -z-1"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Upgrade;
