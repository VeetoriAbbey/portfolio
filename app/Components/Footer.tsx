import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-indigo-900 text-white px-6 md:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-gray-200 items-center">
          © {new Date().getFullYear()} Vicki. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/victoria-abiodun-654b74271/" target="_blank" rel="noreferrer" className="hover:text-[#F6B800] transition">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/VeetoriAbbey" target="_blank" rel="noreferrer" className="hover:text-[#F6B800] transition">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
