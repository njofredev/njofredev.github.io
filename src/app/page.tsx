import React from "react";
import BentoGrid from "@/components/Home/BentoGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nicolás Jofré | Ingeniero en Informática & Administrador de TI",
  description: "Portafolio profesional de Nicolás Jofré Andrade. Especialista en desarrollo backend con Python/Django, bases de datos PostgreSQL en GCP, administración de TI, redes e IA.",
};

export default function Home() {
  return (
    <main>
      <BentoGrid />
    </main>
  );
}
