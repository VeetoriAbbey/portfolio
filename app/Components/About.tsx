"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#F9FBFF] py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ================= TOP ABOUT CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-indigo-900 rounded-3xl px-8 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-center overflow-hidden"
        >
          {/* Decorative Circle */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#F6B800] rounded-full opacity-90" />

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-74 rounded-full overflow-hidden border-10 border-[#F6B800] shadow-xl">
              <Image
                src="/about3.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="relative z-10 text-white space-y-6">
            <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-semibold">
              About Me
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold">
              Who is <span className="text-[#F6B800]">Vicki?</span>
            </h2>

            <p className="text-white/80 leading-relaxed max-w-xl">
              I’m a creative web designer and frontend developer focused on
              building visually stunning, user-centric digital products.
              My goal is to turn ideas into meaningful online experiences.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {[
                { value: "2+", label: "Years Exp." },
                { value: "10+", label: "Projects" },
                { value: "19+", label: "Clients" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-extrabold text-[#F6B800]">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= TOOLS / SKILLS ================= */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-800"
          >
            Exploring the Tools <br />
            <span className="text-[#F6B800]">Behind My Designs</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-xl mx-auto mt-4"
          >
            I use industry-standard tools and modern technologies to create
            scalable, high-quality digital experiences.
          </motion.p>

          {/* TOOLS GRID */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {[
              { name: "Figma", icon: "🎨" },
              { name: "Photoshop", icon: "🖌️" },
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "Tailwind", icon: "💨" },
              { name: "VS Code", icon: "🧠" },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <p className="font-semibold text-gray-700">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
