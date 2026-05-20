"use client";
import { perksData } from "@/app/api/data";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Perks = () => {
  return (
    <section className="pb-28 pt-12 relative" id="perks">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-30px", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-charcoalGray dark:text-muted sm:text-28 text-18 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2">
              Educación &amp; <span className="text-primary">Formación</span>
            </p>
            <h2 className="text-midnight_text dark:text-white sm:text-40 text-30 font-bold max-w-2xl mx-auto">
              Bases de ingeniería complementadas con desarrollo ágil y mentalidad creativa.
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
          {perksData.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: "50px", opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white dark:bg-dark_grey bg-opacity-100 dark:bg-opacity-40 backdrop-blur-md border border-border dark:border-dark_border dark:border-opacity-5 p-8 rounded-3xl hover:border-primary hover:border-opacity-15 dark:hover:border-opacity-15 transition-all duration-300 flex flex-col items-center text-center group shadow-sm dark:shadow-none"
            >
              <div className="bg-[#0c372a] bg-opacity-50 p-5 rounded-2xl text-primary w-fit group-hover:scale-110 transition-transform duration-300">
                <Icon
                  icon={item.icon}
                  className="text-40"
                />
              </div>
              <h4 className="text-midnight_text dark:text-white text-22 font-bold mt-6 mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h4>
              <div
                className="text-charcoalGray dark:text-muted dark:text-opacity-70 text-15 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
    </section>
  );
};

export default Perks;
