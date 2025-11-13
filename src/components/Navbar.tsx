"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "Welcome", href: "#welcome" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "Stories", href: "#contact" },
];

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
          filter: "blur(4px)",
        }}
      ></div>

      {/* Header content */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 relative z-10">
        <Image
          src="/favicon.svg"
          alt="My Portfolio"
          width={200}
          height={200}
          className="cursor-pointer w-10 h-10" />

        {/* <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-black/80 hover:text-black transition-all relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div> */}

        {/* <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-black hover:opacity-70 transition"
        >
          {open ? "×" : "☰"}
        </button> */}
      </div>

      {/* Mobile menu */}
      {/* <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`flex flex-col items-center ${
            scrolled
              ? "backdrop-blur-xl bg-white/40"
              : "bg-transparent"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-4 w-full text-center text-black hover:opacity-70 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div> */}
    </nav>
  );
}
