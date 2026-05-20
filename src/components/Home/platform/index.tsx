import Link from "next/link";
import { Icon } from "@iconify/react";

const Platform = () => {
  return (
    <section className="md:pt-36 sm:pt-24 pt-12 relative z-1" id="collaboration-cta">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="bg-section bg-opacity-5 px-10 md:px-16 py-14 rounded-3xl border border-primary border-opacity-10 backdrop-blur-md grid grid-cols-12 items-center overflow-hidden relative">
          
          <div className="lg:col-span-8 col-span-12">
            <h2 className="text-white sm:text-40 text-30 font-bold mb-4">
              ¿Listo para impulsar tu <span className="text-primary">infraestructura tecnológica</span>?
            </h2>
            <p className="text-muted text-opacity-70 text-18 max-w-2xl leading-relaxed">
              Colaboremos para diseñar automatizaciones robustas, integrar APIs complejas y estructurar bases de datos optimizadas que aceleren el rendimiento y resguarden las operaciones de tu empresa.
            </p>
          </div>
          
          <div className="lg:col-span-4 col-span-12">
            <div className="flex lg:justify-end lg:mt-0 mt-8 justify-center">
              <a
                href="mailto:n.jofreandrade@gmail.com"
                className="text-darkmode bg-primary border border-primary py-4 px-8 rounded-xl sm:text-20 text-18 font-bold hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center gap-3 shadow-lg shadow-primary/10"
              >
                <Icon icon="tabler:send" className="text-22" />
                Hablemos Hoy
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
      </div>
    </section>
  );
};

export default Platform;
