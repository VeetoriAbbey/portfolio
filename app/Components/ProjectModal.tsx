import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "./Project";
import { JSX } from "react";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps): JSX.Element {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden"
      >
        <div className="relative h-56">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.desc}</p>

          <a
            href={project.link}
            className="inline-block text-indigo-600 font-semibold"
          >
            View Live →
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
