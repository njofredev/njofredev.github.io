import React from "react";
import { Metadata } from "next";
import PortfolioContent from "@/components/Home/PortfolioContent";

export const metadata: Metadata = {
  title: "Nicolás Jofré | Ingeniero en Informática & Administrador de TI",
  description: "Portafolio profesional de Nicolás Jofré Andrade. Especialista en desarrollo backend con Python/Django, bases de datos PostgreSQL en GCP, administración de TI, redes e IA.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function Home() {
  return <PortfolioContent />;
}
