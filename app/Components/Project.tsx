"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

export type Project = {
  title: string;
  desc: string;
  image: string;
  tech: string[];
  category: "React" | "UI" | "WordPress";
  link: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with Next.js and Tailwind CSS.",
    image: "/project1.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "React",
    link: "#",
  },
  {
    title: "Real Estate Landing Page",
    desc: "High-converting landing page for property marketing.",
    image: "/project2.jpg",
    tech: ["React", "SEO"],
    category: "UI",
    link: "#",
  },
  {
    title: "Mama's Kitchen",
    desc: "Responsive business website with clean UI.",
    image: "/project3.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "WordPress",
    link: "#",
  },
];

const filters: Array<"All" | Project["category"]> = [
  "All",
  "React",
  "UI",
  "WordPress",
];

export default function Project(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<
    "All" | Project["category"]
  >("All");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="bg-white px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Selected works showcasing my design & development skills.
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-indigo-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-white border border-indigo-200 rounded-full text-indigo-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
