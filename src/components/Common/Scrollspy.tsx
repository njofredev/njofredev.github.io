"use client";
import React, { useEffect, useState } from "react";

interface ScrollspyProps {
  items: { id: string; label: string }[];
}

export default function Scrollspy({ items }: ScrollspyProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the main viewport area
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      items.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-4 no-print hidden md:flex">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="group flex items-center gap-3 cursor-pointer py-1"
          >
            {/* Hover Text Label */}
            <span
              className={`text-xs font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-black dark:border-white bg-white dark:bg-black transition-all duration-200 select-none ${
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto"
              }`}
            >
              {item.label}
            </span>

            {/* Line Dash Indicator */}
            <div
              className={`h-[2px] transition-all duration-300 ${
                isActive
                  ? "w-8 bg-black dark:bg-white shadow-[0_0_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  : "w-4 bg-gray-300 dark:bg-neutral-700 group-hover:w-6 group-hover:bg-black dark:group-hover:bg-white"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
