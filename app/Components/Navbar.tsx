"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "backdrop-blur-xl bg-white/10 shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide text-indigo-600">Vicki.</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-indigo-600 text-sm font-medium">
          <Link href="#home">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 text-indigo-600 text-xl">
          <a href="https://github.com/VeetoriAbbey" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/victoria-abiodun-654b74271/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-indigo-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 
        backdrop-blur-xl bg-white/10
        ${menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"}`}
      >
        <div className="flex flex-col items-center space-y-6 text-indigo-600 text-lg font-medium pb-4">
          <Link href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl pt-2">
            <a href="https://github.com/VeetoriAbbey" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/victoria-abiodun-654b74271/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
