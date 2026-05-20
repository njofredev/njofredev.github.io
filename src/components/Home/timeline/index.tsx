"use client";
import { timelineData } from "@/app/api/data";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const TimeLine = () => {
  return (
    <section className="md:pt-36 py-16" id="timeline">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-30px", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-charcoalGray dark:text-muted sm:text-28 text-18 mb-3 font-medium">
              Trayectoria <span className="text-primary">Profesional</span>
            </p>
            <h2 className="text-midnight_text dark:text-white sm:text-40 text-30 font-bold lg:w-70% mx-auto">
              Mi experiencia a través de los años
            </h2>
          </motion.div>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-dark_border border-opacity-10 ml-4 md:ml-32 md:mr-32 pl-8 md:pl-12 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "-50px", opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Point on timeline */}
              <span className="absolute -left-[45px] md:-left-[61px] top-1.5 bg-white dark:bg-darkmode border-2 border-primary w-6 h-6 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
              </span>

              {/* Card content */}
              <div className="bg-white dark:bg-dark_grey bg-opacity-100 dark:bg-opacity-40 backdrop-blur-md border border-border dark:border-dark_border dark:border-opacity-5 p-8 rounded-2xl hover:border-primary hover:border-opacity-15 dark:hover:border-opacity-15 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-xl text-primary">
                       <Icon icon={item.icon} className="text-28" />
                    </div>
                    <div>
                      <h3 className="text-22 text-midnight_text dark:text-white font-bold group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-16 text-charcoalGray dark:text-muted dark:text-opacity-80 font-medium">
                        {item.company}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0c372a] bg-opacity-40 text-primary border border-primary border-opacity-20 px-4 py-1 rounded-full text-14 font-semibold">
                    {item.period}
                  </div>
                </div>

                <p className="text-16 text-charcoalGray dark:text-muted dark:text-opacity-65 mb-6 leading-relaxed">
                  {item.text}
                </p>

                {/* Achievements List */}
                <div className="border-t border-border dark:border-dark_border dark:border-opacity-5 pt-6">
                  <h4 className="text-14 text-midnight_text dark:text-white uppercase font-bold tracking-wider mb-4">
                    Responsabilidades y Logros Clave:
                  </h4>
                  <ul className="space-y-3">
                    {item.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-3 text-15 text-charcoalGray dark:text-muted dark:text-opacity-70 leading-relaxed">
                        <Icon icon="tabler:circle-check" className="text-primary text-20 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
