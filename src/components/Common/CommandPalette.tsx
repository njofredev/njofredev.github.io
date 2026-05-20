"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

interface SearchItem {
  label: string;
  category: "Secciones" | "Tecnologías" | "Contacto";
  icon: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items: SearchItem[] = [
    {
      label: "Inicio",
      category: "Secciones",
      icon: "tabler:home",
      action: () => scrollToId("main-banner"),
    },
    {
      label: "Especialidades Técnicas",
      category: "Secciones",
      icon: "tabler:code",
      action: () => scrollToId("work"),
    },
    {
      label: "Trayectoria Profesional",
      category: "Secciones",
      icon: "tabler:timeline",
      action: () => scrollToId("timeline"),
    },
    {
      label: "Educación & Formación",
      category: "Secciones",
      icon: "tabler:school",
      action: () => scrollToId("perks"),
    },
    {
      label: "Logros & Proyectos",
      category: "Secciones",
      icon: "tabler:trophy",
      action: () => scrollToId("portfolio"),
    },
    {
      label: "Python & Django (Backend)",
      category: "Tecnologías",
      icon: "logos:python",
      action: () => scrollToId("work"),
    },
    {
      label: "PostgreSQL (Base de Datos)",
      category: "Tecnologías",
      icon: "logos:postgresql",
      action: () => scrollToId("work"),
    },
    {
      label: "Next.js & React (Frontend)",
      category: "Tecnologías",
      icon: "logos:nextjs-icon",
      action: () => scrollToId("work"),
    },
    {
      label: "Google Cloud Platform (GCP)",
      category: "Tecnologías",
      icon: "logos:google-cloud",
      action: () => scrollToId("portfolio"),
    },
    {
      label: "Make / Integromat (Automatización)",
      category: "Tecnologías",
      icon: "logos:make",
      action: () => scrollToId("work"),
    },
    {
      label: "Coolify (DevOps & Deploy)",
      category: "Tecnologías",
      icon: "logos:coolify",
      action: () => scrollToId("work"),
    },
    {
      label: "Descargar CV (PDF)",
      category: "Contacto",
      icon: "tabler:download",
      action: () => {
        const link = document.createElement("a");
        link.href = "/scrap/jofrenicolascurriculum2026.pdf";
        link.download = "CV_Nicolas_Jofre.pdf";
        link.click();
      },
    },
    {
      label: "Enviar Correo Electrónico",
      category: "Contacto",
      icon: "tabler:mail",
      action: () => {
        window.location.href = "mailto:n.jofreandrade@gmail.com";
      },
    },
    {
      label: "Llamar por Teléfono",
      category: "Contacto",
      icon: "tabler:phone",
      action: () => {
        window.location.href = "tel:+56957558966";
      },
    },
    {
      label: "Ver Perfil de GitHub",
      category: "Contacto",
      icon: "fa6-brands:github",
      action: () => {
        window.open("https://github.com/njofredev", "_blank");
      },
    },
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredItems, onClose]);

  // Scroll active item into view inside the modal list
  useEffect(() => {
    const activeEl = listRef.current?.querySelector(".active-search-item");
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[10vh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#000510] bg-opacity-70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-dark_grey border border-dark_border border-opacity-10 dark:border-opacity-20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform scale-100 flex flex-col max-h-[60vh] bg-opacity-95 backdrop-blur-xl">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-dark_border border-opacity-10">
          <Icon icon="tabler:search" className="text-primary text-24 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-white placeholder-muted placeholder-opacity-50 text-16 focus:outline-none font-sans"
            placeholder="Buscar secciones, tecnologías, contactos... (Alt + K)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button
            onClick={onClose}
            className="text-12 font-mono bg-darkmode px-2.5 py-1 rounded text-muted text-opacity-50 hover:text-white transition-colors border border-dark_border border-opacity-10 uppercase shrink-0"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="overflow-y-auto p-4 space-y-4 max-h-[45vh] custom-scrollbar"
        >
          {filteredItems.length > 0 ? (
            // Group items by category for cleaner look
            ["Secciones", "Tecnologías", "Contacto"].map((cat) => {
              const catItems = filteredItems.filter((item) => item.category === cat);
              if (catItems.length === 0) return null;

              return (
                <div key={cat} className="space-y-1">
                  <h4 className="text-12 font-mono text-primary font-bold uppercase tracking-wider px-3 py-1.5 opacity-60">
                    {cat}
                  </h4>
                  
                  {catItems.map((item) => {
                    const globalIdx = filteredItems.indexOf(item);
                    const isActive = globalIdx === selectedIndex;

                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          item.action();
                          onClose();
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-left font-sans ${
                          isActive
                            ? "bg-primary bg-opacity-20 border border-primary border-opacity-20 text-white active-search-item"
                            : "text-muted hover:text-white hover:bg-white hover:bg-opacity-5 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-primary bg-opacity-35 text-white" : "bg-darkmode text-muted text-opacity-80"}`}>
                            <Icon icon={item.icon} className="text-20" />
                          </div>
                          <span className="text-15 font-medium">{item.label}</span>
                        </div>
                        
                        {isActive && (
                          <span className="text-12 font-mono text-primary flex items-center gap-1">
                            Seleccionar
                            <Icon icon="tabler:corner-down-left" className="text-12" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 space-y-3">
              <Icon icon="tabler:mood-sad" className="text-muted text-opacity-30 text-48 mx-auto" />
              <p className="text-muted text-opacity-50 text-15 font-sans">
                No se encontraron resultados para "{query}"
              </p>
            </div>
          )}
        </div>
        
        {/* Footer shortcuts */}
        <div className="bg-darkmode bg-opacity-50 border-t border-dark_border border-opacity-5 px-6 py-3 flex items-center justify-between text-11 text-muted text-opacity-40 font-mono">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <kbd className="bg-dark_grey px-1.5 py-0.5 rounded border border-dark_border border-opacity-10 shadow">↑↓</kbd> Navegar
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-dark_grey px-1.5 py-0.5 rounded border border-dark_border border-opacity-10 shadow">Enter</kbd> Ejecutar
            </span>
          </div>
          <div>
            <span>njofre.dev buscador</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
