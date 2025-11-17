"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? "backdrop-blur-2xl bg-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
      }}
    >
      {/* Liquid reflection line at bottom */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[1.2px] transition-all duration-700 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,0) 100%)",
          filter: "blur(2px)",
        }}
      ></div>

      {/* Header content */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 relative z-10">
        <Image
          src="/favicon.svg"
          alt="My Portfolio"
          width={200}
          height={200}
          className="cursor-pointer w-10 h-10"
          loading="eager"
          />
      </div>
    </nav>
  );
}
