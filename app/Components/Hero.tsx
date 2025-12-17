"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const float = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function HeroSection() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-screen bg-[#F9FBFF] px-6 md:px-20 overflow-hidden flex items-center">
        
        {/* Background Shapes */}
        <div className="absolute -top-32 -left-32 w-105 h-105 bg-[#F6B800]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-130 h-130 bg-indigo-900 rounded-tl-[220px]" />

        <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center w-full py-20">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow text-sm font-semibold text-[#1F5D3A]">
              👋 Hello There
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A] leading-tight">
              I’m <span className="text-[#F6B800]">Vicki</span>, <br />
              Creative Web Designer
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              I design modern, high-converting websites that elevate brands
              and create meaningful digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-[#F6B800] text-white font-semibold shadow hover:scale-105 transition"
              >
                Hire Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center mt-12 md:mt-0"
          >
            {/* Yellow Circle */}
            <div className="absolute w-80 h-80 bg-[#F6B800] rounded-full -z-10" />

            {/* Image */}
            <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/profile.png"
                alt="Vicki"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badges */}
            <motion.span {...float} className="absolute -top-6 left-2 bg-white px-4 py-2 rounded-full shadow font-medium text-sm">
              🎨 UI/UX Design
            </motion.span>

            <motion.span {...float} className="absolute top-24 -right-8 bg-white px-4 py-2 rounded-full shadow font-medium text-sm">
              💻 Web Design
            </motion.span>

            <motion.span {...float} className="absolute bottom-10 -left-10 bg-white px-4 py-2 rounded-full shadow font-medium text-sm">
              ⚡ Branding
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white px-6 md:px-20 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
            Services I Provide
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Helping brands grow with design-driven solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "UI/UX Design",
              desc: "User-focused designs that improve engagement and usability.",
              icon: "🎨",
            },
            {
              title: "Web Development",
              desc: "Responsive, fast and SEO-friendly websites built to convert.",
              icon: "💻",
            },
            {
              title: "Brand Identity",
              desc: "Consistent visual identity that builds trust and recognition.",
              icon: "🚀",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg border hover:border-[#F6B800] transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
