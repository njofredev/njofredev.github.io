import React, { FC } from "react";
import Link from "next/link";
import { footerlabels } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-20 pb-12 bg-darkmode border-t border-dark_border border-opacity-5">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-12 pb-12">
          
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <Logo />
            <p className="text-muted text-opacity-70 text-15 mt-6 leading-relaxed max-w-sm">
              Ingeniero de Ejecución en Informática enfocado en crear infraestructuras seguras, flujos automatizados de alta eficiencia e integraciones a la medida.
            </p>
            <div className="flex gap-4 items-center mt-6">
              <a
                href="https://github.com/njofredev"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-dark_grey bg-opacity-40 p-3 rounded-full border border-dark_border border-opacity-10 hover:border-primary transition-all duration-300"
              >
                <Icon
                  icon="fa6-brands:github"
                  width="20"
                  height="20"
                  className="text-white group-hover:text-primary transition-colors duration-300"
                />
              </a>
              <a
                href="mailto:n.jofreandrade@gmail.com"
                className="group bg-dark_grey bg-opacity-40 p-3 rounded-full border border-dark_border border-opacity-10 hover:border-primary transition-all duration-300"
              >
                <Icon
                  icon="tabler:mail"
                  width="20"
                  height="20"
                  className="text-white group-hover:text-primary transition-colors duration-300"
                />
              </a>
              <a
                href="/scrap/jofrenicolascurriculum2026.pdf"
                download="CV_Nicolas_Jofre.pdf"
                className="group bg-dark_grey bg-opacity-40 p-3 rounded-full border border-dark_border border-opacity-10 hover:border-primary transition-all duration-300"
              >
                <Icon
                  icon="tabler:download"
                  width="20"
                  height="20"
                  className="text-white group-hover:text-primary transition-colors duration-300"
                />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3 md:col-span-3 col-span-6">
            <h4 className="text-white mb-6 font-bold text-20 uppercase tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {footerlabels.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.herf}
                    className="text-muted text-opacity-70 hover:text-primary transition-colors duration-300 text-16"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-5 md:col-span-3 col-span-12">
            <h4 className="text-white mb-6 font-bold text-20 uppercase tracking-wider">Contacto Directo</h4>
            <ul className="space-y-4 text-16 text-muted text-opacity-70 font-mono">
              <li className="flex items-center gap-3">
                <Icon icon="tabler:phone" className="text-primary text-22 shrink-0" />
                <span>+569 5755 8966</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon icon="tabler:mail" className="text-primary text-22 shrink-0" />
                <a href="mailto:n.jofreandrade@gmail.com" className="hover:text-primary hover:underline transition-colors duration-300">
                  n.jofreandrade@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon icon="tabler:map-pin" className="text-primary text-22 shrink-0" />
                <span>Conchalí, Santiago, Chile</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-dark_border border-opacity-5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-14 text-muted text-opacity-40 font-mono">
          <p>
            © {new Date().getFullYear()} njofre.dev. Todos los derechos reservados.
          </p>
          <p>
            Desarrollado con Next.js, TailwindCSS y Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
