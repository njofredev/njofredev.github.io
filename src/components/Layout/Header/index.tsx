"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeToggler from "./ThemeToggler";
import CommandPalette from "../../Common/CommandPalette";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  // Alt + K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-500 mx-auto px-4 ${
        sticky
          ? "top-4 max-w-screen-xl w-[calc(100%-2rem)]"
          : "top-0 w-full md:pt-8 pt-4 pb-5"
      }`}
    >
      <div className={`transition-all duration-300 ${
        sticky
          ? "bg-white/80 dark:bg-darkmode/70 backdrop-blur-md border border-border/50 dark:border-dark_border/10 py-3 px-6 rounded-2xl shadow-cause-shadow dark:shadow-none"
          : "lg:py-0 py-2 bg-transparent"
      }`}>
        <div className="container mx-auto flex items-center justify-between px-0">
          <Logo />
          
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-charcoalGray dark:text-white hover:text-primary transition-colors duration-300 flex h-8 w-8 items-center justify-center shrink-0"
              aria-label="Buscar"
              title="Buscar (Alt + K)"
            >
              <Icon icon="tabler:search" className="text-22" />
            </button>

            {/* Theme Toggler */}
            <ThemeToggler />

            {/* Actions for Desktop */}
            <a
              href="/scrap/jofrenicolascurriculum2026.pdf"
              download="CV_Nicolas_Jofre.pdf"
              className="hidden lg:flex items-center gap-2 bg-primary text-darkmode hover:bg-transparent hover:text-primary border border-primary px-4 py-2 rounded-lg font-medium transition-all duration-300"
            >
              <Icon icon="tabler:download" className="text-20" />
              Descargar CV
            </a>
            
            <a
              href="mailto:n.jofreandrade@gmail.com"
              className="hidden lg:flex items-center gap-2 bg-transparent text-primary hover:bg-primary hover:text-darkmode border border-primary px-4 py-2 rounded-lg font-medium transition-all duration-300"
            >
              <Icon icon="tabler:mail" className="text-20" />
              Contacto
            </a>
            
            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-charcoalGray dark:bg-white transition-colors duration-300"></span>
              <span className="block w-6 h-0.5 bg-charcoalGray dark:bg-white transition-colors duration-300 mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-charcoalGray dark:bg-white transition-colors duration-300 mt-1.5"></span>
            </button>
          </div>
        </div>

        {/* Backdrop for mobile navigation */}
        {navbarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm lg:hidden" />
        )}
        
        {/* Mobile Navigation Drawer */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darkmode border-l border-border dark:border-dark_border dark:border-opacity-10 shadow-2xl transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border dark:border-dark_border dark:border-opacity-5">
            <Logo />

            <button
              onClick={() => setNavbarOpen(false)}
              className="text-midnight_text dark:text-white hover:text-primary transition-colors p-1"
              aria-label="Close menu Modal"
            >
              <Icon icon="tabler:x" className="text-26" />
            </button>
          </div>
          
          <nav className="flex flex-col items-start p-6 space-y-3">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            
            <div className="mt-8 flex flex-col space-y-4 w-full pt-6 border-t border-border dark:border-dark_border dark:border-opacity-5">
              <a
                href="/scrap/jofrenicolascurriculum2026.pdf"
                download="CV_Nicolas_Jofre.pdf"
                className="flex items-center justify-center gap-2 bg-primary text-darkmode px-4 py-2.5 rounded-lg font-medium hover:bg-transparent hover:text-primary border border-primary transition-all duration-300"
                onClick={() => setNavbarOpen(false)}
              >
                <Icon icon="tabler:download" className="text-20" />
                Descargar CV
              </a>
              <a
                href="mailto:n.jofreandrade@gmail.com"
                className="flex items-center justify-center gap-2 bg-transparent border border-primary text-primary px-4 py-2.5 rounded-lg font-medium hover:bg-primary hover:text-darkmode transition-all duration-300"
                onClick={() => setNavbarOpen(false)}
              >
                <Icon icon="tabler:mail" className="text-20" />
                Contacto
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Command Palette search modal */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;
